
import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
    container: {
      flex:1,
      backgroundColor: '#e5e5e5',
    
      width:'100%'
    },
    profilePic:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        marginTop: 20,
    },

    mainTitle: {
      fontSize: 30, 
      marginBottom:10,
      marginTop: 10,
      
      },  
      label: {
        fontSize: 15, 
        marginBottom:10,
       
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
      padding:1,
      alignItems:'flex-start',
      justifyContent:'flex-start'
    },
    textbox:{
      width: '80%',
    },
    textDetails:{
      width: 300,
      fontSize: 20,
      borderRadius: 10,
      alignItems: 'flex-start',
      padding:5,
      borderWidth:1,
      marginBottom: 10,
    },
    btn:{
      borderColor: '#FF9800',
      backgroundColor:'#f5f5f5',
      borderWidth: 2,
      borderRadius: 3,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 5
    },
    btnWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 10,
    },
})