import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

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
        textShadowColor: colors.textShadow,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 1,
    },
    signupHeadingBottomSeperator: {
        marginBottom: "10%",
    },

});//end of styles