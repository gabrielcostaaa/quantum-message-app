import { StyleSheet } from 'react-native';
import QuantumColors from '@/constants/colors';

export const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        overflow: 'hidden',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    text: {
        fontWeight: '500',
        fontSize: 16,
    },

    solidContainer: {
        backgroundColor: QuantumColors.primary,
    },
    solidText: {
        color: QuantumColors.primaryText,
    },
    outlinedContainer: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: QuantumColors.primary,
    },
    outlinedText: {
        color: QuantumColors.primary,
    },
    transparentContainer: {
        backgroundColor: 'transparent',
    },
    transparentText: {
        color: QuantumColors.primary,
    },

    smallContainer: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    mediumContainer: {
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    largeContainer: {
        paddingVertical: 16,
        paddingHorizontal: 20,
    },

    disabledContainer: {
        backgroundColor: QuantumColors.lightGrey,
        borderColor: QuantumColors.lightGrey,
    },
    disabledText: {
        color: QuantumColors.secondaryLightGrey,
    },
});