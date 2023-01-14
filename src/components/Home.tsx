import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/material";

import { findInObjects } from "../utilities/functions";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
type SeachQueryType = string;
type ResultObjectSample = {
  id: number;
  title: string;
  image: string;
  price: number;
  desc: string;
  category: string;
};
type ResultFilterType = ResultObjectSample[];

//define inline Styles.......
const SearchInputStyle = {
  width: "100%",
  outline: "none",
  padding: ".6rem",
  fontSize: "1rem",
  border: "none",
};

const SarchInputContainer = {
  width: "100%",
  margin: ".5rem 0",
  border: "1px solid silver",
  borderRadius: ".25rem",
  padding: ".1rem",
  overflow: "auto",
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

const Home = () => {
  const [searchQuery, setSearchQuery] = useState<SeachQueryType>("");
  const [resultFilterQuery, setResultFilterQuery] = useState<ResultFilterType>(
    []
  );
  const [isExpanded, setIsExpanded] = useState(true);

  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setResultFilterQuery(findInObjects(searchQuery));
    searchQuery.length > 0 ? setIsExpanded(true) : setIsExpanded(false);
  }, [searchQuery]);

  console.log(searchQuery);
  console.log(isExpanded);
  console.log({ resultFilterQuery });

  return (
    <Container maxWidth="lg" sx={{ marginTop: "100px" }}>
      <div>
        <h1 style={{ width: "100%", textAlign: "center" }}>
          Shopping Cart Example with Typescript
        </h1>
        <motion.div
          variants={{
            expanded: { height: "13rem" },
            collapsed: { height: "3.1rem" },
          }}
          animate={isExpanded ? "expanded" : "collapsed"}
          transition={containerTransition}
          style={SarchInputContainer}
        >
          <input
            value={searchQuery}
            onChange={onChangeInputHandler}
            style={SearchInputStyle}
            type="text"
            placeholder="search your products"
          />
          {resultFilterQuery.length > 0 && (
            <div style={{ marginTop: "1rem" }}>
              {resultFilterQuery.map((item, idx) => (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  key={idx}
                  to={`/store/${item.category}/${item.id}`}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: `${
                        idx === resultFilterQuery.length - 1
                          ? " none"
                          : "1px solid silver"
                      }`,
                      padding: ".15rem",
                    }}
                  >
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                      src={item.image}
                    />
                    <h4>{item.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      <div
        style={{
          width: "100%",
          border: "1px solid silver",
          borderRadius: ".25rem",
          margin: "2rem 0",
        }}
      >
        <ImageSlider />
      </div>
    </Container>
  );
};

export default Home;
