import React from 'react';
import styled from 'styled-components';
import AddToCart from './AddToCart';
import product from './Product';

interface ProductInfoProps {
  product: product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { company, name, price, formerPrice, description } = product;

  return (
    <Wrapper className="content">
      <h5 className="company">{company}</h5>
      <h2 className="name">{name}</h2>
      <p>{description}</p>
      <div className="price">
        <h4>${price}.00</h4>
        <span>{(price / formerPrice) * 100}%</span>
      </div>
      <h5 className="former-price">${formerPrice}.00</h5>
      <AddToCart product={product} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  /* width: 90%; */
  //justify-content: center;
  text-align: left;
  .company {
    color: var(--clr-primary);
    margin-bottom: -15px;
  }

  p {
    line-height: 1.5;
    margin-bottom: -10px;
  }

  .price {
    display: flex;
    align-items: center;
    margin-bottom: -1.5rem;

    span {
      background: var(--clr-accent);
      color: var(--clr-primary);
      font-weight: 700;
      border-radius: var(--radius);
      margin-left: 1rem;
      width: 50px;
      display: flex;
      justify-content: center;
    }
  }

  .former-price {
    margin-top: -2px;
    text-decoration: line-through;
    color: var(--clr-text-secondary);
  }

  @media (min-width: 768px) {
    width: 90%;
  }
`;

export default ProductInfo;
