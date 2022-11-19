import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
    container: {
      flex:1,
      backgroundColor: '#e5e5e5',
      alignItems: 'center',
      width:'100%'
    },
    profileContent: {
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

      mainTitle: {
        marginTop: 20,
        
      },  
        label: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },  
      listSubjects: {
      fontSize: 14,
      
      marginBottom: 20,
    },
    subjectsContainer: {
      marginTop: 19,
      justifyContent: "center",
      backgroundColor: '#ffff',
      padding: 20,
      width: '50%',
      borderRadius: 25
      
    },
    
      placeHolder:{
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',

    },
      textInput:{
        borderColor: "gray",
        width: "80%",
        height: "200%",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
      },
    
      textboxContainer:{
        width: '80%',
        marginBottom:20,
        marginTop:40,
        borderRadius: 10,
        padding:1,
        alignItems:'flex-start',
        justifyContent:'flex-start'
      },
      textbox:{
        width: '80%',
      
      },
      textDetails:{
        width: 300,
        height: 30,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        alignItems: 'flex-start',
      },
})