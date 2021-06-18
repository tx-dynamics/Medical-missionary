import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { hexToRgbA } from "../../../helper/genericFunctions";
const cardStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
  height: 25,
  width: 55,
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 8,
  marginRight: 20,
};
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
  yesNoPrimaryContainer: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  yesNoContainer: {
    ...cardStyle,
    backgroundColor: "#fff",
  },
  yesNoContainerSelected: {
    ...cardStyle,
    backgroundColor: hexToRgbA(colors.primary, 40),
  },
  yesText: {
    fontSize: 12,
    color: "#00BE35",
  },
  yesTextSelected: {
    fontSize: 12,
    color: "#fff",
  },
  noText: {
    fontSize: 12,
    color: "#FF3030",
  },
  noTextSelected: {
    fontSize: 12,
    color: "#fff",
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
  inputs: {
    color: "#404041",
    borderBottomWidth: 2,
    width: "40%",
    padding: 5,
    bottom: 10,
  },
}); //end of styles
