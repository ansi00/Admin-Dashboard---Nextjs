import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeHolder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Iphone
              </div>
            </td>
            <td>Description</td>
            <td>$999</td>
            <td>13.01.2022</td>
            <td>34</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>

                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}
