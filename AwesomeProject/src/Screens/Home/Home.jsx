import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
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
