import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { updateLocation } from "../state/weather";
import { RootState } from "../store";

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    letterSpacing: 2,
    fontWeight: "bold",
  },
  location: {
    fontSize: 20,
    letterSpacing: 2,
  },
});

export const MainView = () => {
  const dispatch = useDispatch();

  const { currentLocation } = useSelector((state: RootState) => ({
    currentLocation: state.weatherReducer.location,
  }));

  const handleUpdateLocation = (location: string) => {
    dispatch(updateLocation(location));
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Weather Application</Text>
      <Text style={styles.location}>{`You searched for:\n ${
        currentLocation || "N/A"
      }`}</Text>
      <Button
        title="Update Location"
        onPress={() => handleUpdateLocation("Charlotte, NC")}
      ></Button>
    </View>
  );
};
