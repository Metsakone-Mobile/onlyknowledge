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
        backgroundColor: '#e5e5e5',
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
    },
    firstScreenImg: {
        marginTop: 30,
        height: 300,
        width: 300
    },
    infoTextContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoText: {
        fontSize: 24
    },
    smallText: {
        marginTop: 40,
        marginBottom: 70,
        fontSize: 10,

    },
    customButton: {
        backgroundColor: '#eca04d',
        borderRadius: 45,
    },
    buttonText: {
        fontSize: 24,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    }
  });