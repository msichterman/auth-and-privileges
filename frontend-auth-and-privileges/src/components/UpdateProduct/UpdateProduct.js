import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { updateProduct } from '../../actions/dataActions';
import "./UpdateProduct.css";
import {useDispatch, useSelector} from "react-redux";

export default function UpdateProduct(props) {
  const [name, setName] = useState(null);
  const [updatedPrice, updatePrice] = useState(0.0);
  const [updatedQuanity, updateQuanity] = useState(0);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.data.loading);
  const role = useSelector(state => state.auth.user.role);

  async function handleSubmit() {
    let params = {};
    if(name) {
      params.name = name
    }
    if(updatedPrice !== 0) {
      params.price = updatedPrice
    }
    if(updatedQuanity !== 0) {
      params.quantity = updatedQuanity
    }
    dispatch(updateProduct(params))
  }

  return (
    !loading && (
      <div className="bg-dark text-light p-5">
        <h2 className="mb-5">{props.heading}</h2>
        <Form
          inline
          className="d-flex justify-content-around"
        >
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="name" className="mr-sm-2">
              Product Name:
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          {role === "Admin" || role === "Production Manager" ?
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="quanity" className="mr-sm-2">
                  Quanity:
                </Label>
                <Input
                    type="number"
                    min="0"
                    id="quanity"
                    placeholder="0"
                    onChange={e => updateQuanity(e.target.value)}
                />
              </FormGroup> : <></>
          }
          {role === "Admin" || role === "Sales Manager" ?
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="price" className="mr-sm-2">
                  Price:
                </Label>
                {"$"}
                <Input
                    type="number"
                    min="0.00"
                    step="0.01"
                    id="price"
                    placeholder="0.00"
                    onChange={e => updatePrice(e.target.value)}
                />
              </FormGroup> : <></>}
        <Button
            id="red-button"
            onClick={() => handleSubmit()}
        >
          Update
        </Button>
      </Form>
    </div>
    )
  );
}
