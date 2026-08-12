import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput,Image, Touchable, TouchableOpacity } from 'react-native';

class Aula05 extends Component {
  render() {
    return (
        <View style={styles.container}>
        
            <View>

                <Image
                    source={require('../img/Logo_Barao.png')}
                    style={styles.logo}
                />
        
                <Text style={styles.label }>Nome:</Text>

                    <TextInput
                        style={ styles.input }
                        placeholder='     Informe seu nome:'
                    />
                <Text style={styles.label }>Email:</Text>

                    <TextInput
                        style={ styles.input }
                        placeholder='     Informe seu e-mail:'
                    />

                    <TouchableOpacity style={style.botao}>
                      <Text style={ styles.textoBotao}>Entrar</Text>
                    </TouchableOpacity>

                    <Text style={styles.texto1}>Não tem conta ...
                      <Text style={styles.texto2}>Cadastre-se!</Text>
                    </Text>

            </View>
      </View>
    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input:{
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  label:{
    fontSize: 16,
    marginBottom: 5,
  },

  centra:{
    width: 200,
    height: 200,
  },

  logo:{
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 70,
  },

  botao: {
    backgroundColor: 'green',
    width: 250,
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },

  textoBotao: {
    color: 'white',
    textAlign: 'center',
  },

  texto1: {
    color: 'white,'
  },

  texto2: {
    color: 'blue',
  },
});