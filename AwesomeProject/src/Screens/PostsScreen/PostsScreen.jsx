import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/core";
import UserInfo from "../../components/UserInfo/UserInfo";
import posts from "../../posts";

const PostsScreen = () => {
  const navigation = useNavigation();
  // const {
  //   params: { img, title, geoLocation },
  // } = useRoute();

  //   const handleLogoutPress = () => {
  //     console.log("Logout");
  //   };

  return (
    <ScrollView style={styles.postsScreenContainer}>
      <View style={styles.postsUserContainer}>
        <UserInfo />

        {posts.map(({ img, title, comments, likes, location }) => {
          return (
            <View>
              <Image
                source={{ uri: img }}
                style={{
                  width: "100%",
                  height: 240,
                  marginBottom: 8,
                  borderRadius: 8,
                }}
              />
              <Text style={{ marginBottom: 8 }}>{title}</Text>
              <View style={styles.postData}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Comments")}
                >
                  <Ionicons
                    name="chatbubble-outline"
                    size={24}
                    color="#BDBDBD"
                    // style={styles.commentIcon}
                  />
                  <Text> {comments.length}</Text>
                </TouchableOpacity>

                <Ionicons
                  name="thumbs-up"
                  size={24}
                  color="#BDBDBD"
                  // style={styles.commentIcon}
                />
                <Text> {likes}</Text>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Map", {
                      params: location,
                    })
                  }
                >
                  <Ionicons
                    name="location-outline"
                    size={24}
                    color="#BDBDBD"
                    // style={styles.areaIcon}
                  />
                  <Text
                  // style={styles.postArea}
                  >
                    city, country
                    {/* {`${posts.city}, ${posts.country}`} */}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default PostsScreen;

export const styles = StyleSheet.create({
  // postsScreenContainer: {
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "#ffffff",
  // },
  // postsScreenHeaderContainer: {
  //   position: "relative",
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "flex-end",
  //   alignItems: "flex-end",
  //   width: "100%",
  //   height: 90,
  //   paddingLeft: 16,
  //   paddingRight: 16,
  //   paddingBottom: 12,
  //   borderStyle: "solid",
  //   borderColor: "#E8E8E8",
  //   borderBottomWidth: 1,
  //   // backgroundColor: "#000000"
  // },
  // postsScreenHeader: {
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   fontWeight: 500,
  //   fontSize: 17,
  // },
  avatarImage: { width: 120, height: 120, borderRadius: 16 },
});
