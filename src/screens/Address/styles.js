import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    paymentMethodTitle: {
        color: "#464646",
        fontSize: 16,
        marginHorizontal: 16,
        marginTop: 12,
    },
    paymentMethodContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 8,
    },
    creditCardIcon: {
        height: 30,
        width: 30,
    },
    creditCardText: {
        color: "#464646",
        fontSize: 10,
        marginLeft: 8,
    },
    buyButtonContainer: {
        marginVertical: 16,
        marginTop: 0,
        alignSelf: "center",
    },
    buyButton: {
        width: 80,
        height: 30,
        borderRadius: 30,
    },
});//end of styles