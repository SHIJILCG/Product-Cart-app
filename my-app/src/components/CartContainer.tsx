import { ProductsType } from "../type/type";
import ProductCard from "./ProductCard";

type CartContainerPropsType = {
  isCard: boolean;
  CartList: ProductsType[];
  setCartList: React.Dispatch<React.SetStateAction<ProductsType[]>>;
};
export default function CartContainer({
  isCard,
  CartList,
  setCartList,
}: CartContainerPropsType) {
  const totalPrice = CartList.reduce((acc: number, cur) => {
    return acc + cur.price;
  }, 0);

  return (
    <div
      className={`w-[500px] fixed right-0 bg-[#739caf] top-[100px] h-[100vh] border-2 z-10 px-[10px] py-[20px] CartContainer ${
        isCard ? "showCart" : "hideCart"
      }`}
    >
      {!CartList.length || CartList.length === 0 ? (
        <div>No Item Found</div>
      ) : (
        <div className="w-[100%] h-[100vh] flex flex-wrap gap-[50px] overflow-scroll hide-scrollbar pb-[150px] CartCardWrapper">
          {CartList.map((item: ProductsType) => (
            <ProductCard
              Product={item}
              key={item.id}
              CartList={CartList}
              setCartList={setCartList}
              RemoverButton={true}
            />
          ))}
          <div className="w-[100%] text-[20px] uppercase">
            total Price = $ {totalPrice}
          </div>
        </div>
      )}
    </div>
  );
}
