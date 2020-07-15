import React, { useEffect, useState } from "react";
import * as ExpoImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as FileSystem from "expo-file-system";
import Constants from "expo-constants";

import { Alert } from "react-native";

// redux
import { useSelector } from "react-redux";

// components
import Button from "../../components/Button/Button";

// sc
import {
  ImagePickerView,
  ImagePickerTextView,
  ImagePickerText,
  ImagePickerImageView,
  ImagePickerScrollView,
  ImagePickerImage,
  ImagePickerControllsView,
  ImagePickerButtonView,
} from "./ImagePicker.styles";

const ImagePicker = () => {
  const { width } = useSelector((state) => state.settings);
  const { currentUser } = useSelector((state) => state.auth);

  // ask premission for using camera and camera roll once component landed
  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA_ROLL,
        Permissions.CAMERA
      );
      //   console.log(status);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);

  // define state to store image
  const [image, setImage] = useState(null);

  // existing image picker handler
  const pickImage = async () => {
    try {
      const result = await ExpoImagePicker.launchImageLibraryAsync({
        mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) setImage({ image: result.uri });
      //   console.log(result);
    } catch (err) {
      alert(err.message);
    }
  };

  // camera launcher
  const launchCamera = async () => {
    try {
      const result = await ExpoImagePicker.launchCameraAsync({
        mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) setImage({ image: result.uri });
      //   console.log(result);
    } catch (err) {
      alert(err.message);
    }
  };

  // store file locally
  const storeFileToFileSystem = async () => {
    try {
      const userId = currentUser ? currentUser.uid : "default";
      const imageName = `${Date.now()}-${userId}-${image.image
        .split("/")
        .pop()}`;
      const from = image.image;
      const to = `${FileSystem.documentDirectory}${imageName}`;

      await FileSystem.moveAsync({ from, to });
      setImage({ image: to });
      Alert.alert(
        "File System",
        "Image saved successfuly.",
        [
          {
            text: "OK",
            onPress: () => {},
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    } catch (err) {
      alert(err.message);
    }
  };

  //   console.log(FileSystem.documentDirectory);
  //   console.log(FileSystem.downloadAsync /*uri, fileUri, options */);

  //   console.log(image);

  return (
    <ImagePickerView>
      <ImagePickerTextView>
        <ImagePickerText>
          <ImagePickerText>Image Picker Reference:</ImagePickerText>
        </ImagePickerText>
      </ImagePickerTextView>
      <ImagePickerScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      >
        {image ? (
          <ImagePickerImageView width={width}>
            <ImagePickerImage source={{ uri: image.image }} />
          </ImagePickerImageView>
        ) : (
          <ImagePickerText>
            <ImagePickerText>Please pick an image.</ImagePickerText>
          </ImagePickerText>
        )}
      </ImagePickerScrollView>

      {image ? (
        <ImagePickerControllsView>
          <ImagePickerButtonView>
            <Button title="Reset" action={() => setImage(null)} />
          </ImagePickerButtonView>
          <ImagePickerButtonView>
            <Button title="Save" action={storeFileToFileSystem} />
          </ImagePickerButtonView>
        </ImagePickerControllsView>
      ) : (
        <ImagePickerControllsView>
          <ImagePickerButtonView>
            <Button title="Pick Image" action={pickImage} />
          </ImagePickerButtonView>
          <ImagePickerButtonView>
            <Button title="Use Camera" action={launchCamera} />
          </ImagePickerButtonView>
        </ImagePickerControllsView>
      )}
    </ImagePickerView>
  );
};

export default ImagePicker;