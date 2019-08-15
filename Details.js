import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet,Share } from 'react-native';

class Details extends Component {
  onShare = async () => {
    try {
      const data = this.props.navigation.getParam('data', 'NO-data');
      const result = await Share.share({
        message: 'Titulo: '+data.title+'\n'+
                  'ID: '+data.ID+'\n'+
                  'ESTADO: '+data.ESTADO+'\n'+
                  'MUNICÍPIO: '+data.MUNICIPIO+'\n'+
                  'BACIA: '+data.BACIA+'\n'+
                  'SUB-BACIA: '+data.SUBBACIA+'\n'+
                  'RESPONSÁVEL: '+data.RESPONSAVEL+'\n'+
                  'OPERADORA: '+data.OPERADORA+'\n'+
                  'ALTITUDE: '+data.ALTITUDE+'\n'+
                  'ESTAÇĂO PLUVIOMÉTRICA: '+data.EP+'\n'+
                  'REGISTRADOR DE CHUVA: '+data.EC+'\n'+
                  'ESTAÇĂO CLIMATOLÓGICA: '+data.EC+'\n'+
                  'latitude: '+data.coordinates.latitude+'\n'+
                  'longitude: '+data.coordinates.longitude+'\n'+
                  'Fonte: ClimMapView',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  render(){
     const data = this.props.navigation.getParam('data', 'NO-data');
    return (
      <ScrollView style={styles.description}>
        <Text style ={styles.txtTitulo}>Titulo: {data.title}</Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>ID: </Text>
          <Text>{data.ID}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>Estado: </Text>
          <Text>{data.ESTADO}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>Municipio: </Text>
          <Text>{data.MUNICIPIO}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>Bacia: </Text>
          <Text>{data.BACIA}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>Sub-Bacia: </Text>
          <Text>{data.SUBBACIA}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>Responsavel: </Text>
          <Text>{data.RESPONSAVEL}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>Operadora: </Text>
          <Text>{data.OPERADORA}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>ESTAÇĂO PLUVIOMÉTRICA: </Text>
          <Text>{data.EP}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>REGISTRADOR DE CHUVA: </Text>
          <Text>{data.RC}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>ESTAÇĂO CLIMATOLÓGICA: </Text>
          <Text>{data.EC}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>Altitude: </Text>
          <Text>{data.ALTITUDE}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>Lagitude: </Text>
          <Text>{data.coordinates.latitude}</Text>
        </Text>

        <Text style={styles.txtDetails}>
          <Text style={styles.txtColum}>Longitude: </Text>
          <Text>{data.coordinates.longitude}</Text>
        </Text>

        <TouchableOpacity style={styles.button} onPress={this.onShare}>
          <Text style={styles.txtButton}> Compartilhar </Text>
        </TouchableOpacity>

      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#FFF',
		borderWidth: 0.5,
		borderColor: '#999',
		margin: 10,
		padding: 10,
		flexDirection: 'row'
	},
	foto: {
		width: 102,
		height: 102
	},
	description: {
		marginLeft: 20,
		flex: 1,
    backgroundColor: '#FFF',
		margin: 10,
		padding: 10,
	},
	txtTitulo: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
	},
	txtColum: {
		fontWeight: 'bold'
	},
	txtDetails: {
		fontSize: 16,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
	},
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
export default Details;
