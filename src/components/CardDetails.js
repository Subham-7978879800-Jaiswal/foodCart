import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";

const CardDetailItem = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      {data.qnty !== 0 && (
        <>
          <section className="container mt-3">
            <div className="iteamsdetails">
              <div className="items_img">
                <img alt={"YOUR-ORDER"} src={data.imgdata} />
              </div>

              <div className="details">
                <Table>
                  <tr>
                    <td>
                      <p>
                        <div>
                          <strong>Restaurant</strong>
                        </div>
                        {data.rname}
                      </p>
                      <p>
                        <strong>Price</strong> : {data.price}
                      </p>
                      <p>
                        <strong>Dishes</strong> : England Chicken
                      </p>
                      <p>
                        <strong>Total</strong> :₹ {data.price * data.qnty}
                      </p>
                      <div
                        className="mt-5 d-flex justify-content-between align-items-center"
                        style={{
                          width: 100,
                          cursor: "pointer",
                          background: "#ddd",
                          color: "#111",
                        }}
                      >
                        <span
                          onClick={() =>
                            dispatch(cartActions.removeFromCart(data))
                          }
                          style={{ fontSize: 24 }}
                        >
                          -
                        </span>
                        <span style={{ fontSize: 22 }}>{data.qnty}</span>
                        <span
                          onClick={() => dispatch(cartActions.addToCart(data))}
                          style={{ fontSize: 24 }}
                        >
                          +
                        </span>
                      </div>
                    </td>
                    <td>
                      <p>
                        <strong>Rating :</strong>
                        <span
                          style={{
                            background: "green",
                            color: "#fff",
                            padding: "2px 5px",
                            borderRadius: "5px",
                          }}
                        >
                          {data.rating} ★
                        </span>
                      </p>
                      <p>
                        <strong>Order Review :</strong>
                        <span> {data.somedata} </span>
                      </p>
                      <p>
                        <strong>Remove :</strong>
                        <span>
                          <i
                            className="fas fa-trash"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                          ></i>
                        </span>
                      </p>
                    </td>
                  </tr>
                </Table>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

const CardsDetails = () => {
  const cartData = useSelector((state) => state.data);
  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>
        {cartData.map((data, index) => (
          <CardDetailItem key={index} data={data}></CardDetailItem>
        ))}
      </div>
    </>
  );
};

export default CardsDetails;
