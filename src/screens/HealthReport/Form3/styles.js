import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { hexToRgbA } from '../../../helper/genericFunctions';

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
}

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
        textAlign: 'center',
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
    },
    yesNoPrimaryContainer: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    yesNoContainer: {
        ...cardStyle,
        backgroundColor: '#fff'
    },
    yesNoContainerSelected: {
        ...cardStyle,
        backgroundColor: hexToRgbA(colors.primary, 40)
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
    submitButtonContainer: {
        marginVertical: 12,
    },
    submitButton: {
        alignSelf: "center",
        width: 85,
        height: 30,
        borderRadius: 30,
    }
});//end of styles

export const submitReportStyles = StyleSheet.create({
    closeIconContainer: {
        alignSelf: "flex-end",
        marginRight: 8,
        marginTop: 6,
    },
    text: {
        textAlign: "center",
        fontSize: 15,
        color: colors.black,
        fontWeight: "500",
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        alignSelf: "center",
        width: 80,
        height: 30,
        borderRadius: 35,
        marginBottom: 12,
    },
});//end of sendRequestStyles