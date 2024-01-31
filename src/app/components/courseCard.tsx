import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
    <Card
      sx={{
        borderRadius: '5px',
        maxWidth: 345,
        boxShadow: 8,
        background: "#262626",
        color: "white",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "white" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "white" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <BootstrapButton
          disableRipple
          variant="contained"
          onClick={() => {}}
          sx={{
            width: '100%',
            color: "#262626",
            boxShadow: 5,
            background: "#FFD700",
            "&:hover": {
              backgroundColor: "#FFEB3B",
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
