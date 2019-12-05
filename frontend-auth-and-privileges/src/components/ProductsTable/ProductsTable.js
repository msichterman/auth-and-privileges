import React from "react";
import { Table, Spinner } from "reactstrap";
import { useSelector } from "react-redux";

import "./ProductsTable.css";

export default function ProductsTable(props) {
  // Maps Redux store state to props
  const loading = useSelector(state => state.data.loading);
  const products = useSelector(state => state.data.products);

  return loading ? (
    <div>
      <Spinner color="dark" />
    </div>
  ) : (
    <div
      className="mt-4 border-top border-bottom"
      id="products-table-border-width"
    >
      <h3 className="text-dark p-2 mb-0">Products</h3>
      <Table striped>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            return (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
