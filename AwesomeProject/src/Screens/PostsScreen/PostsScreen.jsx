import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";

const PostsScreen = () => {
  const navigation = useNavigation();

  const {
    params: { userId },
  } = useRoute();

  const handleLogoutPress = () => {
    console.log("Logout");
  };

  return (
    <View style={styles.postsScreenContainer}>
      <View style={styles.postsUserContainer}>
        <Image></Image>
        <View style={styles.postsUserData}>
          <Text>UserName</Text>
          <Text>UserEmail</Text>

          <View style={styles.postsList}>
            <View style={styles.postItem}>
              <Image style={styles.postImage}></Image>
              <Text style={styles.postTitle}></Text>
            </View>
            <View style={styles.postData}>
              <TouchableOpacity>post.comments</TouchableOpacity>
              <TouchableOpacity>post.location</TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;

export const styles = StyleSheet.create({
  postsScreenContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
  },
  postsScreenHeaderContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: 90,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 12,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderBottomWidth: 1,
    // backgroundColor: "#000000"
  },
  postsScreenHeader: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: 500,
    fontSize: 17,
  },
});
