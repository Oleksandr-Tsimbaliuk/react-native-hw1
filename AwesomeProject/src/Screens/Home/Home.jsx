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
import { Feather, Ionicons } from "@expo/vector-icons";

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
            >
              <Ionicons
                name="log-out-outline"
                size={30}
                color="#BDBDBD"
                style={{ marginRight: 16 }}
                // onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color }) => (
            // <TouchableOpacity
            //   onPress={() => navigation.navigate("PostsScreen")}
            // > </TouchableOpacity>
            <Ionicons
              name="grid-outline"
              size={24}
              color={focused ? "#212121CC" : "#BDBDBD"}
            />

            // color={"#212121CC"}
          ),
          tabBarLabel: "",
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
              // onPress={() =>
              //   navigation.navigate("Home", {
              //     screen: `${route.params.screen}`,
              //     params: {
              //       user: route.params.params.user,
              //     },
              //   })
              // }
            >
              <Ionicons name="arrow-back-outline" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color }) => (
            // <TouchableOpacity
            //   onPress={() => navigation.navigate("CreatePostsScreen")}
            // ></TouchableOpacity>
            <Ionicons
              name="add"
              size={24}
              color={focused ? "#212121CC" : "#BDBDBD"}
            />

            // color={"#212121CC"}
          ),
          tabBarLabel: "",
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
            >
              <Ionicons
                name="log-out-outline"
                size={30}
                color="#BDBDBD"
                style={{ marginRight: 16 }}
                // onPress={() => navigation.goBack()}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color }) => (
            // <TouchableOpacity
            //   onPress={() => navigation.navigate("CreatePostsScreen")}
            //   ></TouchableOpacity>
            <Feather
              name="user"
              size={24}
              color={focused ? "#212121CC" : "#BDBDBD"}
            />
          ),
          tabBarLabel: "",
        }}
      />
    </Tabs.Navigator>
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
