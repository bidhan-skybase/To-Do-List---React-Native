import { StyleSheet } from 'react-native';
const globalStyles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "#F7F7F8",

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowWithSpaceBetween: {
        justifyContent: 'space-between',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -1, height: 2 },
        shadowOpacity: 0.09,
        shadowRadius: 10,
    },

});

export default globalStyles;