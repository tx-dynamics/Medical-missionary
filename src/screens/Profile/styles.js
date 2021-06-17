import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    profilePictureContainer: {
        marginTop: 16,
        alignSelf: "center",
        marginBottom: 16,
    },
    profilePicture: {
        height: 150,
        width: 150,
        borderRadius: 150,
        borderColor: colors.primary,
        borderWidth: StyleSheet.hairlineWidth,

    },
    textInput: {
        alignSelf: "center",
        marginBottom: 12,
    },
    button: {
        width: 150,
        alignSelf: "center",
        marginBottom: 16,
        borderRadius: 40,
        height: 35,
    },
});//end of styles