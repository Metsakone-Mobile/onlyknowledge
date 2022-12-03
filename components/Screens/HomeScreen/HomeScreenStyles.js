import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    pressable: {
        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        alignItems: 'center',
        backgroundColor: '#ECA04D'
    },
    upperContainer:{
        width:'100%',
        height: '60%' ,
        padding:30,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#ffdab8',
              
    },
    containerDetails:{
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:15,

    
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
    
    },
    mainTitle: {
        marginTop: 50,
        fontSize: 36,
    },
    container: {
        backgroundColor: '#f5f0f0',
        alignItems: 'center',
        paddingTop: 20,
      },
      layout:{

        position: 'absolute',
        width: 273,
        height: 248,
        left: -70,
        top: -51,
        
        
     },
          circle1:{
            position:'absolute',
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
            backgroundColor:'#f9b87b',
            left: -90,
            right: '26.74%',
            top: -20,
            bottom: '0%',
          },
          circle2:{
            position:'absolute',
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
            backgroundColor:'#eca04d',
            left: 10,
            right: '0%',
            top: -90,
            bottom: '19.35%',
        
          }
})