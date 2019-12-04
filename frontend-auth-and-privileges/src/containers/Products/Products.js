import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

import UpdateProduct from "../../components/UpdateProduct/UpdateProduct";

import "./Products.css";

export default function Products(props) {
  const [productsLoading, setProductsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onLoad();
  }, [products]);

  async function onLoad() {
    try {
      // Needs API
      //const users = await getProducts();
      setProductsLoading(false);
    } catch (e) {
      alert("No products found.");
    }
  }

  // Needs API
  async function updateProduct(id, price, quanity) {
    price = price || null;
    quanity = quanity || null;
    await updateProduct();
  }

  return (
    <div className="mt-4 border-top border-bottom" id="table-border-width">
      <h1 className="text-dark p-2 mb-0">Products</h1>
      <Table striped>
        <thead>
          <tr>
            <th>ID #</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quanity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            return (
              <tr>
                <td>#{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.quanity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.role === "Admin" ? (
        <UpdateProduct
          heading="Update Product Price & Quantity"
          productProps={{ products, setProducts }}
        />
      ) : props.role === "Production Manager" ? (
        <UpdateProduct heading="Update Product Quantity" />
      ) : props.role === "Sales Manager" ? (
        <UpdateProduct heading="Update Product Quantity" />
      ) : (
        <></>
      )}
    </div>
  );
}