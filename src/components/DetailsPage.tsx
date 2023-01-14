import { Container, Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import data from "../data/data.json";

type objType = {
  id: number;
  title: string;
  image: string;
  desc: string;
  price: number;
};
type indexSignatureType = {
  [index: string]: objType[];
};

const DetailsPage = () => {
  const { category = "", id = 0 } = useParams();
  const data1: indexSignatureType = data;

  return (
    <Container
      sx={{
        marginTop: "90px",
        border: "1px solid silver",
        borderRadius: ".5rem",
        padding: ".75rem",
      }}
      maxWidth="lg"
    >
      <Grid container>
        <Grid item md={6} xs={12}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <h2>&#8592;</h2>
            <h4 style={{ position: "relative", top: "2px" }}>Back to home</h4>
          </Link>
          <img
            style={{ width: "300px", height: "300px", objectFit: "cover" }}
            src={data1[category][Number(id)].image}
          />
          <div>
            <h3>{data1[category][Number(id)].title}</h3>
            <span
              style={{
                backgroundColor: "rgb(33, 200, 33)",
                width: "fit-content",
                padding: "0.2rem 0.5rem",
                borderRadius: "0.2rem",
                color: "#fff",
                margin: "1rem 0",
              }}
            >
              ${data1[category][Number(id)].price}
            </span>
          </div>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p>{category !== undefined && data1[category][Number(id)].desc}</p>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailsPage;
