import React, { Component } from 'react';
import {View, StyleSheet, Text, PermissionsAndroid, Alert,Platform, Image, TouchableOpacity, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import * as dados from './data/dados.json';
const markerImg = require('./icon/nuvem-azul-small.png');

// console.log(dados.properties);
  var json = {
  markers: [{
    title: 'hello',
    coordinates: {
      latitude: 3.148561,
      longitude: 101.652778
    },
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 3.149771,
      longitude: 101.655449
    },
  }]
}

  // console.log(json.markers[1]);
  for(let i = 0; i < 636; i++){
      // console.log(dados[i].properties);
      json.markers[i] = {
            title: dados[i].properties.NOME,
            ID: dados[i].properties.ID,
            ESTADO: dados[i].properties.ESTADO,
            MUNICIPIO: dados[i].properties.MUNICÍPIO,
            BACIA: dados[i].properties.BACIA,
            SUBBACIA: dados[i].properties["SUB-BACIA"],
            RESPONSAVEL: dados[i].properties.RESPONSÁVEL,
            OPERADORA: dados[i].properties.OPERADORA,
            ALTITUDE: dados[i].properties.ALTITUDE,
            EP: dados[i].properties["ESTAÇĂO PLUVIOMÉTRICA"],
            RC: dados[i].properties["REGISTRADOR DE CHUVA"],
            EC: dados[i].properties["ESTAÇĂO CLIMATOLÓGICA"],
            coordinates: {
            latitude: dados[i].properties.Y,
            longitude: dados[i].properties.X
              }
           }
        }

class Map extends Component{
  constructor(props) {
    super(props);
    this.data = json;
    console.log(this.data);
  }

  state = {
      currentLongitude:  -43.279,//Initial Longitude
      currentLatitude: -22.839,//Initial Latitude
   }
   render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: this.state.currentLatitude,
            longitude: this.state.currentLongitude,
            latitudeDelta: 0.200,
            longitudeDelta: 0.0200,
          }}
        >

        {this.data.markers.map(marker => (
          <MapView.Marker
            image={markerImg}
            coordinate={marker.coordinates}>
            <MapView.Callout onPress={() => this.props.navigation.navigate('Details',{data: marker})}>
              <TouchableOpacity
              style={styles.popup}
              >
              <Text style={styles.txtTitle}>{marker.title}</Text>
                </TouchableOpacity>
            </MapView.Callout>
          </MapView.Marker>
          ))}

        </MapView>
      </View>

    );
  }
};

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },

  txtTitle:{

    fontSize: 16,
    fontWeight: 'bold'

  },

  popup:{

    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 2

  },

  map: {

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

  },

});
export default Map;
