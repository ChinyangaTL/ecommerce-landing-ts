import type { ReactNode } from 'react';
import { createContext, useReducer, useContext } from 'react';
import reducer from '../reducer/reducer';
import { Action } from '../reducer/reducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  CARTMODAL_OPEN,
  CARTMODAL_CLOSE,
  INCREASE,
  DECREASE,
  ADD_TO_CART,
  CLEAR_CART,
} from '../actions';
import React from 'react';
import Product from '../components/Product';

export const initialState = {
  isSidebarOpen: false,
  isCartModalOpen: false,
  modalLocation: {},
  amount: 0,
  cart: [],
};

type Dispatch = (action: Action) => void;

const AppContext: React.Context<any> = React.createContext(initialState);

export const AppProvider = ({ children }: { children: ReactNode }): any => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const openCartModal = (coordinates: {}) => {
    dispatch({ type: CARTMODAL_OPEN, payload: coordinates });
  };

  const closeCartModal = () => {
    dispatch({ type: CARTMODAL_CLOSE });
  };

  const increase = () => {
    dispatch({ type: INCREASE });
  };

  const decrease = () => {
    dispatch({ type: DECREASE });
  };

  const addToCart = (amount: number, product: Product) => {
    dispatch({ type: ADD_TO_CART, payload: { amount, product } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openCartModal,
        closeCartModal,
        increase,
        decrease,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
