import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { logOutStart } from "../../redux/auth/auth.actions";

// components
import Button from "../Button/Button";

// sc
import {
  UserProfileView,
  UserProfileScrollView,
  UserProfileTopView,
  UserProfileImageView,
  UserProfileImage,
  UserProfileTextView,
  UserProfileText,
  UserProfileBottomView,
} from "./UserProfile.styles";

const UserProfile = ({ goBack, navigate }) => {
  const userObject = useSelector((state) => state.auth.currentUser);
  const width = useSelector((state) => state.settings.width);
  const dispatch = useDispatch();
  const { displayName, email, photoURL } = userObject ? userObject : {};

  return (
    <UserProfileView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      {userObject ? (
        <React.Fragment>
          <UserProfileScrollView>
            <UserProfileTopView>
              <UserProfileImageView width={width}>
                <UserProfileImage source={{ uri: photoURL }} />
              </UserProfileImageView>
              <UserProfileTextView>
                <UserProfileText numberOfLines={1}>
                  {displayName}
                </UserProfileText>
                <UserProfileText numberOfLines={1}>{email}</UserProfileText>
              </UserProfileTextView>
            </UserProfileTopView>
          </UserProfileScrollView>
          <UserProfileBottomView>
            <Button
              title="Logout"
              action={() => {
                dispatch(logOutStart());
                navigate("Shop");
              }}
            />
          </UserProfileBottomView>
        </React.Fragment>
      ) : (
        <UserProfileTextView>
          <UserProfileText>Please log in.</UserProfileText>
        </UserProfileTextView>
      )}
    </UserProfileView>
  );
};

export default UserProfile;
