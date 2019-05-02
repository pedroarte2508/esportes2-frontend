import React, { Component } from "react";
import SyncStorage from "sync-storage";
import Menu from "../config/MenuConfig";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

export default class Main extends Component {
  static navigationOptions = {
    title: "Menu"
  };

  async componentWillMount() {
    const data = await SyncStorage.init();
    console.log("AsyncStorage is ready!", data);
    const logado = SyncStorage.get("__logado");
    if (logado != "S") {
      this.props.navigation.navigate("Login");
    }
  }

  state = {
    Menu,
    Submenu: Menu,
    isSubmenu: false
  };

  goLink = submenu => {
    alert(JSON.stringify(submenu));
  };

  renderItem = ({ item }) => (
    <View style={styles.teamContainer}>
      <TouchableOpacity
        style={styles.teamButton}
        onPress={() => {
          if (!this.state.isSubmenu) {
            this.setState({ Submenu: item.submenu, isSubmenu: true });
          } else {
            this.setState({ Submenu: Menu, isSubmenu: false });

            if (item.title == "Voltar") {
              this.componentDidMount();
            } else {
              this.props.navigation.navigate(item.navigate);
            }
          }
        }}
      >
        <Text style={styles.teamButtonText}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.Submenu}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
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
