import React, { useState, useEffect, useRef } from "react";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Ionicons } from "@expo/vector-icons";
// import { TextInput } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Alert,
} from "react-native";

const CreatePostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={setCameraRef}>
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
              }
            }}
          >
            <View style={styles.takePhotoOut}>
              <Ionicons
                ы
                name="camera-outline"
                size={24}
                color="#FFF"
              ></Ionicons>
              {/* <View style={styles.takePhotoInner}></View> */}
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: {
    // flex: 1,
    top: 32,
    left: 16,
    height: 267,
    width: 343,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 95,
  },

  button: {
    // display: "flex",
    // alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },

  takePhotoOut: {
    // borderWidth: 2,
    // borderColor: "white",
    backgroundColor: "#FFFFFF4D",

    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 50,
  },
});

export default CreatePostsScreen;
