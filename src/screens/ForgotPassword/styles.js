import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    crossIconContainer: {
        marginVertical: 16,
        marginHorizontal: 8,
    },
    crossIcon: {
        fontSize: 32,
        color: colors.a2a2a2,
    },
    forgotPasswordHeading: {
        color: colors.primary,
        marginTop: "15%",
        fontSize: 28,
        textAlign: "center",
        textShadowColor: colors.textShadow,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 1,
    },
    forgotPasswordHeadingBottomSeperator: {
        marginBottom: "10%",
    },
    textInput: {
        alignSelf: "center",
        marginBottom: 12,
    },

    submitButton: {
        width: 100,
        alignSelf: "center",
        borderRadius: 25,
        height: 30,
    },

});//end of styles