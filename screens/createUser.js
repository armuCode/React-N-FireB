import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import firebase from "../database/firebase";

const CreateUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeText = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const saveNewUser = async () => {
    if (state.name === "") return alert("Please provide a name");
    else {
      await firebase.db.collection("users").add({
        //voy a guardar un objeto
        name: state.name,
        email: state.email,
        phone: state.phone,
      });
      alert("User saved");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Name User"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email User"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Phone User"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <Button
        title="Save user"
        onPress={() => {
          saveNewUser();
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default CreateUser;
