import React, { useState, useEffect } from "react";
import { Jumbotron, Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import ProductsTable from "../../components/ProductsTable/ProductsTable";
import UpdateProduct from "../../components/UpdateProduct/UpdateProduct";

import { getProducts } from "../../actions/authActions";

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
    <div className="border-top border-bottom" id="table-border-width">
      <Jumbotron fluid className="bg-dark text-light">
        <Container fluid>
          <h1 className="display-5">Our Products</h1>
          <p className="lead">
            See information about our products below including product name,
            quantity, and price.
          </p>
        </Container>
      </Jumbotron>
      <ProductsTable />
      {role === "Admin" ? (
        <UpdateProduct heading="Update Product Price & Quantity" />
      ) : role === "Production Manager" ? (
        <UpdateProduct heading="Update Product Quantity" />
      ) : role === "Sales Manager" ? (
        <UpdateProduct heading="Update Product Quantity" />
      ) : (
        <></>
      )}
    </div>
  );
}
