import React, { Component } from 'react';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';

class Details extends Component {
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
          <Text style={styles.txtColum}>Longitude: </Text>
          <Text>{data.coordinates.longitude}</Text>
        </Text>

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


});
export default Details;
