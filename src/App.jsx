import { CartProvider } from "./assets/Context";
import Cart from "./assets/Cart";

const App = () => {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
};

export default App;