import React from 'react';
import styled from '@emotion/styled';

const ProductHeader = styled.div`
    display: flex;
    align-content: center;
    justify-content: left;
    margin: 5px 0;
`;

const UserImage = styled.img`
    width: 30px;
    border-radius: 5px;
`;
const UserName = styled.span`
    align-self: center;
    padding-left: 5px;
`;

const ProductImage = styled.img`
    width: 250px;
    height: 250px;
`;
const ProductFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    max-width: 250px;
`;

const ProductTitle = styled.span`
    flex-basis: 80%;
`;

const Likes = styled.span`
    flex-basis: 20%;
    text-align: right;
`;

const Type = styled.span`
    flex-basis: 100%;
`;

const Tags = styled.span`
    display: flex;
    flex-wrap: wrap;
`;

const ProductListView = (props) => {
    const product = props.product;

    return (
        <div>
            <ProductHeader>
                <UserImage src="250.png" />
                <UserName>{product.user}</UserName>
            </ProductHeader>
            <ProductImage src={product.imgPath} />
            <ProductFooter>
                <Type>{product.type}</Type>
                <ProductTitle>{product.title}</ProductTitle>
                <Likes>{product.likes}</Likes>
                <Tags>{product.tags}</Tags>
            </ProductFooter>
        </div>
    );
};

export default ProductListView;
