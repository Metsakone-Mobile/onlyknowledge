import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    mainTitle: {
        marginTop: 50,
        fontSize: 36,
    },
    innerContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchBar: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 4,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
        width: 300,
        fontSize: 24
    },
  });