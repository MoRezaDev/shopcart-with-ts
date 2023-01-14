import { Button, Drawer, Typography } from "@mui/material";
import React from "react";

import useReducerContext from "../hooks/useReducerContext";
import useSizeWidth from "../hooks/useSizeWidth";
import DrawerCart from "./DrawerCart";

type DrawerMenuProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const DrawerMenu = ({ isDrawerOpen, setIsDrawerOpen }: DrawerMenuProps) => {
  const { state, dispatch } = useReducerContext();
  const size = useSizeWidth();

  console.log(state);
  console.log({ size });
  return (
    <Drawer
      open={isDrawerOpen}
      anchor="right"
      onClose={() => setIsDrawerOpen(false)}
    >
      {state.checkout ? (
        <div
          style={{
            width: size > 480 ? "400px" : "90vw",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          Thank You
        </div>
      ) : (
        <div
          style={{
            width: size > 480 ? "400px" : "90vw",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <Typography variant="h4">Shopping Cart</Typography>
          <div
            style={{ width: "100%", height: "1px", backgroundColor: "silver" }}
          ></div>
          {state.selectedItems.length > 0 ? (
            <div>
              {state.selectedItems.map((item) => (
                <DrawerCart {...item} />
              ))}
              <div
                style={{
                  marginTop: "1rem",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid silver",
                  padding: ".25rem",
                }}
              >
                <h3>Total Price:</h3>
                <h4
                  style={{
                    backgroundColor: "#32CD32",
                    color: "#fff",
                    padding: ".15rem",
                    borderRadius: ".3rem",
                  }}
                >
                  ${state.total}
                </h4>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  onClick={() => dispatch({ type: "CHECKOUT" })}
                  variant="outlined"
                >
                  CHECKOUT
                </Button>
                <Button
                  onClick={() => dispatch({ type: "CLEAR" })}
                  variant="outlined"
                >
                  CLEAR
                </Button>
              </div>
            </div>
          ) : (
            <h3>Cart is Empty</h3>
          )}
        </div>
      )}
    </Drawer>
  );
};

export default DrawerMenu;
