import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import GroupsScreen from "../screens/GroupsScreen";
import ChatsScreen from "../screens/ChatsScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  const groupsIcon = (focused) => (
    <MaterialCommunityIcons
      name="account-group"
      size={25}
      style={focused ? styles.tab : { color: "rgba(255, 255, 255, 0.5)" }}
    />
  );
  const tab = (text, focused) => (
    <Text
      style={[
        focused ? { color: "rgba(255, 255, 255, 1)" } : styles.tab,
        { fontSize: 15 },
      ]}
    >
      {text}
    </Text>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "#128C7E" },
          tabBarActiveTintColor: "white",
          tabBarIndicatorStyle: { backgroundColor: "white" },
        }}
      >
        <Tab.Screen
          name={"Groups"}
          component={GroupsScreen}
          options={{
            title: ({ focused }) => groupsIcon(focused),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={ChatsScreen}
          options={{
            title: ({ focused }) => tab("Chats", focused),
          }}
        />
        <Tab.Screen
          name="Status"
          component={StatusScreen}
          options={{
            title: ({ focused }) => tab("Status", focused),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={CallsScreen}
          options={{
            title: ({ focused }) => tab("Calls", focused),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tab: {
    color: "rgba(255, 255, 255, 0.7)",
  },
});
