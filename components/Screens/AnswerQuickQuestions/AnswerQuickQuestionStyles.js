import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
    },
    mainTitle: {
        marginTop: 50,
        fontSize: 36,
        marginBottom: 80
    }, 
    questionCard: {
        minHeight: 120,
        width: '100%',
        backgroundColor: '#f5f2eb',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        marginBottom: 20,
        borderWidth: 1,
    },
    questionText: {
        fontSize: 12
    },
})