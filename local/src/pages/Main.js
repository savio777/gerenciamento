import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

function Main({ navigation }) {

  return (
    <>
      <StatusBar backgroundColor='#82589F' barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Caixa')}
          >
            <Text style={styles.textButton}>CAIXA</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            {/*<Text>oi</Text>*/}
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1e6ff',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 50
  },
  button: {
    backgroundColor: '#2C3A47',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 16
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
  footer: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',

  },
})

export default Main
