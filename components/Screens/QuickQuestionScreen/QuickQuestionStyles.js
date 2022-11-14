import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    questionBox: {
        height: 300,
        width: 300,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        fontSize:20,
    },
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
      },
      mainTitle: {
          marginTop: 50,
          fontSize: 36,
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