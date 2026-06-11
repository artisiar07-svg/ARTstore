import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { sku, price, image, color, storage, name, productId } = action.payload;
      const existingIndex = state.items.findIndex(
        item => item.productId === productId && item.sku === sku
      );
      
      if (existingIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + 1
        };
        return { ...state, items: updatedItems };
      }
      
      return {
        ...state,
        items: [
          ...state.items,
          {
            productId: productId || sku,
            sku,
            name,
            price,
            image,
            color,
            storage,
            quantity: 1
          }
        ]
      };
    }
    
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          item => !(item.productId === action.payload.productId && item.sku === action.payload.sku)
        )
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const { productId, sku, quantity } = action.payload;
      if (quantity < 1) {
        return {
          ...state,
          items: state.items.filter(
            item => !(item.productId === productId && item.sku === sku)
          )
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.productId === productId && item.sku === sku
            ? { ...item, quantity }
            : item
        )
      };
    }
    
    case 'CLEAR_CART':
      return { ...state, items: [] };
      
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    { items: [] },
    () => {
      const saved = localStorage.getItem('artstore_cart');
      return saved ? JSON.parse(saved) : { items: [] };
    }
  );

  useEffect(() => {
    localStorage.setItem('artstore_cart', JSON.stringify(state));
  }, [state]);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (productId, sku) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, sku } });
  };

  const updateQuantity = (productId, sku, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, sku, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = {
    items: state.items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};