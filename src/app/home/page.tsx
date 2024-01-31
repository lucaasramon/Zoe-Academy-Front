"use client";
import * as React from "react";
import ResponsiveAppBar from "./header";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Container } from "@mui/material";
import CourseCard from "../components/courseCard";

export default function Home() {
  return (
    <div style={{padding: "40px"}}>
      
      
        <Typography
          gutterBottom
          variant="h1"
          fontSize="40px"
          sx={{
            fontWeight: 600,
            color: "#262626",
          }}
        >
          Módulos
        </Typography>
        <CourseCard
          title="Fundamentos"
          image="/curso-fundamentos.jpg"
          description="Descrição do curso é feito aqui"
        />
      
    </div>
  );
}
