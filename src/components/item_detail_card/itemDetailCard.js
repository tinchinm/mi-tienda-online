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
          image={info.imagen}
          alt={info.personaje}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.personaje}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Apodo: {info.apodo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Casa de Hogwarts: {info.casaDeHogwarts}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Actor que lo Interpreta: {info.interpretado_por}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}