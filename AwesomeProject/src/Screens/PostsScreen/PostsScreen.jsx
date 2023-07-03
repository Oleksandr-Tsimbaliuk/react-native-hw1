import React from "react";
import { TouchableOpacity, View } from "react-native";

const PostsScreen = () => {
  return (
    <View style={postsScreenContainer}>
      <View style={postsScreenHeaderContainer}>
        <Text>Публікації</Text>
        <TouchableOpacity>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostsScreen;
