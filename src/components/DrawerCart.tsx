import { Button } from "@mui/material";
import styles from "./DrawerCart.module.css";
import useReducerContext from "../hooks/useReducerContext";

type DrawerProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  desc: string;
  quantity: number;
  category: string;
};

const DrawerCart = ({
  id,
  image,
  title,
  price,
  desc,
  quantity,
  category,
}: DrawerProps) => {
  const { dispatch } = useReducerContext();
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img
          src={image}
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
        <p>
          {quantity}
          <span>x</span>
        </p>
        <h5 style={{ marginLeft: "1.5rem" }}>${quantity * price}</h5>
      </div>
      <Button
        onClick={() =>
          dispatch({
            type: "REMOVE_ITEM",
            payload: { id, price, title, image, desc, category },
          })
        }
        variant="outlined"
      >
        X
      </Button>
    </div>
  );
};

export default DrawerCart;
