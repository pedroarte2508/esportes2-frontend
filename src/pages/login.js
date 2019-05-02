import React, { Component } from "react";
import Menu from "../config/MenuConfig";
import SyncStorage from "sync-storage";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import LoginForm from "../components/LoginForm";

export default class Login extends Component {
  static navigationOptions = {
    title: "Bem vindo(a)!",
    alignItems: "center"
  };

  async componentWillMount() {
    const data = await SyncStorage.init();
    console.log("AsyncStorage is ready!", data);
    const logado = SyncStorage.get("__logado");
    if (logado == "S") {
      this.props.navigation.navigate("Main");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../images/E.png")} />
          <Text style={styles.title}>
            Gerencie as atividades esportivas da sua comunidade
          </Text>
        </View>

        <View style={styles.formContainer}>
          <LoginForm navigate={this.props.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#20bf6b",
    flex: 1
  },

  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },

  formContainer: {},

  logo: {
    width: 100,
    height: 100
  },

  title: {
    color: "#ffffff",
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9
  }
});
