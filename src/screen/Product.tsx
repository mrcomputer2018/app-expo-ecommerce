import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListProducts from '../components/ListProducts';

export default function Product() {

    const [products, setProducts] = useState([
        {
            id: 101,
            nome: 'Tênis de Corrida Esportivo',
            foto: 'https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/14/JD8-5484-014/JD8-5484-014_detalhe1.jpg?ts=1697735445',
            preco: 299.90
          },
          {
            id: 102,
            nome: 'Smartphone Android 128GB',
            foto: 'https://a-static.mlcdn.com.br/280x210/samsung-galaxy-s23-fe-5g-smartphone-android-128gb-creme/magazineluiza/237986000/834995fab08e1d3c250049974b7dba19.jpg',
            preco: 1499.00
          },
          {
            id: 103,
            nome: 'Fone de Ouvido Bluetooth Pro',
            foto: 'https://a-static.mlcdn.com.br/280x210/fone-de-ouvido-sem-fio-bluetooth-compativel-com-iphone-x-xs-xr-11-12-13-13-pro-max-14-14-pro-max-agld/mydiamondacessorios/8bb923e2186c11ed87c24201ac185079/288773e5eb376e1c90e9e91a02d7331c.jpeg',
            preco: 199.90
          },
          {
            id: 104,
            nome: 'Relógio Smartwatch Fitness',
            foto: 'https://a-static.mlcdn.com.br/280x210/smartwatch-y8-com-fone-bluetooth-conectividade-e-estilo-para-android-e-ios-monitoramento-de-saude-e-fitness-tws/atebshop/kit-m8preto/48c8aaae08860db48e6e9bc2644f3b71.jpeg',
            preco: 399.90
          },
          {
            id: 105,
            nome: 'Mochila de Viagem Impermeável',
            foto: 'https://static.netshoes.com.br/produtos/mochila-executiva-hurley-impermeavel-notebook-trabalho-viagem-reforcada-19-litros/06/D71-6523-006/D71-6523-006_thumb1.jpg?ts=1725894291',
            preco: 249.90
          },
          {
            id: 106,
            nome: 'Notebook Gamer 16GB RAM',
            foto: 'https://images.kabum.com.br/produtos/fotos/564915/notebook-acer-aspire-5-amd-ryzen7-5700u-16gb-ram-ssd-512gb-15-6-full-hd-ips-amd-radeon-linux-prata-a515-45-r74n_1716491063_m.jpg',
            preco: 4999.00
          },
    ]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />

            <View style= { styles.areaTitle }>
                <Text  style= { styles.title }>Listagem de produtos</Text>
                <Text>Vertodos</Text>
            </View>

            <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <ListProducts item={item} />
            )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
    },
    areaTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});