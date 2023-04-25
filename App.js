import React, { useState } from 'react';
import { Button, FlatList, Text, View, Image, StyleSheet } from 'react-native';
import axios from 'axios';  

const ApiComponent = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Button title="Obtener Datos" onPress={fetchData} />
      <FlatList
        data={data.results}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemStatus}>{item.status} - {item.species}</Text>
            <Text style={styles.itemTexto}>Ultima vez visto en:</Text>
            <Text style={styles.itemLocation}>{item.location.name}</Text>
            <Text style={styles.itemTexto2}>Originario de: </Text>
            <Text style={styles.itemOrigin}>{item.origin.name}</Text>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: 'gray',
    borderRadius: 10,
    margin: 10,
    width: 700,
    height: 250,
  },
  itemLocation: {
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 325,
    marginTop: 120,
    color: '#7588FF',
  },

  itemOrigin: {
    fontSize: 18,
    fontWeight: 'cursive',
    position: 'absolute',
    marginLeft: 325,
    marginTop: 180,
    color: '#0015FF',
  },

  itemTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    marginLeft: 325
    
  
  },

  itemTexto: {
    fontWeight: 'cursive',
    position: 'absolute',
    marginLeft: 325,
    marginTop: 90,
    fontSize: 20, 

  },
  itemTexto2: {
    fontWeight: 'cursive',
    position: 'absolute',
    marginLeft: 325,
    marginTop: 150,
    fontSize: 20, 

  },



  itemImage: {
    width: 300,
    height: 250,
    
    justifyContent: "center",
    alignItems: "center",
  },
  itemStatus: {
  position: 'absolute',
  marginLeft: 325,
  marginTop: 50,
  fontSize: 25, 
  color: '#00FF00',
  },
  itemSpecies: {
    position: 'absolute',
    marginLeft: 325,
    marginTop: 100,
    fontSize: 25,
  },

  text: {
    fontSize: 100,
    color: 'black',
  },
  itemEstado: {
    color: 'white',
    fontSize: 20,
  },
  Estado: {
    color: 'black',
    fontSize: 20,
  }
﻿
})
export default function App() {
  return (
    <View style={styles.container}>
      <ApiComponent />
    </View>
  );
}
