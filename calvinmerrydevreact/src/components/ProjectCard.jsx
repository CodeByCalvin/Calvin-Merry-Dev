import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import "../css/projectCard.css";

export default function ProjectCard({ projects }) {
  const {
    title,
    description,
    image,
    repo,
    demo,
    techStack,
    projectIncomplete,
  } = projects;
  return (
    <Box sx={{ minHeight: 350 }}>
      <Card
        className={projectIncomplete ? "blur-card" : null}
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
        {projectIncomplete ? (
          <span
            style={{
              fontSize: "2.3rem",
              color: "#c92a2a",
              fontWeight: "600",
              marginBottom: "1.8rem",
            }}
            className="project-status"
          >
            Coming soon!
          </span>
        ) : null}
        <div
          className="tech-stack-container"
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
                  backgroundImage: `linear-gradient(45deg, ${tech.colour}, ${tech.colourLight})`,
                  color: "white",
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
        <img
          className={projectIncomplete ? "blur-img project-img" : "project-img"}
          src={image}
          alt=""
        />

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
            <a
              href={demo}
              className={
                projectIncomplete ? "btn-card-cta blur-btn" : "btn-card-cta"
              }
            >
              Live Demo
            </a>
            <a href={repo} className="btn-card-cta">
              GitHub
            </a>
          </div>
        </CardOverflow>
      </Card>
    </Box>
  );
}
