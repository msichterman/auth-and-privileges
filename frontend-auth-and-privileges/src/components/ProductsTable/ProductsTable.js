import React, { useState, useEffect } from "react";
import { Table, Spinner } from "reactstrap";
import { useSelector } from "react-redux";

import "./ProductsTable.css";

export default function ProductsTable(props) {
    const [productsLoading, setProductsLoading] = useState(true);

    // Maps Redux store state to props
    const loading = useSelector(state => state.auth.loading);
    const products = useSelector(state => state.auth.products);

    return loading ? (
        <div>
            <Spinner color="dark" />
        </div>
    ) : (
        <div className="mt-4 border-top border-bottom" id="table-border-width">
            <h3 className="text-dark p-2 mb-0">Products</h3>
            <Table striped>
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => {
                    return (
                        <tr>
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
