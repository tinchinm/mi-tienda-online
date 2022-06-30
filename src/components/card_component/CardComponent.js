import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

//  Components
import ItemCount from "../item_count/ItemCount";

const CardComponent = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`/itemDetail/${item.id}`}>
          <CardMedia 
            component="img" 
            image={item.image} 
            alt={item.name} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            $ {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>

      <ItemCount item={item} />
    </Card>
  );
};
export default CardComponent;
