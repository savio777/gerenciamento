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

  const [desc, setDesc] = useState('')
  const [valor, setValor] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [tipo, setTipo] = useState('')

  const [fluxo, setFluxo] = useState([])

  const handleFluxo = () => {
    setFluxo([...fluxo, { id: `${fluxo.length}`, desc: desc, val: valor, quantidade: quantidade }])
  }

  /*const listTest = [
    { desc: 'iae kk', val: 10.5, quantidade: 4, tipo: 'entrada' },
    { desc: 'boa noite', val: 35.1, quantidade: 2, tipo: 'saida' },
    { desc: 'bom dia kk', val: 12.1, quantidade: 8, tipo: 'entrada' }
  ]*/

  return (
    <>
      <StatusBar backgroundColor='#82589F' barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder='Descrição'
            onChangeText={setDesc}
            value={desc}
          />
          <TextInput
            style={styles.input}
            placeholder='Valor'
            keyboardType='number-pad'
            onChangeText={setValor}
            value={valor}
          //value={`${valor}`}
          />
          <TextInput
            style={styles.input}
            placeholder='Quantidade'
            keyboardType='number-pad'
            onChangeText={setQuantidade}
            value={quantidade}
          //value={`${quantidade}`}
          />
          {/* FALTA IMPLEMENTAR O CAMPO TIPO */}
          {/*<Picker
            selectedValue={tipo}
            onValueChange={setTipo}
          >
            <Picker.Item label='Tipo' value='' />
            <Picker.Item label='Entrada' value='entrada' />
            <Picker.Item label='Saida' value='saida' />
          </Picker>*/}
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={handleFluxo}
          >
            <Image source={add} />
          </TouchableOpacity>

          <ScrollView>
            <FlatList
              data={fluxo}
              renderItem={({ item }) => <Text>{item.desc}, {item.val}, {item.quantidade}, {item.tipo}</Text>}
              keyExtractor={(item, index) => item.id}
            />
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
    marginTop: 20,
    paddingHorizontal: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2C3A47',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  inputSelect: {
    marginTop: 10
  },
  buttonAdd: {
    marginTop: 10
  }
})

export default Caixa
