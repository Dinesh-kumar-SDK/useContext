import { useCart } from "./Context";

const CartPage = () => {
    const { state, dispatch, totalQuantity, totalAmount } = useCart();

    const handleIncrease = (id) => {
        dispatch({ type: "INCREASE_QUANTITY", payload: id });
    };

    const handleDecrease = (id) => {
        dispatch({ type: "DECREASE_QUANTITY", payload: id });
    };

    return (
        <div style={styles.cartContainer}>
            <h1 style={styles.title}>Shopping Cart</h1>
            {state.products.map((product) => (
                <div key={product.id} style={styles.product}>
                    <div style={styles.details}>
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Subtotal: ${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                    <div style={styles.controls}>
                        <button
                            style={styles.button}
                            onClick={() => handleDecrease(product.id)}
                        >
                            -
                        </button>
                        <span style={styles.quantity}>{product.quantity}</span>
                        <button
                            style={styles.button}
                            onClick={() => handleIncrease(product.id)}
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}
            <div style={styles.summary}>
                <h2>Total Quantity: {totalQuantity}</h2>
                <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default CartPage;

const styles = {
    cartContainer: {
        width: "80%",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        textAlign: "center",
        marginBottom: "20px",
    },
    product: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
        padding: "10px 0",
    },
    details: {
        flex: 3,
    },
    controls: {
        flex: 1,
        display: "flex",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        padding: "5px 10px",
        cursor: "pointer",
    },
    quantity: {
        margin: "0 10px",
        fontSize: "16px",
    },
    summary: {
        textAlign: "right",
        marginTop: "20px",
    },
};
