import React from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { logOutStart } from "../../redux/auth/auth.actions";

// components
import Button from "../Button/Button";

// sc
import {
  UserProfileScrollView,
  UserProfileTextView,
  UserProfileText,
  UserProfileButtonView,
} from "./UserProfile.styles";

const UserProfile = ({ goBack, navigate }) => {
  const userObject = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const { displayName, email, photoURL, uid } = userObject ? userObject : {};

  return (
    <UserProfileScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      {userObject ? (
        <React.Fragment>
          <UserProfileTextView>
            <UserProfileText>{displayName}</UserProfileText>
            <UserProfileText>{email}</UserProfileText>
            <UserProfileText>{photoURL}</UserProfileText>
            <UserProfileText>{uid}</UserProfileText>
          </UserProfileTextView>
          <UserProfileButtonView>
            <Button
              title="Logout"
              action={() => {
                dispatch(logOutStart());
                navigate("Shop");
              }}
            />
          </UserProfileButtonView>
        </React.Fragment>
      ) : (
        <UserProfileTextView>
          <UserProfileText>Please log in.</UserProfileText>
        </UserProfileTextView>
      )}
    </UserProfileScrollView>
  );
};

export default UserProfile;
