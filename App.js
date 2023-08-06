import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

export const HomeScreen = ({}) => {

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const [myData, setMyData] = useState(null);

  const [selectedValue, setSelectedValue] = useState('option1');

  const [text, setText] = useState('');

  const [loaded] = useFonts({
    RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'),
    RobotoBlackitalic: require('./assets/fonts/Roboto-BlackItalic.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoBolditalic: require('./assets/fonts/Roboto-BoldItalic.ttf'),
    Robotoitalic: require('./assets/fonts/Roboto-BoldItalic.ttf'),
    RobotoLight: require('./assets/fonts/Roboto-Light.ttf'),
    RobotoLightItalic: require('./assets/fonts/Roboto-LightItalic.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={[styles.container, styles.backgroundBranco]}>
      <View style={styles.coluna}>
        <View style={styles.fileira}>
          <View style={styles.colunaTopo}>
            <View style={styles.container}><Text style={styles.titulo}>Bora {'\n'}Bebber </Text></View>
            <View style={styles.container}><Text style={styles.subTitulo}>Como quer{'\n'}ser chamado?</Text><TextInput placeholderTextColor="blue"  placeholder="Seu Nome" /></View>
            <View style={styles.container}><Text style={[styles.subTitulo]}>Quanto de água{'\n'}vai tomar{'\n'}por dose?</Text><TextInput placeholderTextColor='blue' placeholder='300ml' /></View>
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
            <View style={styles.container}></View>
          </View>
        </View>
        <View style={{ flex: 1 }}><Image style={[styles.imagem]} source={require('./assets/moça.png')} /></View>
      </View>
    </View>
  );
};

const width = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
  centralizar: {
    textItems: 'center',
    justifyContent: 'center',
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
    flex: 1,
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
    fontFamily: 'RobotoBold',
  },
  subTitulo: {
    fontSize: 19,
    fontFamily: 'RobotoBold',
  },
  inputSubTitulo: {
    fontSize: 15,
    fontFamily: 'RobotoBold'
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
});

export default HomeScreen;