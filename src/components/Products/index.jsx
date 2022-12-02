import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./products.module.css";
import Product from "./Product";

const Products = () => {
  const { categoryId } = useParams(); // получаем id из роута

  const products = useSelector((state) =>
    state.products.filter((product) => {
      if (!categoryId) return true;

      return product.categoryId === Number(categoryId);
    })
  ); // получаем и сразу фильтруем продукты по категориям

  return (
    <div className={styles.products}>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            discount={product.discount}
            left={product.left}
            image={product.image}
          />
        );
      })}
    </div>
  );
};

export default Products;
