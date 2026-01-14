import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { useState } from 'react';

import AddProduct from './components/AddProduct';


export default function App() {

  const [showAddProduct, setShowAddProduct] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.areaTotal}>
        <Text style={styles.total}>Valor Total:</Text>
        <Text style={styles.total}> R$ 3.543,59 </Text>
      </View>
      <TouchableOpacity style={styles.btnAddProduct} onPress={ () => setShowAddProduct(true)}>
        <Text style={styles.btnText}> + </Text>
      </TouchableOpacity>

       <Modal
          visible={showAddProduct}
          animationType="slide"
          transparent={false}
        >
        <AddProduct onClose={() => setShowAddProduct(false)} />

      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  areaTotal:{
    backgroundColor: '#61DAFB',
    alignItems: 'center',
    paddingTop: 64,
  },
  total: {
    fontSize: 24,
  },
  btnAddProduct:{
    backgroundColor: '#61DAFB',
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 24,
  }
});
