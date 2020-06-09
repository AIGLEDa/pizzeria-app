import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
} from "@material-ui/core";
import { string, arrayOf, number, func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Price from "../Price";

const imageSize = 175;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 175,
    margin: `${theme.spacing(2)}px`,
  },
  button: {
    flexGrow: 1,
  },
}));

export default function PizzaCard({
  name,
  ingredients,
  price,
  imageUrl,
  addToCart,
}) {
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
      <CardActions>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={() => {
            addToCart(name);
          }}
        >
          Ajouter
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}

PizzaCard.protoTypes = {
  name: string.isRequired,
  ingredients: arrayOf(string).isRequired,
  price: number.isRequired,
  imageUrl: string,
  id: number,
  onClick: func,
};

// PizzaCard.defaultProps;
// imageUrl: null;
