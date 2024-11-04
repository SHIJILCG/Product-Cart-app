import { FaCartPlus } from "react-icons/fa";
import { ProductsType } from "../type/type";
type HeaderPropsType = {
  setisCard: React.Dispatch<React.SetStateAction<boolean>>;
  CartList: ProductsType[];
  setSearchResult: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Header({
  setisCard,
  CartList,
  setSearchResult,
}: HeaderPropsType) {
  return (
    <div className="bg-[#2f6694] fixed top-0 left-0 w-[100vw] h-[100px] flex items-center justify-between px-[40px] z-[10000] HeaderContainer">
      <div className="text-white text-[20px] uppercase font-bold headerText">
        <span>Simple Shop</span>
      </div>
      <div className="flex items-center Search_Cart_Container">
        <div className="relative mr-[30px]">
          <FaCartPlus /////////Cart Icon
            className="w-[30px] h-[30px]  text-white bottom-7 right-5 active:scale-95"
            onClick={() => setisCard((Prev) => !Prev)}
          />
          <span className="absolute top-[-13px] right-[-10px] bg-black w-[20px] h-[20px] flex items-center justify-center rounded-full text-[#fff] font-bold text-[15px]">
            {CartList.length}
          </span>
        </div>
        <input
          type="text"
          className="px-[30px] py-[10px] rounded-lg bg-[#1d3a52] text-white placeholder:text-white outline-none "
          placeholder="Search"
          onChange={(e) => setSearchResult(e.target.value)}
        />
      </div>
    </div>
  );
}
