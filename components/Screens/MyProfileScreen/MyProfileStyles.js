
import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
   
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center' ,
      backgroundColor: '#f5f0f0',
      width:'100%',
      padding: 20,
     },
    profilePic:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        
    },
    mainTitle: {
      fontSize: 30, 
      marginBottom:10,
      marginTop: 10,
    },  
    label: {
      marginTop:10,
      fontSize: 15, 
      marginBottom:5,
      fontWeight: '600',
    },  
    aboutUser:{
      fontSize: 12,
      fontWeight: '600',
      color: '#666',
      textAlign: 'justify'
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
      backgroundColor: '#f5f0f0',
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
    circle: {
      position:'absolute',
      width: 500,
      height: 500,
      borderRadius: 250,
      backgroundColor:'#ffca99',
      top: -220,
      bottom: 150,
    },
})