import { ProductsType } from "../type/type";
import CartButton from "./CartButton";
type ProductCardProsType = {
  Product: ProductsType;
  CartList: ProductsType[];
  RemoverButton?: boolean;
  setCartList: React.Dispatch<React.SetStateAction<ProductsType[]>>;
};

export default function ProductCard({
  Product,
  CartList,
  setCartList,
  RemoverButton = false,
}: ProductCardProsType) {
  return (
    <div className="flex flex-col bg-white w-[280px] max-h-[427px] p-[30px] justify-between hover:shadow-xl hover:border-[1px] mx-auto relative border-[1px] rounded-md">
      <div className="productcardinner w-[100%] h-[250px] rounded-xl overflow-hidden">
        <img src={`${Product.image}`} alt="" className="w-[100%] h-[100%]" />
      </div>
      <span className="text-[15px] my-[10px]">{Product.title}</span>
      <div className="w-[100%] flex justify-between">
        <span className="text-[20px] font-bold my-[10px]">
          ${Product.price}
        </span>
        <CartButton
          setCartList={setCartList}
          RemoverButton={RemoverButton}
          Product={Product}
          CartList={CartList}
        />
      </div>
    </div>
  );
}
