import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";

function FixedContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="1280px">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", flexGrow: 1 }}>
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}

FixedContainer.propTypes = {
  children: PropTypes.node,
};

export default FixedContainer;
