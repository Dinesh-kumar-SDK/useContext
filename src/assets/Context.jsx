import { createContext, useContext, useReducer } from "react";

// Create the context
const CartContext = createContext();

// Initial State
const initialState = {
    products: [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            quantity: 0,
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts",
            price: 22.3,
            quantity: 0,
        },
        {
            id: 3,
            title: "Mens Cotton Jacket",
            price: 55.99,
            quantity: 0,
        },
        {
            id: 4,
            title: "Mens Casual Slim Fit",
            price: 15.99,
            quantity: 0,

        },
        {
            id: 5,
            title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            price: 695,
            quantity: 0,

        },
        {
            id: 6,
            title: "Solid Gold Petite Micropave ",
            price: 168,
            quantity: 0,

        },
        {
            id: 7,
            title: "White Gold Plated Princess",
            price: 9.99,
            quantity: 0,
        },
        {
            id: 8,
            title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
            price: 10.99,
            quantity: 0,
        },
        {
            id: 9,
            title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
            price: 64,
            quantity: 0,
        },
        {
            id: 10,
            title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            price: 109,
            quantity: 0,
        }

    ],
};

// Reducer function
const cartReducer = (state, action) => {
    switch (action.type) {
        case "INCREASE_QUANTITY":
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
            };
        case "DECREASE_QUANTITY":
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload && product.quantity > 1
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                ),
            };
        default:
            return state;
    }
};

// Provider Component
// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Calculate total quantity and total amount
    const totalQuantity = state.products.reduce(
        (total, product) => total + product.quantity,
        0
    );
    const totalAmount = state.products.reduce(
        (total, product) => total + product.quantity * product.price,
        0
    );

    return (
        <CartContext.Provider
            value={{ state, dispatch, totalQuantity, totalAmount }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
