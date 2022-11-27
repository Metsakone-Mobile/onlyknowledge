import { StyleSheet } from "react-native";

export const findATutorStyles = StyleSheet.create({
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
    tutorCard: {
        minHeight: 120,
        width: '80%',
        backgroundColor: '#f5f2eb',
        paddingLeft: 20,
        paddingTop: 5,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 25
    },
    profilePic:{
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
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
    
})

/*searchBar: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 4,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
        width: 300,
        fontSize: 24
    },*/