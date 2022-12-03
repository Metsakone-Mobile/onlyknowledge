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
        backgroundColor: '#f5f0f0',
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
      },
      isTutorContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 40
      },
      profilePic:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
      },
      profileText:{
        fontSize: 10,
        marginTop: 10,
        marginBottom:20, 
        marginLeft:20,
           
    },
    ProfilepicView:{
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
    },
    profileCircle: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      backgroundColor: '#FF9800',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,
    },
})