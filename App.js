import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { saveLoginData, getLoginData } from './database';

export const HomeScreen = ({}) => {

  const [nome, setnome] = useState('');
  const [dose, setdose] = useState('');

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');


  return (
    <View style={[styles.container, styles.backgroundBranco]}>
      <View style={styles.coluna}>
        <View style={styles.fileira}>
          <View style={styles.colunaTopo}>
            <View style={styles.container}><Text style={styles.titulo}>Bora {'\n'}Bebber </Text></View>
            <View style={styles.container}><Text style={styles.subTitulo}>Como quer{'\n'}ser chamado?</Text><TextInput onChangeText={(text)=> setnome(text)} value={nome} placeholderTextColor="blue"  placeholder="Seu Nome" /></View>
            <View style={styles.container}><Text style={[styles.subTitulo]}>Quanto de água{'\n'}vai tomar{'\n'}por dose?</Text><TextInput onChangeText={(text)=> setdose(text)} value={dose} placeholderTextColor='blue' placeholder='300ml' /></View>
          </View>
          <View style={styles.colunaTopo}>
            <View style={[styles.container, styles.centralizar]}><Text style={styles.inputSubTitulo}>Precisamos{'\n'}de alguns dados{'\n'}para começarmos{'\n'}anos hidratar</Text></View>
            <View style={styles.container}>
              <View style={styles.fileira}>
                <View style={styles.coluna}>
                  <Text style={[styles.subTitulo, styles.input]}>Idade</Text>
                  <TextInput onChangeText={(text) => setInput1(text)} value={input1} keyboardType='numeric' placeholder='input1'/>
                  <Text style={[styles.subTitulo, styles.input]}>Peso</Text>
                  <TextInput onChangeText={(text) => setInput2(text)} value={input2} keyboardType='numeric' placeholder='input2'/>
                </View>
                <View style={styles.coluna}>
                  <Text style={[styles.subTitulo, styles.input]}>Altura</Text>
                  <TextInput onChangeText={(text) => setInput3(text)} value={input3} keyboardType='numeric' placeholder='input3'/>
                  <Text style={[styles.subTitulo, styles.input]}>Sexo</Text>
                  <TextInput onChangeText={(text) => setInput4(text)} value={input4} keyboardType='numeric' placeholder='input4'/>
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={[styles.button,styles.centralizar]} onPress={saveLoginData}>
                <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}><Image style={[styles.imagem]} source={require('./assets/moça.png')} /></View>
      </View>
    </View>
  );
};

const width = Dimensions.get('screen').width;

const largura = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  centralizar: {
    textItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  fileira: {
    flex: 1,
    flexDirection: 'row',
  },
  coluna: {
    flex: 1,
    flexDirection: 'column',
  },
  colunaTopo: {
    
    flexDirection: 'column',
    padding: 25,
  },
  container: {
    flex: 1,
  },
  containerSemCentralizar: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  titulo: {
    fontSize: 39,
  },
  subTitulo: {
    fontSize: 19,
  },
  inputSubTitulo: {
    fontSize: 15,
  },
  input: {
    fontSize: 15,
    color: 'blue',
  },
  imagem: {
    width: width,
    height: '100%',
  },
  backgroundBranco: {
    backgroundColor: 'white',
  },
  azul: {
    backgroundColor: 'blue',
  },
  button: {
    backgroundColor: 'blue',
    padding: 6,
    borderRadius: 20,
  }
});

export default HomeScreen;
