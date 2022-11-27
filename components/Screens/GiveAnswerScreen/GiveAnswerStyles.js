import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        padding: 20,
    },
    mainTitle: {
        marginTop: 50,
        fontSize: 36,
        marginBottom: 80
    }, 
    inputField: {
        minHeight: 150,
        width: '100%',
        padding: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        fontSize:20,
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    questionContainer: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20
    },
    questionText: {
        fontSize: 24,
    }
})