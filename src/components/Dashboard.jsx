import { useLocation } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardContent from "../pages/DashboardContent";
import Preview from "../pages/Preview";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "preview",
    title: "Preview",
    icon: <PreviewIcon />,
  },
  {
    segment: "edit",
    title: "Edit",
    icon: <EditIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent() {
  const location = useLocation();

  const getContent = (pathname) => {
    switch (pathname) {
      case "/":
        return <DashboardContent />;
      case "/preview":
        return <Preview />;
      case "/edit":
        return "Start editing your resume";
      default:
        return "Page not found";
    }
  };

  return <div>{getContent(location.pathname)}</div>;
}

function Dashboard() {
  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{ title: "Resume Builder" }}
      theme={demoTheme}
    >
      <DashboardLayout>
        <DemoPageContent />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

export default Dashboard;
