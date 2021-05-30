import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { MainView } from "./containers/MainView";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainView />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
