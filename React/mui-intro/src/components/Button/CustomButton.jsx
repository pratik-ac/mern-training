import { Button, ButtonBase, IconButton } from "@mui/material";
import React from "react";
import "./button.styles.css";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

const CustomButton = () => {
  return (
    <div style={{ marginBottom: "5rem" }}>
      <section className="button-section" id="variant-section">
        <h1>Button Variants</h1>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </section>

      <section className="button-section" id="color-section">
        <h1>Button Color</h1>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="error" variant="contained">
          Error
        </Button>
        <Button color="warning" variant="contained">
          Warning
        </Button>
        <Button color="info" variant="contained">
          Info
        </Button>
        <Button
          sx={{ background: "#D91656", color: "#FFB200" }}
          variant="contained"
        >
          Custom
        </Button>
      </section>

      <section className="button-section">
        <h1>Button size</h1>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </section>

      <section className="button-section">
        <h1>Ic on button / button with icon</h1>
        <Button
          variant="contained"
          color="success"
          endIcon={<CreateRoundedIcon />}
        >
          edit product
        </Button>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteRoundedIcon />}
          onClick={() => {
            console.log("Deleted");
            alert("Deleted");
          }}
        >
          delete product
        </Button>
      </section>

      <section className="button-section">
        <h1>Icon button</h1>
        <IconButton color="error">
          <DeleteRoundedIcon />
        </IconButton>
      </section>
    </div>
  );
};

export default CustomButton;
