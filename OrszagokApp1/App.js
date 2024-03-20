// Kovács Attila
// szoft2/2/N
// 2024.03.13
// https://github.com/Attila732/orszagokListazasa

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {

  const host = "http://localhost:3000/"
  const endpoint = "orszagok"
  const url = host + endpoint

  const [orszagok, setorszagok] = useState([]);

  function getOrszagok(){
    fetch(url)
    .then(response => response.json())
    .then( result => {
      setorszagok(result)
    })
  }




  return (
    <View style={styles.container}>
      <Text style={styles.plainHeader}>Országok listája</Text>
      <Pressable style={styles.pressable}
      onPress={getOrszagok}
      >
        <Text>Lista</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.header}>Név</Text>
        <Text style={styles.header}>Terület</Text>
        <Text style={styles.header}>Népesség</Text>
      </View>
      <FlatList
        data={orszagok}
        renderItem={({item})=>(
          <View style={styles.item}>
            <Text style={styles.column}>{item.nev}</Text>
            <Text style={styles.column}>{item.terulet}km²</Text>
            <Text style={styles.column}>{item.nepesseg}</Text>
          </View>
        )}
        
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8532a8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  column: {
    flex: 1,
    textAlign: 'center',
    marginRight: 20,
    fontSize: 18,
  },
  header: {
    fontSize:30,
    fontStyle:'italic',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#3F51B5',
    width: '100%',
    marginBottom: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24, // Increased font size to 24
  },
  pressable: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // Adding gradient background
    // Here's an example of linear gradient, you can replace it with any other gradient or background image
    // Background color will be applied if gradient is not supported
    // You may need to install 'expo-linear-gradient' package if you are using Expo
    // Import LinearGradient from 'expo-linear-gradient';
    // background: '#4CAF50', // Fallback background color
    // backgroundImage: 'linear-gradient(45deg, #4CAF50, #388E3C)', // Gradient background
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  plainHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#212121',
    marginBottom: 20,
  },
});
