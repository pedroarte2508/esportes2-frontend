import React, { Component } from "react";
import api from "../services/api";
import { View, Text } from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: "Esportes"
  };

  componentDidMount() {
    this.loadTeams();
  }

  loadTeams = async () => {
    console.log("iniciando aplicação...");
    const response = await api.get("/teams");
    const { docs } = response.data;
    console.log(docs);
    console.log("requisição finalizada...");
  };

  render() {
    return (
      <View>
        <Text>Página Main</Text>
      </View>
    );
  }
}
