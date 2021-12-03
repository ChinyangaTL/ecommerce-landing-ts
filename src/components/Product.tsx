import React from 'react';
import image1 from '../assets/image-product-1.jpg';
import image2 from '../assets/image-product-2.jpg';
import image3 from '../assets/image-product-3.jpg';
import image4 from '../assets/image-product-4.jpg';
import styled from 'styled-components';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import { useAppContext } from '../context/context';

const images: string[] = [image1, image2, image3, image4];
type Product = {
  company: string;
  name: string;
  price: number;
  formerPrice: number;
  description: string;
  images: string[];
};

export const product: Product = {
  company: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  price: 125.0,
  formerPrice: 250.0,
  description: `These low-profile sneakers are your perfect casual wear companion.
  Featuring a durable rubber outer sole, they’ll withstand everything the
  weather can offer`,
  images: images,
};

interface ProductProps {}

const Product: React.FC<ProductProps> = ({}) => {
  const { closeCartModal } = useAppContext();
  return (
    <Wrapper>
      <div className="section section-center page" onMouseDown={closeCartModal}>
        <div className="product-center">
          <ProductImages images={product.images} />
          <ProductInfo product={product} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;

  .product-center {
    display: grid;
    gap: 4em;
    /* /margin-top: 1rem; */
  }

  @media (min-width: 768px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-content: center;
    }
  }
`;

export default Product;
