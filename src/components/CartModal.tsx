import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import deleteBtn from '../assets/icon-delete.svg';
import { useAppContext } from '../context/context';
interface CartModalProps {}

const CartModal: React.FC<CartModalProps> = ({}) => {
  const { isCartModalOpen, modalLocation, cart, clearCart } = useAppContext();

  const container: React.MutableRefObject<any> = useRef(null);
  const { amount, product } = cart;

  useEffect(() => {
    const modal = container.current;
    const { center, bottom } = modalLocation;
    modal.style.left = `${center}px`;
    modal.style.top = `${bottom}px`;
  }, [modalLocation]);

  return (
    <Wrapper>
      <aside
        ref={container}
        className={`${isCartModalOpen ? 'submenu show' : 'submenu'}`}
      >
        <section>
          <h4>Cart</h4>
          <hr />
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className={`submenu-center col-3`}>
              <div className="img">
                <img src={product.images[0]} alt={product.name} />
              </div>
              <div>
                <p className="name">{product.name}</p>
                <p>
                  ${product.price}.00 x {amount}
                  <strong> ${product.price * amount}.00</strong>
                </p>
              </div>
              <button className="delete-btn" onClick={clearCart}>
                <img src={deleteBtn} alt="delete button" />
              </button>
            </div>
          )}
          <button className="checkout-btn">Checkout</button>
        </section>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  /* .temp-div {
    width: 500px;
    height: 300px;
    background-color: red;
  } */

  .submenu {
    background: var(--clr-white);
    width: 400px;
    box-shadow: var(--dark-shadow);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-80%);
    z-index: 3;
    display: none;
    padding: 1rem;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .submenu.show {
    display: block;
  }

  .submenu-center {
    display: grid;
    gap: 0.25rem 2rem;
    text-align: left;
    grid-template-columns: 50px 1fr 10px;
    align-items: center;
    justify-content: start;
    .img {
      width: 50px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .submenu h4 {
    margin-bottom: 1.5rem;
  }

  .submenu-center svg {
    //color: var(--clr-grey-5);
    margin-right: 1rem;
  }

  .delete-btn {
    background: none;
    border: none;
  }

  .checkout-btn {
    width: 100%;
    background-color: var(--clr-primary);
    color: var(--clr-white);
    border: none;
    padding: 0.75rem 0;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    :hover {
      box-shadow: 0 5px 15px var(--clr-primary);
    }
  }

  @media (min-width: 768px) {
    .submenu {
      transform: translateX(-70%);
    }
  }
`;

export default CartModal;
