import { Platform, StyleSheet } from "react-native";
import colors from "../../constants/colors";
// import Constants from "expo-constants";
export const styles = StyleSheet.create({
  primaryContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  searchComponentContainer: {
    position: "absolute",
    width: "97%",
    alignSelf: "center",
    // top: Platform.OS === "android" ? Constants.statusBarHeight * 2 : Constants.statusBarHeight * 4.5,
    zIndex: 1,
    top: 3,
  },
  mapView: {
    flex: 1,
    marginTop: 12,
  },
  mapMarmarkerHollow: {
    height: 60,
    width: 60,
    tintColor: colors.primary,
  },
  mapMarkerImage: {
    position: "absolute",
    height: 32,
    width: 32,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: 7.5,
  },
}); //end of styles
