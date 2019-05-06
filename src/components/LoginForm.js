import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import StylesConfig from "../config/StylesConfig";
import api from "../services/api";
import SyncStorage from "sync-storage";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    loginInput: "",
    passwordInput: ""
  };

  async login() {
    const data = {
      login: this.state.loginInput,
      password: this.state.passwordInput
    };
    const user = await api
      .post("/login", data)
      .then(data => {
        console.log(data, "tamanho: " + data.data.length, this.state);
        if (data.data.length > 0) {
          SyncStorage.set("__logado", "S");
          SyncStorage.set("__user", JSON.stringify(data.data));
          this.props.navigate.navigate("Main");
        } else {
          alert("Login ou senha inválidos");
        }
      })
      .catch(err => {
        console.log(err);
      });

    // const user = await fetch("http://localhost:3333/api/login", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     login: this.state.loginInput,
    //     password: this.state.passwordInput
    //   })
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     return responseJson.data;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

    // console.log("user", user);
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="rgba(255,255,255,0.5)"
          onSubmitEditing={() => {
            this.passwordInput.focus();
          }}
          returnKeyType="next"
          autoCapitalize="none"
          value={this.state.loginInput}
          onChangeText={loginInput => this.setState({ loginInput })}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,0.5)"
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          autoCapitalize="none"
          value={this.state.passwordInput}
          onChangeText={passwordInput => this.setState({ passwordInput })}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.login();
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: StylesConfig.statusBarColorLight,
    marginBottom: 20,
    color: "#FFF",
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: "#27ae60",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  }
});
