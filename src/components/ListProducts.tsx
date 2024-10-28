import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { IProduct } from '../types/types';

export default function ListProducts({item} : {item: IProduct}) {
    return (
        <View style={ styles.container }>
            <Image 
                source={{uri: item.foto}}
                style={{width: 100, height: 100}}
            />

            <View style={ styles.areaDescription }>
                <Text  style={ styles.name}>
                    {item.nome}
                </Text>

                <Text style={ styles.price}>
                    R${(item.preco).toFixed(2)}
                </Text>
                <TouchableOpacity style={ styles.areaButton }>
                    <Text style={ styles.textButton }>
                        Comprar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: '#fff',
    },
    areaDescription: {
        marginLeft: 20,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
    },
    areaButton: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        paddingVertical: 10,
        width: 100,
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});