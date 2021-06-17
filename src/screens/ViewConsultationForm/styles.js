import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    flatList: {
        marginTop: 26,
    },
    downloadPDFButton: {
        marginVertical: 16,
        width: 150,
        borderRadius: 150,
        height: 30,
        alignSelf: "center",
    },
});//end of styles

export const itemStyles = StyleSheet.create({
    primaryContainer: {
        backgroundColor: colors.background,
        marginHorizontal: 12,
    },
    title: {
        color: "#151515",
        fontSize: 15,
    },
    description: {
        color: "#ABABAB",
        fontSize: 12,
    },
    seperator: {
        height: StyleSheet.hairlineWidth * 1.5,
        backgroundColor: "#CBCBCB",
        marginTop: 3,
        marginBottom: 12,
        borderRadius: 5,
    },
});//end of styles