import { useState } from "react";
import { ProductsType } from "../type/type";
import useFetchProducts from "../api/useFetchProducts";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import CartContainer from "../components/CartContainer";
import LoadingContainer from "../components/LoadingContainer";

function filterBySearchResult(SearchResult: string, Items: ProductsType[]) {
  const filterSearch = Items.filter((item: ProductsType) =>
    item.title.includes(SearchResult)
  );
  return filterSearch;
}

export default function UserHomePage() {
  const { data: Items, isLoading, isError } = useFetchProducts();
  const [SearchResult, setSearchResult] = useState<string | null>(null);
  const [CartList, setCartList] = useState<ProductsType[]>([]);
  const [isCart, setisCart] = useState(false);

  const products: ProductsType[] | [] = SearchResult
    ? filterBySearchResult(SearchResult, Items)
    : Items;

  return (
    <div className="flex flex-col px-[30px] relative">
      <Header
        setisCard={setisCart}
        CartList={CartList}
        setSearchResult={setSearchResult}
      />
      <div
        className="w-[100%] flex flex-col items-center"
        onClick={() => setisCart(false)}
      >
        <span className="w-[100%] flex justify-center text-[20px] font-bold uppercase underline mb-[50px] mt-[130px]">
          <h2>Products</h2>
        </span>
        {isLoading && !isError && <LoadingContainer />}
        {isError && <span>Error while fetching data</span>}
        {products?.length === 0 && <div>No item found</div>}
        {!isError && !isLoading && (
          <div className={`flex flex-wrap gap-[150px] w-[100%] `}>
            {products.map((item: ProductsType) => (
              <ProductCard
                Product={item}
                key={item.id}
                CartList={CartList}
                setCartList={setCartList}
              />
            ))}
          </div>
        )}
      </div>
      <CartContainer
        isCard={isCart}
        CartList={CartList}
        setCartList={setCartList}
      />
    </div>
  );
}