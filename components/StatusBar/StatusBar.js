import React from "react";
import Constants from "expo-constants";

// sc
import { StatusBarView } from "./StatusBar.styles";

const StatusBar = () => {
  const statusBarHeight = Constants.statusBarHeight;
  return <StatusBarView height={statusBarHeight} />;
};

export default StatusBar;
