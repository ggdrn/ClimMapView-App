import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet,Share } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import axios from 'axios';

import Details from './Details';
import BarChartExample from './Plot';
import Map from './Map';

axios.get('http://192.168.43.85:8000/api/getEstacoes')
  .then(response => {console.log(response.data[0])})
  .catch(error => {console.log(error) });

//   const URI = 'http://localhost:8000';
//   async function FetchEstacao() {
//       try {
//               let response = await fetch(URI + '/api/getEstacoes');
//               let responseJsonData = await response.json();
//               return responseJsonData;
//           }
//       catch(e) {
//           return e;
//       }
//   }
//   const ajax = FetchEstacao();
//   console.log(ajax);
// //
// class Home extends Component {
//   state = {
//     coins: []
//   }
//
//   async componentDidMount() {
//     const coins = await ajax.fetchCoins();
//     this.setState({coins});
//     console.log(this.state.coins);
//   }
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
  txtButton: {
    color: 'white'
  },

});
