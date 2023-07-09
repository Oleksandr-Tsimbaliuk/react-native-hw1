import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import UserInfo from "../../components/UserInfo/UserInfo";
import users from ".././../users";

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

        {users.posts.map(({ img, title, comments, likes, location }) => {
          return <></>;
        })}

        <View style={styles.postsUserData}>
          <View style={styles.postsList}>
            <View style={styles.postItem}>
              {/* <Image style={styles.postImage}></Image> */}
              <Text>Image</Text>
              <Text style={styles.postTitle}>Title</Text>
            </View>
            <View style={styles.postData}>
              <TouchableOpacity>
                <Text>post.comments</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>post.location</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
