import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    approveDismissButtonContainer: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 20,
    },
    dismissButton: {
        marginRight: 12,
        backgroundColor: colors.white,
        borderRadius: 40,
        width: 90,
        borderColor: colors.primary,
        borderWidth: StyleSheet.hairlineWidth * 2,
    },
    approveButton: {
        marginLeft: 12,
        borderRadius: 40,
        width: 90,
    },
    sendConsultationFormButton: {
        alignSelf: "center",
        borderRadius: 50,
        width: 190,
        marginTop: 30,
        marginBottom: 20,
    },
});//end of styles