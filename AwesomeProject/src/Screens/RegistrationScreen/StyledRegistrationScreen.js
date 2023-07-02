import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  registrationContainer: {
    position: "absolute",
    top: "32.5%",
    width: "100%",
    height: "100%",
    paddingLeft: 16,
    paddingRight: 16,

    borderTopLeftRadius: 20,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 20,
    // marginTop: "auto",
    // display: "flex",
  },
  userImageContainer: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 128,
    top: -60,
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  registrationForm: {
    marginTop: 32,
    gap: 16,
  },
  registrationFormHeader: {
    marginTop: 92,
    lineHeight: 35,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontWeight: 500,
    fontSize: 30,
  },
  registrationFormSubmitButton: {
    marginTop: 32,
    marginBottom: 16,
    padding: 16,
    height: 50,
    width: "100%",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  // container: {
  //   flex: 1,
  //   justifyContent: "flex-end",
  // },
});
