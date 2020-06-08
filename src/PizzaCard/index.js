import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@material-ui/core";
import { string, arrayOf, number } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Price from "../Price";

const imageSize = 175;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 175,
    margin: `${theme.spacing(2)}px auto`,
  },
}));

export default function PizzaCard({ name, ingredients, price, imageUrl }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {imageUrl && (
        <CardMedia
          component="img"
          alt={name}
          height={imageSize}
          image={imageUrl}
          // image={`https://picsum.photos/${imageSize * 2}`}
          title={name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {ingredients.join(", ")}
        </Typography>

        {/* <Typography variant="h4" component="p">
          {price}
        </Typography> */}
        <Typography variant="h4" component="p">
          <Price value={price} />
        </Typography>
      </CardContent>
    </Card>
  );
}

PizzaCard.prototype = {
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
  id: number,
};

// PizzaCard.defaultProps;
// imageUrl: null;
