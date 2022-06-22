import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native"
import { useState } from "react"

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("")

  const changeHandler = (value) => {
    setText(value)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        onPress={() => {
          submitHandler(text)
          setText("")
        }}
        style={styles.button}
      >
        <Text style={styles.text}>add todo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#496766',
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOpacity: 0.3,
    elevation: 4,
    shadowRadius: 8,
    shadowOffset : { width: 1, height: 13},
  },
  text: {
    color:'#fff',
    textAlign:'center',
  }
})
