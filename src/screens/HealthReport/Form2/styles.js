import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styles = StyleSheet.create({
  primaryContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    marginHorizontal: 40,
    paddingBottom: 180,
  },
  bodyText: {
    marginHorizontal: 40,
    marginVertical: 16,
    textAlign: "center",
    fontSize: 12,
    color: "#383838",
  },
  textInputContainer: {
    marginTop: 8,
  },
  textInputLabel: {
    color: "#737373",
    fontSize: 12,
    marginBottom: 2,
  },
  textInput: {
    width: "100%",
    backgroundColor: "#F9F9F9",
    height: 40,
    elevation: 1,
  },
  nextButtonContainer: {
    marginVertical: 12,
    alignSelf: "center",
    width: 90,
  },
  nextButton: {
    borderRadius: 30,
  },
}); //end of styles
