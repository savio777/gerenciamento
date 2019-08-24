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

const Caixa = ({ navigation }) => {

  const [desc, setDesc] = useState('')
  const [valor, setValor] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [tipo, setTipo] = useState('')

  // inicializador para testes
  const [fluxo, setFluxo] = useState([
    { id: `${1}`, desc: 'exemplo 1', val: 10.5, quantidade: 4, tipo: 'entrada' },
    { id: `${2}`, desc: 'exemplo 2', val: 15.5, quantidade: 1, tipo: 'saida' }
  ])

  const handleFluxo = () => {
    setFluxo([
      ...fluxo, { id: `${fluxo.length + 1}`, desc: desc, val: valor, quantidade: quantidade, tipo: tipo }
    ])
  }

  return (
    <>
      <StatusBar backgroundColor='#82589F' barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.containerInput}>
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
          />
          <TextInput
            style={styles.input}
            placeholder='Quantidade'
            keyboardType='number-pad'
            onChangeText={setQuantidade}
            value={quantidade}
          />
          <Picker
            selectedValue={tipo}
            onValueChange={(valor, index) => { setTipo(valor) }}
          >
            <Picker.Item label='Tipo' value='' />
            <Picker.Item label='Entrada' value='entrada' />
            <Picker.Item label='Saida' value='saida' />
          </Picker>
          <TouchableOpacity
            style={styles.button}
            onPress={handleFluxo}
          >
            <Text style={styles.textButton}>SALVAR</Text>
          </TouchableOpacity>
        </View>
        <View>

          <ScrollView style={styles.scroll}>
            {/* SERÁ O TITULO DA TABELA */}
            {/*<FlatList
              data={[1, 'id', 'descrição', 'valor', 'quantidade', 'tipo']}
            />*/}
            <FlatList
              data={fluxo}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={styles.containerList}>
                    <Text style={styles.textList}>{item.id} , {item.desc}, {item.val}, {item.quantidade}, {item.tipo}</Text>
                  </View>
                )
              }}
            />
          </ScrollView>

          <View style={styles.containerFooter}>
            {/* SERÁ O CONTADOR DO SALDO EM CAIXA */}
            <Text>teste</Text>
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
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50
  },
  scroll: {
    marginTop: 10
  },
  containerInput: {
    //justifyContent: 'flex-start'
  },
  containerFooter: {
    //justifyContent: 'flex-end'
  },
  containerList: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flexGrow: 1,
    margin: 3,
    
  },
  textList: {
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
    fontSize: 16
  }

})

export default Caixa
