import React, { useEffect } from "react";
import { Jumbotron, Container } from "reactstrap";
import { useDispatch } from "react-redux";

import ProductsTable from "../../components/ProductsTable/ProductsTable";

import { getProducts } from "../../actions/dataActions";

import "./Products.css";

export default function Products() {
  // Maps Redux store state to props

  // Allows us to use the store's dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    onLoad();
  });

  async function onLoad() {
    dispatch(getProducts());
  }

  return (
    <div id="table-border-width">
      <Jumbotron fluid className="bg-dark text-light">
        <Container fluid>
          <h1 className="dash-text mb-5">Office Furniture Factory, LLC</h1>
          <h2 className="display-5 mb-3">Our Products</h2>
          <p className="lead">
            See information about our products below including product name,
            quantity, and price.
          </p>
          <p className="font-weight-lighter">
            <small>
              Edit product quantity and price below (if applicable).
            </small>
          </p>
        </Container>
      </Jumbotron>
      <ProductsTable />
    </div>
  );
}
