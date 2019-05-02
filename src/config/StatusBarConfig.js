import { StatusBar } from "react-native";
import StylesConfig from "./StylesConfig";

StatusBar.setBackgroundColor(StylesConfig.statusBarColor);
StatusBar.setBarStyle("light-content");
StatusBar.setNetworkActivityIndicatorVisible(false);
