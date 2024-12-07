/* eslint-disable react/no-children-prop */
import FixedContainer from "../components/Container";
import { Box, Grid2 as Grid, Typography, Button, Paper } from "@mui/material";

function DashboardPageContent() {
  return (
    <Grid
      container
      spacing={4}
      alignItems="center"
      justifyContent="center"
      className="dashboard-page-cont"
      height="70vh"
    >
      <Grid item xs={12} md={6}>
        <Typography variant="subtitle1" color="textSecondary">
          • 42,871 resumes created today
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 2 }}>
          The professional resume builder
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "textSecondary" }}>
          Only 2% of resumes win. Yours will be one of them. Let’s build you a
          resume that works.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3, px: 4, py: 1 }}
        >
          Create my resume
        </Button>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              39%
            </Typography>
            <Typography variant="body2">more likely to get hired</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              color="warning.main"
              sx={{ fontWeight: "bold" }}
            >
              8%
            </Typography>
            <Typography variant="body2">
              better pay with your next job
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Resume Preview Section */}
      <Grid item xs={12} md={6}>
        {/* Simulating the resume preview */}

        {/* Placeholder for resume */}
        <Paper
          elevation={2}
          sx={{
            height: 500,
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="../src/assests/img/resume.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Optional for rounded corners
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

function DashboardContent() {
  return (
    <div>
      <FixedContainer>{DashboardPageContent()}</FixedContainer>
    </div>
  );
}
export default DashboardContent;
