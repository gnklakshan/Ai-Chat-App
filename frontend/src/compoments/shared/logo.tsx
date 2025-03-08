import { Margin } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        marginTop: "6px",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <Link
        to="/"
        style={{ display: "flex", alignItems: "center", gap: "8px" }}
      >
        <img
          src="/chatbot.png"
          alt="logo"
          style={{ width: "30px", height: "30px" }}
          className="image-inverted"
        />
        <Typography
          sx={{
            display: { md: "block", sm: "none", xs: "none" },
            Margin: "auto",
            fontWeight: "800",
            textShadow: "2px 2px 20px #000000",
          }}
        >
          <span style={{ fontSize: "18px" }}>Chat</span>-App
        </Typography>
      </Link>
    </div>
  );
};

export default logo;
