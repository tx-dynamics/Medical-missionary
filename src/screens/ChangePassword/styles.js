import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    topSeperator: {
        marginTop: 26,
    },
    textInput: {
        alignSelf: "center",
        marginBottom: 12,
    },
    toggleLabelStyle: {
        color: "#252525",
        fontSize: 10,
    },
    togglePrimaryContainer: {
        width: "75%",
        alignSelf: "center",
    },
    toggleContainer: {
        alignSelf: "flex-end",
    },
    saveButton: {
        borderRadius: 70,
        width: 90,
        height: 30,
        alignSelf: "center",
    },
});//end of styles