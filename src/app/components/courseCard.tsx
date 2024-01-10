import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { BootstrapButton } from "./bootstrapButton";

interface CourseCardProps {
  title: string;
  image: string;
  description: string;
}

export default function CourseCard({
  title,
  image,
  description,
}: CourseCardProps) {
  return (
    <Card sx={{ maxWidth: 345, background: '#262626', color: 'white' }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white'}}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <BootstrapButton
          disableRipple
          variant="contained"
          onClick={() => {}}
          sx={{
            color: "black",
            boxShadow: 5,
            background: "yellow",
            "&:hover": {
              backgroundColor: "#dddd15",
            },
            margin: 1,
          }}
        >
          Entrar
        </BootstrapButton>
      </CardActions>
    </Card>
  );
}
