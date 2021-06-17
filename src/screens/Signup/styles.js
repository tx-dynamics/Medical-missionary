import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
const { height } = Dimensions.get('screen');
export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    signupHeading: {
        color: colors.primary,
        marginTop: "15%",
        fontSize: 28,
        textAlign: "center",
        // textShadowColor: colors.textShadow,
        // textShadowOffset: { width: 0, height: 0 },
        // textShadowRadius: 1,
    },
    signupHeadingBottomSeperator: {
        marginBottom: "10%",
    },
    textInput: {
        alignSelf: "center",
        marginBottom: 12,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        // marginBottom: 16,
    },
    eyeIconPrimaryContainer: {
        justifyContent: "center",
    },
    eyeIconContainer: {
        top: -17,
        zIndex: 1,
        position: "absolute",
        right: 8,
    },
    eyeIcon: {
        fontSize: 22,
        zIndex: 1,
    },
    signupButton: {
        marginTop: 16,
        width: 100,
        alignSelf: "center",
        borderRadius: 25,
        height: 30,
        marginBottom: 16,
    },
    signinContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: 16,
    },
    doYouHaveAccountText: {

    },
    signinButton: {
        width: 60,
        borderRadius: 20,
        height: 25,
        marginLeft: 8,
    },
});//end of styles