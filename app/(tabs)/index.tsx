import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TodoScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(["Hello", "Temp", "Test", "test1"]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's tasks</Text>

      {tasks.map((item, index) => (
        <View key={index} style={styles.taskBox}>
          <View style={styles.square} />
          <Text style={styles.taskText}>{item}</Text>

          <TouchableOpacity onPress={() => deleteTask(index)}>
            <View style={styles.circle} />
          </TouchableOpacity>
        </View>
      ))}

      <View style={styles.bottomWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity onPress={addTask}>
          <View style={styles.addButton}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9dddd",
    paddingTop: 100,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  taskBox: {
    backgroundColor: "#f1f1f1",
    padding: 20,
    borderRadius: 10,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 28,
    height: 28,
    backgroundColor: "#8bbbd0",
    borderRadius: 5,
    marginRight: 20,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
  },
  circle: {
    width: 18,
    height: 18,
    borderColor: "#5a91a3",
    borderWidth: 3,
    borderRadius: 10,
  },
  bottomWrapper: {
    position: "absolute",
    bottom: 40,
    left: 25,
    right: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 30,
    textAlign: "center",
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "#f1f1f1",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  plus: {
    fontSize: 36,
  },
});
