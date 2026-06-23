import { StyleSheet, Text, View } from "react-native";

export default function TodoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today’s tasks</Text>

      <View style={styles.taskBox}>
        <View style={styles.square} />
        <Text style={styles.taskText}>Task 1</Text>
        <View style={styles.circle} />
      </View>

      <View style={styles.taskBox}>
        <View style={styles.square} />
        <Text style={styles.taskText}>Task 2</Text>
        <View style={styles.circle} />
      </View>

      <View style={styles.addButton}>
        <Text style={styles.plus}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9F2F1",
    paddingTop: 120,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 45,
  },
  taskBox: {
    backgroundColor: "white",
    height: 80,
    borderRadius: 10,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  square: {
    width: 35,
    height: 35,
    backgroundColor: "#A7DCE7",
    borderRadius: 6,
    marginRight: 25,
  },
  taskText: {
    flex: 1,
    fontSize: 20,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#4A9DB1",
  },
  addButton: {
    position: "absolute",
    right: -45,
    bottom: 140,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#2D9CDB",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    color: "white",
    fontSize: 50,
  },
});
