import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Home = () => {
  const { location } = useSelector((state: RootState) => ({
    location: state.locationReducer.city,
  }));

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text>{location}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 24,
  },
});
