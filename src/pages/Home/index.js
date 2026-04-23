import { useState, useContext } from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Feather } from '@expo/vector-icons'
import Product from "../../components/Product"
import { useNavigation } from "@react-navigation/native"
import { CartContext } from '../../contexts/CartContext'

export default function Home(){
    const { cart, addItemCart } = useContext(CartContext);

    const navigation = useNavigation();

    const [products, setProducts] = useState([
        
        { id: 1, name: "Arroz 5kg", preco: 24.90 },
        { id: 2, name: "Feijão 1kg", preco: 7.50 },
        { id: 3, name: "Óleo de Soja 900ml", preco: 6.90 },
        { id: 4, name: "Leite Integral 1L", preco: 4.80 },
        { id: 5, name: "Pão de Forma", preco: 8.99 },
        { id: 6, name: "Açúcar 1kg", preco: 4.20 }

    ])

    function handleAddCart(item){
        addItemCart(item)
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de Produtos</Text>
                <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
                    { cart.length >= 1 && (
                        <View style={styles.dot}>
                            <Text style={styles.dotText}>{cart?.length}</Text>
                        </View>
                    )}
                    <Feather name='shopping-cart' size={30} color='#000'/>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Product data={item} addToCart={ () => handleAddCart (item)} />}
            />
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
        left: -4,
    }, 
    dotText:{
        fontSize: 12,
    }
})