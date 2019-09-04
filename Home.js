import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet,Share } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Details from './Details';
import BarChartExample from './Plot';
import Map from './Map';


class Home extends Component {
  render(){
   return (
     <ScrollView>
      <Text>Pagina Inicial</Text>
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Map')}>
        <Text style={styles.txtButton}> Mapa das Estacoes </Text>
      </TouchableOpacity>
     </ScrollView>
   )
 }
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Map:{
    screen: Map
  },
  Details:{
    screen: Details
  },
  Plot:{
    screen: BarChartExample
  }
},
{
  initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render(){
    return(
      <AppContainer />
    )
  }
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#426AD1',
    marginTop: 15,
    marginBottom: 15,
    padding: 10
  },

});
