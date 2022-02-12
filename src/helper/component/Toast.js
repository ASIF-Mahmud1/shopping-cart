import React from "react";
import { ToastAndroid } from "react-native";

const showToast = () => {
  ToastAndroid.show("You have waited more than 20 seconds in Checkout page", ToastAndroid.LONG);
};


export {
  showToast
}