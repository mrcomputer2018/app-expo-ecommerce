import { NavigationProp } from '@react-navigation/native';
export interface IProduct {
    id: number;
    nome: string;
    foto: string;
    preco: number;
}

export interface IProductCartProps {
    route: {
        params: {
            productsInCar: IProduct[];
        };
    };
    navigation: NavigationProp<any>;
}