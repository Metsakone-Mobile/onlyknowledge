import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      backgroundColor: '#f5f0e9'
    },
    mainTitle: {
        marginTop: 40,
        fontSize: 36,
        fontWeight: 'bold',
    },
    innerContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressableOption: {
        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        alignItems: 'center',
        backgroundColor: '#c4bcc3'
    },
    pressableLabel: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    messageBox: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 15
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    questionBox: {
        height: 300,
        width: 300,
        backgroundColor: '#fff'
    },
    searchBar: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 4,
        backgroundColor: '#fff',
        width: 300,
        fontSize: 24
    }
  });