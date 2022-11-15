import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        padding: 20,
        marginBottom: 30,
        width:400,
       
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
      profilePic:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
      },
      ProfilepicView:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
      },
      mainTitle: {
          marginTop: 20,
          fontSize: 36,
    },
        editText:{
        fontSize: 10,
        marginTop: 10,
        marginBottom:20, 
        marginLeft:20,
           
    },

        label: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },  
    })