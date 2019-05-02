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

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
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
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,0.5)"
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          autoCapitalize="none"
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            console.log("clicado");
            this.props.navigate.navigate("Main");
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
