import PriceTag from "./PriceTag";

type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({ title, price, inStock }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <PriceTag amount={price} />
      <p>{inStock ? "In stock" : "Sold out"}</p>
    </div>
  );
}
