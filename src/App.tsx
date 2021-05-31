import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { NativeRouter as Router } from "react-router-native";
import { store } from "./store";
import { Routes } from "./routes";

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 16,
    backgroundColor: "#fff",
  },
});
