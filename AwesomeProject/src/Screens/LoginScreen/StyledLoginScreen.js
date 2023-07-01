import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  loginContainer: {
    position: "absolute",
    top: "40%",
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

  loginForm: {
    // display: "flex",
    marginTop: 32,
    gap: 16,
  },
  loginFormHeader: {
    marginTop: 32,
    fontFamily: "Roboto-Bold",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  loginFormSubmitButton: {
    width: "100%",
    height: 50,
    marginTop: 43,
    marginBottom: 16,
    padding: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
});
