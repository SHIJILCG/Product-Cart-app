import { ProductsType } from "../type/type";

type CartButtonProsType = {
  Product: ProductsType;
  CartList: ProductsType[];
  RemoverButton?: boolean;
  setCartList: React.Dispatch<React.SetStateAction<ProductsType[]>>;
};

export default function CartButton({
  RemoverButton,
  CartList,
  Product,
  setCartList,
}: CartButtonProsType) {
  const handleaddButtonClick = () => {
    /////////function for adding items
    if (CartList.some((item) => item.id === Product.id)) {
      alert("Item is already added to the cart ");
      return;
    }
    setCartList((Prev) => [...Prev, Product]);
  };

  const handleRemoveClick = () => {
    /////// function for removing items
    if (CartList.some((item) => item.id === Product.id)) {
      const filterCart = CartList.filter(
        (item: ProductsType) => item.id !== Product.id
      );
      setCartList(filterCart);
    } else {
      alert("item not found");
    }
  };

  return (
    <button
      className="bg-black text-white px-[10px] rounded-xl font-bold hover:bg-white hover:border-[1px] hover:text-black transition-colors"
      onClick={() =>
        RemoverButton ? handleRemoveClick() : handleaddButtonClick()
      }
    >
      {RemoverButton ? "Remove item" : "Add to cart"}
    </button>
  );
}
