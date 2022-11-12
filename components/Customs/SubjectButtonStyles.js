import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    subjectButtonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 12,
    },
    unChecked: {
        height: 44,
        width: 44,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        width: 34,
        height: 34,
        borderRadius: 5,
        backgroundColor: '#eca04d'
    },
    label: {
        marginTop: 5,
        fontSize: 32,
        color: '#000',
        fontWeight: 'bold',
    }
})