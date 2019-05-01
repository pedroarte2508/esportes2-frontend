import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Team from "./pages/teams";
import Player from "./pages/player";
import Cup from "./pages/cup";

export default createStackNavigator(
  {
    Main,
    Team,
    Player,
    Cup
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#00a90a"
      },
      headerTintColor: "#FFF"
    }
  }
);
