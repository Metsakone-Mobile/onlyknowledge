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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },

  });