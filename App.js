import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateUser from "./screens/createUser";
import UserDetails from "./screens/userDetails";
import UsersList from "./screens/usersList";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      {/* se ve la primera en la lista */}
      <Stack.Screen name="CreateUser" component={CreateUser} />
      <Stack.Screen name="UsersList" component={UsersList} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
