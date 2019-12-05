import React, { useState, useEffect } from "react";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/dataActions";
import UpdateProduct from "../../components/UpdateProduct/UpdateProduct";
import "./Products.css";

export default function Products() {
  // Maps Redux store state to props
  const role = useSelector(state => state.auth.user.role);

  // Allows us to use the store's dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    dispatch(getProducts());
  }

  return (
    <div className="mt-4 border-top border-bottom" id="table-border-width">
      <ProductsTable />
      {role === "Admin" ? (
        <UpdateProduct heading="Update Product Price & Quantity" />
      ) : role === "Production Manager" ? (
        <UpdateProduct heading="Update Product Quantity" />
      ) : role === "Sales Manager" ? (
        <UpdateProduct heading="Update Product Price" />
      ) : (
        <></>
      )}
    </div>
  );
}
