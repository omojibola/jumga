import React from 'react';
import {
  ProductCover,
  ProductText,
  ProductCase,
  ProductWrap,
  MoreButton,
} from './ProductSectionElements';
import Product from '../Product/Product';
import product from '../../img/photo-1515940175183-6798529cb860 1.jpg';
import speaker from '../../img/speaker.jpeg';

const ProductSection = ({ text, buttonText, clicked, products }) => {
  return (
    <>
      <ProductCover>
        <ProductText>{text}</ProductText>
        <ProductCase>
          <Product id={1} image={product} price={18} name={'Phone Case'} />
          <Product
            id={2}
            image={speaker}
            price={23}
            name={'Amazon Echo Smart Speaker'}
          />
          <Product
            id={3}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
            }
            price={42}
            name={'Kenwood KMix Stand Mixer'}
          />
          <Product
            id={4}
            image={
              'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
            }
            price={15}
            name={'The Lean StartUp'}
          />
          {products
            ? products.map((item) => (
                <Product
                  key={item.id}
                  name={item.productName}
                  price={item.price}
                  image={item.productImage}
                  id={item.id}
                  subaccountId={item.subaccountId}
                />
              ))
            : null}
        </ProductCase>
        <ProductWrap>
          {buttonText && (
            <MoreButton onClick={clicked} variant={'outlined'}>
              {buttonText}
            </MoreButton>
          )}
        </ProductWrap>
      </ProductCover>
    </>
  );
};

export default ProductSection;
