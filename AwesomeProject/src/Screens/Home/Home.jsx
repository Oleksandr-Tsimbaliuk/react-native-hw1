import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useNavigation, useRoute } from "@react-navigation/core";

import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerTitle: () => <Text style={styles.headerTitle}>Публікації</Text>,
          headerRight: () => (
            <TouchableOpacity
              style={styles.logOutButton}
              onPress={() => navigation.navigate("Login")}
              Title={"Return to login"}
            >
              <Text>Login</Text>
              {/* <Ionicons name="arrow-back-outline" size={24} color="#212121" /> */}
            </TouchableOpacity>
          ),
          // tabBarIcon: ({ color }) => (
          //   <Ionicons name="add" size={24} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerTitle: () => (
            <Text style={styles.headerTitle}>Створити публікацію</Text>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={styles.arrowButton}
              onPress={() => navigation.navigate("PostsScreen")}
              Title={"Return to home"}
            >
              <Text>Home</Text>
              {/* <Ionicons name="log-out-outline" size={24} color="#BDBDBD" /> */}
            </TouchableOpacity>
          ),
          // tabBarIcon: ({ color }) => (
          //   <Feather name="user" size={24} color={color} />
          // ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: "",
          headerRight: () => (
            <TouchableOpacity
              style={styles.logOutButton}
              onPress={() => navigation.navigate("Login")}
              Title={"Return to login"}
            >
              <Text>Login</Text>
              {/* <Ionicons name="log-out-outline" size={24} color="#BDBDBD" /> */}
            </TouchableOpacity>
          ),
          // tabBarIcon: ({ color }) => (
          //   <Feather name="user" size={24} color={color} />
          // ),
        }}
      />
    </Tabs.Navigator>
    // <View style={styles.container}>
    //   <Text>Home</Text>
    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
