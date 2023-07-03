import React from "react";
import { TouchableOpacity, View } from "react-native";

const PostsScreen = () => {
    
  const handleLogoutPress = () => {
    console.log("Logout");
  };

  return (
    <View style={postsScreenContainer}>
      <View style={postsScreenHeaderContainer}>
        <Text>Публікації</Text>
        <TouchableOpacity onPress={handleLogoutPress}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostsScreen;
