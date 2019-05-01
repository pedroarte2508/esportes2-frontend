import React, { Component } from "react";
import api from "../services/api";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class Cup extends Component {
  static navigationOptions = {
    title: "Eventos"
  };

  state = {
    playerInfo: {},
    docs: [],
    page: 1
  };

  componentDidMount() {
    this.loadTeams();
  }

  loadTeams = async (page = 1) => {
    const response = await api.get(`/teams?page=${page}`);
    const { docs, ...playerInfo } = response.data;
    this.setState({ docs: [...this.state.docs, ...docs], playerInfo, page });
  };

  loadMore = () => {
    const { page, playerInfo } = this.state;
    if (page == playerInfo.pages) return;
    const pageNumber = page + 1;
    this.loadTeams(pageNumber);
  };

  renderItem = ({ item }) => (
    <View style={styles.teamContainer}>
      <Text styles={styles.teamTitle}>{item.name}</Text>
      <Image source={{ uri: item.picture }} style={styles.image} />

      <TouchableOpacity style={styles.teamButton} onPress={() => {}}>
        <Text style={styles.teamButtonText}>Visualizar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flex: 1
  },

  teamContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  image: {
    marginTop: 5,
    width: 50,
    height: 50
  },

  list: {
    padding: 20
  },

  teamButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#00a90a",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },

  teamButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00a90a"
  },

  teamTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  }
});
