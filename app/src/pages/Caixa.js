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
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

const Caixa = ({ navigation }) => {

  const [descricao, setDesc] = useState('')
  const [valor, setValor] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [tipo, setTipo] = useState('')

  const [fluxo, setFluxo] = useState([])

  const [saldo, setSaldo] = useState(0)

  const headList = [
    {
      /*headId: 'id',
      headDescricao: 'descrição',
      headValor: 'valor',
      headQuantidade: 'quantidade',
      headTipo: 'tipo',*/
      titleHeads: [
        'id',
        'descrição',
        'valor',
        'quantidade',
        'tipo'
      ]
    }
  ]

  const handleFluxo = () => {
    setFluxo([
      ...fluxo,
      {
        id: `${fluxo.length + 1}`,
        descricao: descricao,
        valor: valor,
        quantidade: quantidade,
        tipo: tipo
      }
    ])
  }

  useEffect(() => {
    let entrada = 0
    let saida = 0
    let saldo = 0

    for (let i in fluxo) {
      if (fluxo[i].tipo === 'entrada') {
        entrada += Number(fluxo[i].valor) * Number(fluxo[i].quantidade)
      } else if (fluxo[i].tipo === 'saida') {
        saida += Number(fluxo[i].valor) * Number(fluxo[i].quantidade)
      }
    }

    saldo = entrada - saida

    setSaldo(saldo)
  }, [fluxo])

  return (
    <>
      <StatusBar backgroundColor='#82589F' barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder='Descrição'
            onChangeText={setDesc}
            value={descricao}
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

        <FlatList
          data={headList}
          keyExtractor={(item, index) => { item.id }}
          numColumns={5}
          renderItem={
            ({ item }) => {
              return (
                <View style={styles.containerList}>
                  <Text style={styles.textList}>{item.titleHeads}</Text>
                </View>
              )
            }
          }
        />

        <ScrollView
          style={styles.scroll}
        >
          {/* https://stackoverflow.com/questions/44357336/setting-up-a-table-layout-in-react-native */}
          <View style={styles.containerTable}>
            {(fluxo.length > 0) && fluxo.map((value) => {
              return (
                <View key={value.id} style={styles.table}>
                  <Text style={styles.rowTable}>{value.descricao}</Text>
                  <Text style={styles.rowTable}>{value.valor}</Text>
                  <Text style={styles.rowTable}>{value.quantidade}</Text>
                  <Text style={styles.rowTable}>{value.tipo}</Text>
                </View>
              )
            })}
          </View>
        </ScrollView>


        <View style={styles.containerFooter}>
          <View style={styles.separate} />
          <View style={styles.containerSaldo}>
            <Text style={styles.textSaldo}>SALDO</Text>
            <View >
              {(saldo > 0) ? (
                <Text style={{ color: '#27ff00' }}>{saldo}</Text>
              ) : (
                  <Text style={{ color: '#ff2400' }}>{saldo}</Text>
                )}
            </View>
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
    justifyContent: 'flex-start',
    paddingHorizontal: 50
  },
  scroll: {
    marginTop: 10,
    paddingVertical: 40
  },
  containerInput: {
    //justifyContent: 'flex-start'
  },
  containerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  containerTable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  table: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginRight: 2
  },
  rowTable: {
    alignSelf: 'stretch'
  },
  containerSaldo: {
    backgroundColor: '#fff'
  },
  textSaldo: {
    fontWeight: 'bold'
  },
  separate: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#2C3A47',
    width: 320,
    height: 5
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
