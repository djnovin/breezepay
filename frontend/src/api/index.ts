import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getProducts = async() => {
    const {data} = await instance.get('/products/');
    return data;
    console.log(data);
}

export const getProduct = async(id: any) => {
    const {data} = await instance.get(`/products/${id}/`);
    console.log(data);
    return data;
}

