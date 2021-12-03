import React from 'react';
import closeBtn from '../assets/icon-close.svg';
import styled from 'styled-components';
import { useAppContext } from '../context/context';

const links = ['Collections', 'Men', 'Women', 'About', 'Contact'];

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar sidebar-open' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <button className="close-btn" onClick={closeSidebar}>
            <img src={closeBtn} alt="close button" />
          </button>
        </div>
        <ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <a>{link}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: left;
  .sidebar-header {
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: #000;
    transition: var(--transition);
    cursor: pointer;
    margin-left: 1rem;
    margin-top: 0.2rem;
    margin-bottom: 2rem;
  }

  ul a {
    margin-left: -15px;
    display: block;
    text-align: left;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    background-color: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .sidebar-open {
    transform: translate(0);
    z-index: 999;
  }
`;

export default Sidebar;
