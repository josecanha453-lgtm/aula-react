import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  Button } 
  from 'react-native';

class Aula06 extends Component {

  constructor(props){
    super(props);

    this.state = {
      nome: 'Kelvin',
      sobrenome:'', 
    }

    this.mudarNome = this.mudarNome.bind(this);

  }

  mudarNome() {
    this.setState({
      nome: 'Ronaldinho',
      sobrenome: 'José Canha',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Alias, nam? Id blanditiis inventore praesentium. 
            Molestiae inventore nihil hic vero! 
            At eligendi commodi nam expedita dolore molestiae sit optio debitis eaque!
          </Text>

          <Text style={{fontSize: 21, color: 'red', marginTop: 50}}>
            {this.state.nome } {this.state.sobrenome}
          </Text>

          <Button
          title='Mostrar o Nome'
          onPress={ this.mudarNome}
          />

        </ScrollView>
      </View>
    );
  }
}

export default Aula06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//colocar o sobre nome e fazer aparecer no click do button