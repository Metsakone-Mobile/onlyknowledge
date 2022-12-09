import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    inputField: {
        minHeight: 150,
        width: '100%',
        padding: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize:20,
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    questionContainer: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
    },
    questionText: {
        fontSize: 24,
    }
})