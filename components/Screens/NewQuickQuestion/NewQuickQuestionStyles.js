import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    questionBox: {
        minHeight: 150,
        width: 300,
        padding: 5,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize:20,
    },
    container: {
        
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        paddingTop: 20,
      },
      innerContainer: {
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
      },
      label: {
          fontSize: 24,
          fontWeight: 'bold',
      },
})