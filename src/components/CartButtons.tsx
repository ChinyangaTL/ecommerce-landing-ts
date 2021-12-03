import React from 'react';
import styled from 'styled-components';
import cartIcon from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';
import { useAppContext } from '../context/context';

interface CartButtonsProps {}

const CartButtons: React.FC<CartButtonsProps> = ({}) => {
  const { isSidebarOpen, openCartModal, amount } = useAppContext();

  let opacityStyle: string | {} = '';
  if (isSidebarOpen) {
    opacityStyle = { opacity: '0.1' };
  } else {
    opacityStyle = { opacity: '1' };
  }

  const showCartModal = (e: any) => {
    console.log(e);
    const btn = e.target.getBoundingClientRect();
    const center = (btn.left + btn.right) / 2;
    const bottom = btn.bottom + 20;
    console.log('center', center, 'bottom', bottom);
    const coordinates = {
      center,
      bottom,
    };
    openCartModal(coordinates);
  };

  return (
    <Wrapper className="cart-btn-wrapper" style={opacityStyle}>
      <button type="button" className="cart-btn" onClick={showCartModal}>
        <img src={cartIcon} alt="" />
        <span className="cart-value">{amount}</span>
      </button>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  //width: 225px;
  gap: 1em;
  justify-self: end;
  transition: var(--transition);

  .cart-btn {
    background: transparent;
    border: transparent;
    cursor: pointer;
    position: relative;
    font-size: 1.5rem;
  }

  .cart-value {
    position: absolute;
    top: -5px;
    right: 3px;
    width: 12px;
    height: 8px;
    display: flex;
    align-content: center;
    justify-content: center;
    border-radius: 48%;
    font-size: 0.75rem;
    background: var(--clr-primary);
    color: var(--clr-white);
    padding: 4px;
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    &:hover {
      border: 2px solid var(--clr-primary);
    }
  }
`;

export default CartButtons;
