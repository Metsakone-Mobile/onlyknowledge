import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
       
    },
    mainTitle: {
        marginTop: 50,
        fontSize: 36,
        marginBottom: 80
    }, 
    tutorCard: {
      flex: 1,
      opacity: 0.9,
        height: "80%",
        width: "80%",
        backgroundColor: '#f5f0f0',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop:20,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 45,
    },
    profilePic:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
      },
      profilePicContainer:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        borderWidth: 1,
        
      },
      
      tutornamehHader:{
        marginTop: 5,
        fontSize: 20,
        marginBottom: 5
       
      },
      tutorname:{
        marginTop: 3,
        fontSize: 15,
        marginBottom: 3
       
      },
      tutoringTimeBtn:{
        borderWidth: 1,
        padding: 5,
        backgroundColor: "white",
        opacity: 0.9,
        borderRadius:5,
        margin: 3,
        
    },
    slotcontainer:{

      margin: 5,
    
      
  },

      
    
})

