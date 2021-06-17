import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
    primaryContainer: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
    },
    text: {
        color: "#DDDDDD",
        fontSize: 16,
        marginLeft: 10,
    },
});//end of styles