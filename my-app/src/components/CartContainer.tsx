import { ProductsType } from "../type/type";
import ProductCard from "./ProductCard";

type CartContainerPropsType = {
  isCart: boolean;
  CartList: ProductsType[];
  setCartList: React.Dispatch<React.SetStateAction<ProductsType[]>>;
  setisCard: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function CartContainer({
  isCart,
  CartList,
  setCartList,
  setisCard,
}: CartContainerPropsType) {
  const totalPrice = CartList.reduce((acc: number, cur) => {
    return acc + cur.price;
  }, 0);

  const handleCheckoutClick = () => {
    alert("Thank you for the shopping");
    setCartList([]);
    setisCard(false);
  };
  return (
    <div
      className={`w-[500px] fixed right-0 bg-[#739caf] top-[100px] h-[100vh] border-2 z-10 px-[10px] py-[20px] CartContainer ${
        isCart ? "showCart" : "hideCart"
      }`}
    >
      {!CartList.length || CartList.length === 0 ? (
        <div className="text-[20px] text-white font-bold">Cart is empty</div>
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
          <div className="w-[100%] flex justify-center">
            <button
              className="bg-black text-white h-[50px] px-[10px] rounded-lg active:scale-95 font-bold"
              onClick={handleCheckoutClick}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
