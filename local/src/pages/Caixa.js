import React, { useState, useEffect } from 'react'

import {
  ScrollView,
  FlatList,
  View,
  Text,
  Picker,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import add from '../../assets/icons8-mais-24.png'

const Caixa = ({ navigation }) => {

  const listTest = [
    { desc: 'iae kk', val: 10.5, tipo: 'entrada' },
    { desc: 'boa noite', val: 35.1, tipo: 'saida' },
    { desc: 'bom dia kk', val: 12.1, tipo: 'entrada' }
  ]

  return (
    <>
      <StatusBar backgroundColor='#82589F' barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Descrição'
          />
          <TextInput
            style={styles.input}
            placeholder='Valor'
            autoCompleteType='off'
            keyboardType='number-pad'
          />
          <Picker>
            <Picker.Item label='Tipo' value='' />
            <Picker.Item label='Entrada' value='entrada' />
            <Picker.Item label='Saida' value='saida' />
          </Picker>
          <TouchableOpacity style={styles.buttonAdd}>
            <Image source={add} />
          </TouchableOpacity>
          <ScrollView>
            <FlatList data={listTest} 
              renderItem={({item})=><Text>{item.desc}, {item.val}, {item.tipo}</Text>} />
          </ScrollView>
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
  input: {
    marginTop: 10
  },
  inputSelect: {
    marginTop: 10
  },
  buttonAdd: {
    marginTop: 10
  }
})

export default Caixa
