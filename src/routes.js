import { createStackNavigator } from "react-navigation";

import Main from "./pages/main";
import Equipes from "./pages/teams";

export default createStackNavigator(
  {
    Main,
    Equipes
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
