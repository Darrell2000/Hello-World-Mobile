import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Box number="#1" />
          <Box number="#2" />
          <Box number="#5" />
          <Box number="#6" />
        </View>

        <View style={styles.column}>
          <Box number="#3" />
          <Box number="#4" />
          <Box number="#7" />
          <Box number="#8" />
        </View>
      </View>
    </SafeAreaView>
  );
}

function Box({ number }: { number: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  column: {
    flexDirection: "column",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  boxText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
