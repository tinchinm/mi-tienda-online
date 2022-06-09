import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardComponent = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.img}
          alt="imagen descriptiva"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.producto}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descripcion}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CardComponent;