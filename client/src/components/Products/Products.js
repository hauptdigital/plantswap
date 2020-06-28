import React from 'react';
import styled from '@emotion/styled';
import ProductListView from './ProductListView';

const exampleProductList = [
    {
        id: 1,
        title: 'Calathea',
        likes: 4,
        imgPath: '250.png',
        type: 'Tauschangebot ♻',
        user: 'Marc',
        tags: ['Mag Schatten', 'Pflegeleicht'],
    },
    {
        id: 2,
        title: 'Pothos',
        likes: 15,
        imgPath: '250.png',
        type: 'Zu Verschenken',
        user: 'Helene',
        tags: ['Test', 'noch ein Test'],
    },
    {
        id: 3,
        title: 'Yucca Palme 🌴🌴🌴',
        likes: 0,
        imgPath: '250.png',
        type: '10 €',
        price: '10',
        user: 'Suga',
        tags: ['Test'],
    },
    {
        id: 4,
        title: 'Calathea',
        likes: 4,
        imgPath: '250.png',
        type: 'Tauschangebot ♻',
        user: 'Marc',
        tags: ['Mag Schatten', 'Pflegeleicht'],
    },
    {
        id: 5,
        title: 'Pothos',
        likes: 15,
        imgPath: '250.png',
        type: 'Zu Verschenken',
        user: 'Helene',
        tags: ['Test', 'noch ein Test'],
    },
    {
        id: 6,
        title: 'Yucca Palme 🌴🌴🌴',
        likes: 0,
        imgPath: '250.png',
        type: '10 €',
        price: '10',
        user: 'Suga',
        tags: ['Test'],
    },
    {
        id: 7,
        title: 'Calathea',
        likes: 4,
        imgPath: '250.png',
        type: 'Tauschangebot ♻',
        user: 'Marc',
        tags: ['Mag Schatten', 'Pflegeleicht'],
    },
];

const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin: 10px 0;
`;

const Products = () => {
    return (
        <ProductGrid>
            {exampleProductList.map((product) => (
                <ProductListView key={product.id} product={product} />
            ))}
        </ProductGrid>
    );
};

export default Products;
