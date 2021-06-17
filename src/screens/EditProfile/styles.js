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
    profilePictureOverlay: {
        height: 150,
        width: 150,
        borderRadius: 150,
        borderColor: colors.primary,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: `rgba(0,0,0,0.4)`,
        position: "absolute",
    },
    profilePictureOverlayText: {
        position: "absolute",
        top: "50%",
        color: colors.white,
        alignSelf: "center",
    },
    profilePictureOverlayIcon: {
        color: colors.white,
        position: "absolute",
        top: "35%",
        alignSelf: "center",
    },
    textInput: {
        alignSelf: "center",
        marginBottom: 12,
    },
    saveButtonContainer: {
        alignSelf: "center",
        marginVertical: 12,
    },
    saveButton: {
        borderRadius: 70,
        width: 70,
    },
});//end of styles