import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    signUpContainer: {
        width: 400,
        alignItems: 'center',
    },
    inputField: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 50,
        marginBottom: 40,
        padding: 20,
        fontSize: 20
    },    
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
      buttonContainer: {
        alignItems: 'center',
        width: '100%',
        marginBottom: 40
      },
      label: {
        fontSize: 32,
        marginBottom: 10
      }
})