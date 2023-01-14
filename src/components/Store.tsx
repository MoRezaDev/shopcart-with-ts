import { Container, Grid } from "@mui/material";
import styles from "./Store.module.css";
import CartItem from "./CartItem";

import useDataContext from "../hooks/useDataContext";

const Store = () => {
  // const items = data;

  const { data } = useDataContext();
  return (
    <div className={styles.rootContainer}>
      <Container
        className={styles.container}
        maxWidth="lg"
        sx={{ marginTop: "90px" }}
      >
        <h1 style={{ marginBottom: "1rem" }}>Laptops</h1>
        <Grid container spacing={2}>
          {data?.laptop.map((laptop) => (
            <Grid key={laptop.id} item sm={6} xs={12} md={4} lg={3}>
              <CartItem {...laptop} />
            </Grid>
          ))}
        </Grid>
        <h1 style={{ marginBottom: "1rem", marginTop: "4rem" }}>Mobiles</h1>
        <Grid container spacing={2}>
          {data?.mobile.map((laptop) => (
            <Grid key={laptop.id} item sm={6} xs={12} md={4} lg={3}>
              <CartItem {...laptop} />
            </Grid>
          ))}
        </Grid>
        <h1 style={{ marginBottom: "1rem", marginTop: "4rem" }}>Sepakers</h1>
        <Grid container spacing={2}>
          {data?.speaker.map((laptop) => (
            <Grid key={laptop.id} item sm={6} xs={12} md={4} lg={3}>
              <CartItem {...laptop} />
            </Grid>
          ))}
        </Grid>
        <h1 style={{ marginBottom: "1rem", marginTop: "4rem" }}>Headphones</h1>
        <Grid container spacing={2}>
          {data?.headphone.map((laptop) => (
            <Grid key={laptop.id} item sm={6} xs={12} md={4} lg={3}>
              <CartItem {...laptop} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Store;
