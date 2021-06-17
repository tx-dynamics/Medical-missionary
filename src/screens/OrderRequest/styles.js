import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    flatList: {
        marginVertical: 16,
    },
    closeIconContainer: {
        alignSelf: "flex-end",
        marginRight: 8,
        marginTop: 6,
    },
    startOrderText: {
        color: "#1DD200",
        fontSize: 15,
        fontWeight: "500",
        marginHorizontal: 16,
        marginVertical: 16,
    },
    separator: {
        height: 1,
        backgroundColor: colors.black,
        marginHorizontal: 16,
    },
    cancelOrderText: {
        color: "#FF0000",
        fontSize: 15,
        fontWeight: "500",
        marginHorizontal: 16,
        marginVertical: 16,
        marginBottom: 20,
    },
    deliveryTimeTitle: {
        color: colors.black,
        fontSize: 15,
        fontWeight: "500",
        marginHorizontal: 16,
        marginVertical: 16,
        marginBottom: 20,
        textAlign: "center",
    },
    deliveryTimeInput: {
        width: 120,
        alignSelf: "center",
        borderRadius: 12,
        borderColor: colors.primary,
        borderWidth: 2,
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginBottom: 16,
    },
    deliveryTimeButton: {
        width: 80,
        alignSelf: "center",
        height: 30,
        borderRadius: 35,
        marginBottom: 12,
    },
});//end of styles