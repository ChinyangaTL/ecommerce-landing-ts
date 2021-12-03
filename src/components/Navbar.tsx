import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import hamburger from '../assets/icon-menu.svg';
import CartButtons from './CartButtons';
import { useAppContext } from '../context/context';

const links: string[] = ['Collections', 'Men', 'Women', 'About', 'Contact'];

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { openSidebar, closeCartModal } = useAppContext();

  return (
    <NavContainer onMouseDown={closeCartModal}>
      <div className="nav-center">
        <div className="nav-header">
          <button type="button" className="hamburger" onClick={openSidebar}>
            <img src={hamburger} alt="menu toggle" />
          </button>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a href="/">{link}</a>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;

  .nav-center {
    width: 90vw;
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-content: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .hamburger {
    background: transparent;
    border: transparent;
    cursor: pointer;
  }

  ul {
    display: none;
  }

  @media (min-width: 800px) {
    .hamburger {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: 1fr auto 2fr;
      align-items: center;
    }
    ul {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-text-primary);
        font-size: 1rem;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        padding-bottom: 1.8rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary);
          cursor: pointer;
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
