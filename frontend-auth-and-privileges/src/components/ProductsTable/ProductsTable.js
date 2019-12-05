import React, {useState} from "react";
import {Table, Spinner, Button, Input} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";

import "./ProductsTable.css";
import {updateProduct, updateProductEditing} from "../../actions/dataActions";

export default function ProductsTable(props) {
    const [quantity, updateQuantity] = useState(0);
    const [price, updatePrice] = useState(0);

    // Maps Redux store state to props
    const loading = useSelector(state => state.data.loading);
    const products = useSelector(state => state.data.products);
    const productEditing = useSelector(state => state.data.productEditing);
    const role = useSelector(state => state.auth.user.role);

    const dispatch = useDispatch();

    async function handleSubmit(name) {
        let params = {};
        params.name = name;
        if (price !== 0) {
            params.price = price;
        }
        if (quantity !== 0) {
            params.quantity = quantity;
        }
        dispatch(updateProduct(params));
        dispatch(updateProductEditing(null));
        updatePrice(0);
        updateQuantity(0);
    }

    return loading ? (
        <div>
            <Spinner color="dark"/>
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
                    <th className="inputCol">Quantity</th>
                    <th className="inputCol">Price</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => {
                    return (
                        <tr key={product.name}>
                            <td>{product.name}</td>
                            {product.name === productEditing && (role === "Admin" || role === "Production Manager") ? (
                                <td className="inputCol">
                                    <Input
                                        className="input"
                                        type="text"
                                        id="quantity"
                                        placeholder={product.quantity}
                                        onChange={e => updateQuantity(e.target.value)}
                                    />
                                </td>
                            ) : (
                                <td className="inputCol">{product.quantity}</td>
                            )}
                            {product.name === productEditing && (role === "Admin" || role === "Sales Manager") ? (
                                <td className="inputCol">
                                    <Input
                                        className="input"
                                        type="text"
                                        id="price"
                                        placeholder={product.price}
                                        onChange={e => updatePrice(e.target.value)}
                                    />
                                </td>
                            ) : (
                                <td className="inputCol">{"$" + product.price}</td>
                            )}
                            {product.name === productEditing ? (
                                <>
                                    <td className="buttonCol">
                                        <Button
                                            className="button"
                                            id="red-update-button"
                                            onClick={() => handleSubmit(product.name)}
                                        >
                                            Update
                                        </Button>
                                    </td>
                                    <td className="buttonCol">
                                        <Button
                                            className="button"
                                            id="red-update-button"
                                            onClick={() => {
                                                dispatch(updateProductEditing(null));
                                                updatePrice(0);
                                                updateQuantity(0);
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="buttonCol"></td>
                                    <td className="buttonCol">
                                        <Button
                                            className="button"
                                            id="red-update-button"
                                            onClick={() => {
                                                updateQuantity(0);
                                                updatePrice(0);
                                                dispatch(updateProductEditing(product.name));
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </td>
                                </>
                            )}
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
}
