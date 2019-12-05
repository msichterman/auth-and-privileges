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
          <h1 className="display-5">Our Products</h1>
          <p className="lead">
            See information about our products below including product name,
            quantity, and price.
          </p>
        </Container>
      </Jumbotron>
      <ProductsTable />
    </div>
  );
}
