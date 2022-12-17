import { StyleSheet } from 'react-native'

export default StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },
    pictureContainer:{
        flex:1,
         justifyContent: 'center',
         alignItems: 'center',
         width:'100%'
     },
    EditPicture:{
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
    },
    
    inputField: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        width:'80%'
    },

    inputStyle: {
        flex: 1, 
        paddingLeft: 10,
        fontSize: 15,
        justifyContent:'flex-end'

    },    
    base:{
        backgroundColor:'#f9b87b',
        width: '100%',
        height: 140,
        position:'absolute'
    }

})