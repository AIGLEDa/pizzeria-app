import React from "react";
import PizzaCard from "../PizzaCard";
import { shape, arrayOf, func } from "prop-types";
import { Typography, Grid } from "@material-ui/core";
import { isNilOrEmpty } from "ramda-adjunct";

export default function PizzaList({ data, addToCart }) {
  if (isNilOrEmpty(data))
    return (
      <Typography variant="body1" component="p">
        Pas de pizza en ce moment
      </Typography>
    );

  return (
    <Grid container justify="space-around">
      {data.map(({ id, name, ingredients, imageUrl, price }) => (
        <Grid key={id} item xs={6}>
          <PizzaCard
            key={id}
            name={name}
            ingredients={ingredients}
            imageUrl={imageUrl}
            price={price}
            addToCart={addToCart}
          />
        </Grid>
      ))}
    </Grid>
  );
}

PizzaList.protoTypes = {
  data: arrayOf(shape(PizzaCard.protoTypes)),
  addToCart: func,
};

PizzaList.defaultProps = {
  date: [],
  addToCart: Function.protoTypes,
};
