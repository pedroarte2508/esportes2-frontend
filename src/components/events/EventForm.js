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

export default class EventForm extends Component {
  static navigationOptions = {
    title: "Cadastro de Eventos",
    alignItems: "center"
  };

  state = {
    title: "",
    description: "",
    picture: "",
    beginDate: Date.now,
    endDate: Date.now
  };

  async Add() {
    const { title, description } = this.state;

    const event = await api
      .post("/events", {
        title,
        description
      })
      .then(res => {
        Alert.alert("Sucesso", `${res.data.title} cadastrado com sucesso`);
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
          value={this.state.title}
          placeholder="Título do Evento. Ex: Taça Guaianazes"
          onChangeText={title => this.setState({ title })}
        />

        <TextInput
          style={styles.input}
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
          placeholder="Descrição do evento. Ex: Torneio que vai durar uma semana com 16 equipes."
          multiline={true}
          numberOfLines={8}
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
