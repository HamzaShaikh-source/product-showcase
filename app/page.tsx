import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Page() {
  return (
    <main className="store">
      <h1>My Product Store</h1>

      {/* TODO: once Greeting takes a `name` prop, pass one here:
          <Greeting name="Shopper" /> */}
      <Greeting />

      <div className="cards">
        {/* TODO: reuse ProductCard at least TWICE with DIFFERENT data.
            Remember: numbers and booleans are passed in braces.
            <ProductCard title="Keyboard" price={49} inStock={true} />
            <ProductCard title="Mouse"    price={25} inStock={false} /> */}
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
}
