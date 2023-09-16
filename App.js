import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeScreen = () => {
  const [inputText, setInputText] = useState(''); // For managing the input text
  const [storedText, setStoredText] = useState(''); // To display the retrieved value
  const [dose, setdose] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [sexo, setSexo] = useState('');


  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('my_key', JSON.stringify(inputText));
      await AsyncStorage.setItem('dose', JSON.stringify(dose));
      await AsyncStorage.setItem('idade', JSON.stringify(idade));
      await AsyncStorage.setItem('peso', JSON.stringify(peso));
      await AsyncStorage.setItem('altura', JSON.stringify(altura));
      await AsyncStorage.setItem('sexo', JSON.stringify(sexo));
      console.log(inputText);
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  const handleRetrieve = async () => {
    try {
      const value = await AsyncStorage.getItem('my_key');
      const value1 = await AsyncStorage.getItem('dose');
      const value2 = await AsyncStorage.getItem('idade');
      const value3 = await AsyncStorage.getItem('peso');
      const value4 = await AsyncStorage.getItem('altura');
      const value5 = await AsyncStorage.getItem('sexo');
      if (value !== null) {
        setStoredText(JSON.parse(value));
        console.log(value);
        console.log(value1);
        console.log(value2);
        console.log(value3);
        console.log(value4);
        console.log(value5);
      }
    } catch (error) {
      console.error("Error retrieving data", error);
    }
  };

  return (
    <View style={[styles.container, styles.backgroundBranco]}>
      <View style={styles.coluna}>
        <View style={styles.fileira}>
          <View style={styles.colunaTopo}>
            <View style={styles.container}><Text style={styles.titulo}>Bora {'\n'}Bebber </Text></View>
            <View style={styles.container}><Text style={styles.subTitulo}>Como quer{'\n'}ser chamado?</Text><TextInput  value={inputText} onChangeText={setInputText} placeholder="Type something"/></View>
            <View style={styles.container}><Text style={[styles.subTitulo]}>Quanto de água{'\n'}vai tomar{'\n'}por dose?</Text><TextInput value={dose} onChangeText={setdose} placeholderTextColor='blue' placeholder='300ml' /></View>
          </View>
          <View style={styles.colunaTopo}>
            <View style={[styles.container, styles.centralizar]}><Text style={styles.inputSubTitulo}>Precisamos{'\n'}de alguns dados{'\n'}para começarmos{'\n'}anos hidratar</Text></View>
            <View style={styles.container}>
              <View style={styles.fileira}>
                <View style={styles.coluna}>
                  <Text style={[styles.subTitulo, styles.input]}>Idade</Text>
                  <TextInput value={idade} onChangeText={setIdade} placeholder='idade' />
                  <Text style={[styles.subTitulo, styles.input]}>Peso</Text>
                  <TextInput value={peso} onChangeText={setPeso} placeholder='peso' />
                </View>
                <View style={styles.coluna}>
                  <Text style={[styles.subTitulo, styles.input]}>Altura</Text>
                  <TextInput value={altura} onChangeText={setAltura} placeholder='1,83 m' />
                  <Text style={[styles.subTitulo, styles.input]}>Sexo</Text>
                  <TextInput value={sexo} onChangeText={setSexo} placeholder='masculino' />
                </View>
              </View>
            </View>
            <View style={styles.container}>
              <TouchableOpacity style={[styles.button, styles.centralizar]} onPress={handleSave}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.centralizar]} onPress={handleRetrieve}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>Salvar</Text>
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