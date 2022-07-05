import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ItemDetailCard({info}) {
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={info.image}
          alt={info.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Descripción: {info.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: {info.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock: {info.stock}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}