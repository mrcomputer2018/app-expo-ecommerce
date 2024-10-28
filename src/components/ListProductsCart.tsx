import { View, Text, StyleSheet, Image } from 'react-native';
import { IProduct } from '../types/types';

export default function ListProductsCart({ item }: { item: IProduct }) {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
});