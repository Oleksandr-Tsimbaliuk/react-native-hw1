import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    left: 128,
    marginRight: "auto",
    marginLeft: "auto",
    top: -60,
    height: 120,
    width: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  registrationForm: {
    // display: "flex",
    marginTop: 32,
    marginBottom: 40,
    gap: 16,
    // top: -32,
  },
  loginFormHeader: {
    margin: 0,
    padding: 0,
    marginBottom: 32,
    fontFamily: "Roboto-Bold",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  registrationFormSubmitButton: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
});
