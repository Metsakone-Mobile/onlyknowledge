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
        height: 40,
        width: 40,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#eca04d'
    },
    label: {
        marginTop: 5,
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
    }
})