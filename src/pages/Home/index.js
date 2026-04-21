import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, SafeAreaViewBase } from "react-native"
import { Feather } from '@expo/vector-icons'

export default function Home(){
    const [products, setProducts] = useState([
        
        { id: 1, nome: "Arroz 5kg", preco: 24.90 },
        { id: 2, nome: "Feijão 1kg", preco: 7.50 },
        { id: 3, nome: "Óleo de Soja 900ml", preco: 6.90 },
        { id: 4, nome: "Leite Integral 1L", preco: 4.80 },
        { id: 5, nome: "Pão de Forma", preco: 8.99 },
        { id: 6, nome: "Açúcar 1kg", preco: 4.20 }

    ])
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de Produtos</Text>
                <TouchableOpacity style={styles.cartButton}>
                    <View style={styles.dot}>
                        <Text style={styles.dotText}>5</Text>
                    </View>
                    <Feather name='shopping-cart' size={30} color='#000'/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingEnd: 14,
        paddingStart: 14
    },
    cartContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 24
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    dot:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 2,
        bottom: -2,
        left: -4
    }, 
    dotText:{
        fontSize: 12,
    }
})