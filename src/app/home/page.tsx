"use client";
import * as React from "react";
import ResponsiveAppBar from "./header";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Container } from "@mui/material";
import CourseCard from "../components/courseCard";

export default function Home() {
  return (
    <div className="Home">
      <ResponsiveAppBar />
      <Card
        sx={{
          background: "transparent",
          padding: 4,
          marginLeft: 6,
        }}
      >
        <Typography
          gutterBottom
          variant="h1"
          fontSize="40px"
          sx={{
            fontWeight: 600,
            color: "white",
          }}
        >
          Módulos
        </Typography>
        <CourseCard
          title="Fundamentos"
          image="/curso-fundamentos.jpg"
          description="Descrição do curso é feito aqui"
        />
      </Card>
    </div>
  );
}
