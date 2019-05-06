import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import StylesConfig from "../../config/StylesConfig";
import api from "../../services/api";

export default class TeamForm extends Component {
  static navigationOptions = {
    title: "Cadastro de Equipes",
    alignItems: "center"
  };

  state = {
    name: "",
    picture: ""
  };

  async Add() {
    const { name } = this.state;

    const team = await api
      .post("/teams", {
        name
      })
      .then(res => {
        Alert.alert(
          "Sucesso",
          `Equipe ${res.data.name} cadastrado com sucesso`
        );
        console.log("Cadastrado com sucesso", res);
      })
      .catch(err => {
        console.log("Ocorreu um erro", err);
        Alert.alert("Aviso", "Não cadastrado");
      });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          placeholder="Nome da equipe"
          onChangeText={name => this.setState({ name })}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            this.Add();
          }}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 0,
    backgroundColor: StylesConfig.statusBarColor
  },
  input: {
    height: 40,
    backgroundColor: "#FFF",
    marginBottom: 20,
    color: StylesConfig.statusBarColor,
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
