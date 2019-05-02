import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Team from "./pages/teams";
import Player from "./pages/player";
import Cup from "./pages/cup";
import Login from "./pages/login";

import StylesConfig from "./config/StylesConfig";

export default createStackNavigator(
  {
    Login,
    Main,
    Team,
    Player,
    Cup
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: StylesConfig.statusBarColor
      },
      headerTintColor: "#FFF"
    }
  }
);
