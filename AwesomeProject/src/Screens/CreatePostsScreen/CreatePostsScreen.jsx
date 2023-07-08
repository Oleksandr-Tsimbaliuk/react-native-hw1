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
  TextInput,
  ImageBackground,
} from "react-native";

const CreatePostsScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  // const [isMakingPhoto, setIsMakingPhoto] = useState(true);
  const [inputTitle, setInputTitle] = useState("");
  const [photo, setPhoto] = useState(null);
  // const [post, setPost] = useState({
  //   title: "",
  //   location: {},
  //   comments: [],
  //   photo: {
  //     uri: "",
  //   },
  //   country: "",
  // });

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

  const makePhoto = async () => {
    if (photo) {
      return setPhoto(null);
    }
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
  };

  const handleAddPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") return;

    let result = await ImagePicker.launchImageLibraryAsync(options);

    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
      // setIsMakingPhoto(true);
      // const selectedAsset = result.assets[0];
      // setPost((prevPost) => ({
      //   ...prevPost,
      //   photo: {
      //     uri: selectedAsset.uri,
      //   },
      // }));
    }
  };

  // const handleNavigateToPosts = () => {
  //   navigation.navigate("PostsScreen");
  // };

  return (
    <View style={styles.container}>
      {photo ? (
        <ImageBackground source={{ uri: photo }} style={styles.previewPhoto}>
          <TouchableOpacity style={styles.button} onPress={makePhoto}>
            <View
              style={[
                styles.takePhotoOut,
                { backgroundColor: photo ? "#FFFFFF4D" : "#FFFFFF" },
              ]}
            >
              <Ionicons
                name="camera-outline"
                size={24}
                color={photo ? "#FFF" : "#BDBDBD"}
              ></Ionicons>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      ) : (
        <Camera style={styles.camera} type={type} ref={setCameraRef}>
          <View style={styles.photoView}>
            <TouchableOpacity style={styles.button} onPress={makePhoto}>
              <View
                style={[
                  styles.takePhotoOut,
                  { backgroundColor: photo ? "#FFFFFF4D" : "#FFFFFF" },
                ]}
              >
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color={photo ? "#FFF" : "#BDBDBD"}
                ></Ionicons>
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      )}

      <TouchableOpacity onPress={handleAddPhoto}>
        {photo ? (
          <Text style={styles.title}>Завантажити інше фото</Text>
        ) : (
          <Text style={styles.title}>Завантажте фото</Text>
        )}
      </TouchableOpacity>

      <TextInput
        placeholder="Назва..."
        type="text"
        required
        name="photo"
        value={inputTitle}
        onChangeText={setInputTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingBottom: 80, paddingTop: 32 },
  camera: {
    // flex: 1,
    // top: 32,
    // left: 16,

    borderRadius: 8,
    overflow: "hidden",
  },
  photoView: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    height: 240,
    width: 343,
    // borderRadius: 30,
    // paddingTop: 95,
  },
  previewPhoto: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    height: 240,
    width: 343,
    borderRadius: 8,
    overflow: "hidden",
  },

  button: {
    // display: "flex",
    // alignSelf: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },

  takePhotoOut: {
    // backgroundColor: "#FFFFFF",
    // borderWidth: 2,
    // borderColor: "white",

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
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginTop: 8,
  },
});

export default CreatePostsScreen;

// const handleInputTitle = (text) => {
//   setPost((prevPost) => ({
//     ...prevPost,
//     title: text,
//   }));
// };
