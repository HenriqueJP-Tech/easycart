import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function AddProduct({ onClose }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descrição do Produto</Text>

      <TextInput
        placeholder='Nome do produto'
        style={styles.input}
      />
      <TextInput
        placeholder='Quantidade (unidades)'
        style={styles.input}
      />
      <TextInput
        placeholder='Valor (unitário)'
        style={styles.input}
      />

      <TouchableOpacity onPress={onClose} style={styles.btnAdd}>
        <Text>Adicionar Produto</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onClose} style={styles.btnClose}>
        <Text>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'center'
  },
  title: {
    paddingTop: 60,
    fontSize: 22,
    marginBottom: 40,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    paddingLeft: 16,
    height: 40,
    borderColor: 'black',
    borderRadius: 6,
    marginBottom: 10,
  },
  btnAdd: {
    padding: 10,
    marginTop: 30,
    backgroundColor: '#61DAFB',
    borderRadius: 6,
    alignItems: 'center'
  },
  btnClose: {
    padding: 20, 
    alignItems: 'center'
  }
});
