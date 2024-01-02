import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import fetchData from "../../../ui/api/data.json";
import Link from "next/link";

const SingleProductPage = ({ params }: { params: { id: number } }) => {
  interface productData {
    id: number;
    title: string;
    price: number;
    stock: number;
    color: string;
    size: string;
    createdTime: string;
    category: string;
    description: string;
  }
  let prod: productData = {
    id: 0,
    title: "",
    price: 0,
    stock: 0,
    color: "",
    size: "",
    createdTime: "",
    category: "",
    description: "",
  };

  fetchData.products.filter((product) => {
    product.id == params.id ? (prod = product) : "";
  });

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        title
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          {/* <input type="hidden" name="id" value={product.id} /> */}
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={prod.title}
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="price"
            value={prod.price}
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="stock"
            value={prod.stock}
          />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={"color"}
            value={prod.color}
          />
          <label>Size</label>
          <textarea
            typeof="text"
            name="size"
            placeholder={"size"}
            value={prod.size}
          />
          <label>Cat</label>
          <select name="cat" id="cat" value={prod.category}>
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="desc"
            value={prod.description}
          ></textarea>
          <Link href="/dashboard/products">Back to products page</Link>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
