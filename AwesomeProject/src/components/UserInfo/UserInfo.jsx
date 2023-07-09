import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const UserInfo = () => {
  return (
    <View style={styles.userContainer}>
      <Image
        source={require("../../../assets/images/User.jpg")}
        style={{ width: 60, height: 60, borderRadius: 16 }}
      />
      <View>
        <Text style={{ fontSize: 13, fontWeight: 700 }}>Natali Romanova</Text>
        <Text style={{ fontSize: 11, fontWeight: 400 }}>
          natali.romanova@gmail.com
        </Text>
      </View>
    </View>
  );
};

export default UserInfo;

export const styles = StyleSheet.create({
  userContainer: {
    height: 60,
    marginTop: 32,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
