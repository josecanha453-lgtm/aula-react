import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Necessário instalar: npm install @react-native-picker/picker

class Atividade02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      tipoUsuario: 'Aluno', // Valor padrão inicial
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#1A8738" />
        
        {/* Mantém o padrão de cabeçalho circular da primeira imagem */}
        <View style={styles.headerCirculo}>
          <Image source={require('../img/logo_barao.png')} style={styles.logoMini} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Títulos da Tela */}
          <Text style={styles.titulo}>Crie sua conta</Text>
          <Text style={styles.subtitulo}>Preencha os dados</Text>

          {/* Formidável de Inputs */}
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            placeholderTextColor="#80c284"
            onChangeText={(text) => this.setState({ nome: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#80c284"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(text) => this.setState({ email: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#80c284"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ senha: text })}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            placeholderTextColor="#80c284"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ confirmarSenha: text })}
          />

          {/* Seleção do Tipo de Usuário */}
          <View style={styles.pickerContainer}>
            <Text style={styles.labelPicker}>Tipo de Usuário</Text>
            <View style={styles.pickerBorda}>
              <Picker
                selectedValue={this.state.tipoUsuario}
                onValueChange={(itemValue) => this.setState({ tipoUsuario: itemValue })}
                style={styles.picker}
                dropdownIconColor="#1A8738"
              >
                <Picker.Item label="Aluno" value="Aluno" />
                <Picker.Item label="Responsável" value="Responsavel" />
                <Picker.Item label="Professor" value="Professor" />
              </Picker>
            </View>
          </View>

          {/* Botão Cadastrar */}
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>

          {/* Link Voltar para o Login */}
          <TouchableOpacity style={styles.linkLogin}>
            <Text style={styles.textoLogin}>
              Já tem uma conta? <Text style={styles.textoSublinhado}>Faça login</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerCirculo: {
    backgroundColor: '#1A8738',
    height: 120,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  logoMini: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginTop: 10,
  },
  scrollContent: {
    paddingHorizontal: 35,
    paddingBottom: 40,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1.5,
    borderColor: '#1A8738',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000000',
    marginBottom: 15,
    backgroundColor: '#ffffff',
  },
  pickerContainer: {
    width: '100%',
    marginBottom: 25,
  },
  labelPicker: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
    fontWeight: '500',
  },
  pickerBorda: {
    borderWidth: 1.5,
    borderColor: '#1A8738',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: 50,
    color: '#000000',
  },
  botao: {
    backgroundColor: '#4CB14C',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkLogin: {
    marginBottom: 10,
  },
  textoLogin: {
    fontSize: 15,
    color: '#000000',
  },
  textoSublinhado: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Atividade02;
