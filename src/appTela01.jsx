import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

class Tela01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    email: '',
    password: ''
    };
  }

  render() {
    const TAMANHO = 80;
    return (
      <View style={styles.container}>
            <View style={ styles.bloco1 }></View>

            <View style={ styles.divisor }>
                <Image
                    source={ require('../img/logo_barao.png')}
                    style={[
                        styles.imagem,
                        {
                            width: TAMANHO,
                            height: TAMANHO,
                            borderRadius: TAMANHO / 2,
                            top: -(TAMANHO) / 2,
                        }
                    ]}
                />
            </View>

            <View style={ styles.bloco2 }>
                <Text style={styles.welcomeText}>Bem-vindo!</Text>
                <Text style={styles.subText}>Acesse sua conta</Text>

                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#4caf50"
                    keyboardType='email-anddress'
                />

                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor="#4caf50"
                    keyboardType='email-anddress'
                />
            </View>

            <View style={ styles.bloco3 }>

            </View>
      </View>
    );
  }
}

export default Tela01;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  bloco1: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,

  },

  bloco2: {
    flex: 1,

  },

  bloco3: {
    borderColor: 'black',
    borderWidth: 2,
    height: 50,
    width: '100%',

  },

  divisor: {
    height: 0,
    overflow: 'visible',
    zIndex: 10,

  },

  imagem: {
    position:'absolute',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#ffff',
    backgroundColor: 'black',

  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    marginTop: 60,
    textAlign: 'center',

  },
  subText: {
    fontSize: 28,
    color: '#555',
    marginBottom: 30,
    marginTop: 0,
    textAlign: 'center',
    
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#4csf50',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: 'black',
  },
});

