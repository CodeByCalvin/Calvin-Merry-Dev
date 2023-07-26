import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import "../css/projectCard.css";
import { createTheme } from "@mui/material/styles";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";

export default function ProjectCard({ projects }) {
  const { title, description, image, repo, demo, techStack } = projects;
  return (
    <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gridColumn: "span 2",
          flexDirection: "column",
          flexWrap: "wrap",
          border: "none",
          boxShadow: "0 7px 30px -10px rgba(150,170,180,0.5)",
          overflow: "hidden",
          padding: "2rem 0rem 2rem 0rem",
          gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: "translateY(-2px)",
          },
          "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
        })}
      >
        <div>
          <Typography level="h2" sx={{ fontSize: "2.4rem" }} mb={0.5}>
            <Link
              href="#container-responsive"
              overlay
              underline="none"
              sx={{
                color: "text.primary",
                "&.Mui-focusVisible:after": { outlineOffset: "-4px" },
                fontSize: "2.6rem",
                fontWeight: "700",
                marginBottom: "1.4rem",
              }}
            >
              {title}
            </Link>
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.6rem",
          }}
        >
          {techStack.map((tech) => {
            return (
              <Chip
                key={tech.name}
                variant="outlined"
                className="tech-btn"
                sx={{
                  pointerEvents: "none",
                  color: "white",
                  backgroundColor: tech.colour,
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "12px",
                  border: "none",
                }}
              >
                <div className="btn-content">
                  <img src={tech.logo} alt="" className="tech-logo" />
                  {tech.name}
                </div>
              </Chip>
            );
          })}
        </div>
        <img className="project-img" src={image} alt="" />

        <div className="description">{description}</div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: 200,
          }}
        >
          <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}></Box>
        </Box>
        <CardOverflow
          sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}
        >
          <div className="cta-group">
            <a href="#" className="btn-card-cta">
              Live Demo
            </a>
            <a
              href="https://github.com/CodeByCalvin/Calvin-Merry-Developer-Portfolio"
              className="btn-card-cta"
            >
              GitHub
            </a>
          </div>
        </CardOverflow>
      </Card>
    </Box>
  );
}
