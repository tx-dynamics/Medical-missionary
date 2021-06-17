import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    signinHeading: {
        color: colors.primary,
        marginTop: "15%",
        fontSize: 28,
        textAlign: "center",
        // textShadowColor: colors.textShadow,
        // textShadowOffset: { width: 0, height: 0 },
        // textShadowRadius: 1,
    },
    signinHeadingBottomSeperator: {
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
        marginBottom: 8,
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
    forgotPasswordContainer: {
        alignSelf: "center",
        width: "75%",
        marginBottom: 16,
    },
    forgotPasswordText: {
        textAlign: "right",
        fontSize: 12,
        color: colors.a2a2a2,
    },

    signinButton: {
        width: 100,
        alignSelf: "center",
        borderRadius: 25,
        height: 30,
        marginBottom: 16,
    },
    signupContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: 16,
    },
    dontHaveAccountText: {

    },
    signupButton: {
        width: 75,
        // alignSelf: "center",
        borderRadius: 20,
        height: 25,
        marginLeft: 8,
    },
});//end of styles