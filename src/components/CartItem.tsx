import { Button } from "@mui/material";
import styles from "./CartItem.module.css";
import useReducerContext from "../hooks/useReducerContext";
import { getQuantity, isInCart } from "../utilities/functions";
import { Link } from "react-router-dom";

type CartItemsProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  desc: string;
  category: string;
};

const CartItem = ({
  id,
  title,
  price,
  image,
  desc,
  category,
}: CartItemsProps) => {
  const { state, dispatch } = useReducerContext();

  console.log({ state });
  return (
    <div className={styles.container}>
      <img
        src={image}
        style={{ width: "250px", height: "250px", objectFit: "cover" }}
      />
      <h3>{title}</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.priceContainer}>
          <span>${price}</span>
        </div>
        <Link to={`/store/${category}/${id}`}>Details</Link>
      </div>
      {isInCart(state, id) ? (
        <div className={styles.innerButtons}>
          <Button
            onClick={() =>
              dispatch({
                type: "INCREASE",
                payload: { id, title, price, image, desc, category },
              })
            }
            variant="outlined"
          >
            +
          </Button>
          <span>{getQuantity(state, id)}</span>
          {getQuantity(state, id) > 1 ? (
            <Button
              onClick={() =>
                dispatch({
                  type: "DECREASE",
                  payload: { id, title, price, image, desc, category },
                })
              }
              variant="outlined"
            >
              -
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "REMOVE_ITEM",
                  payload: { id, title, price, image, desc, category },
                })
              }
              variant="outlined"
            >
              Remove
            </Button>
          )}
        </div>
      ) : (
        <Button
          onClick={() =>
            dispatch({
              type: "ADD_ITEM",
              payload: { id, title, price, image, desc, category },
            })
          }
          variant="outlined"
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default CartItem;
