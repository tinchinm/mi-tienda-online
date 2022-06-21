import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Item.css";

export default function ActionAreaCard({ info }) {
  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={info.url}
            alt="imagen"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
