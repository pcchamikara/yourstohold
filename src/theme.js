import { createTheme } from "@material-ui/core";
import { deepPurple, amber } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F97316",
      contrastText: "#fff"
    },
    secondary: {
      main: amber[500],
      contrastText: deepPurple[900]
    }
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "60px",
      lineHeight: "64px"
    },
    h2: {
      fontSize: "48px",
      lineHeight: "56px"
    },
    h3: {
      fontSize: "40px",
      lineHeight: "48px"
    },
    h4: {
      fontSize: "32px",
      lineHeight: "36px"
    },
    h5: {
      fontSize: "24px",
      lineHeight: "28px"
    },
    h6: {
      fontSize: "20px",
      lineHeight: "24px"
    }
  }
});

theme.props = {
  MuiButton: {
    disableElevation: true
  },
  MuiInputLabel: {
    shrink: true,
    focused: false
  },
  MuiInput: {
    disableUnderline: true
  },
  MuiLink: {
    color: "#F97316"
  }
};

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: "4px",
      padding: "16px 36px",
      fontWeight: 600,
      lineHeight: "28px",
      fontSize: "18px"
    },
    containedPrimary: {
      background: "linear-gradient(270deg, #FFB905 0%, #FF9900 100%)",

      "&:hover": {
        backgroundColor: amber[600],
        color: deepPurple[900]
      }
    }
  },
  MuiInput: {
    root: {
      top: theme.spacing(2),
      border: "1px solid #D1D5DB",
      padding: theme.spacing(1),
      borderRadius: "4px"
    }
  },
  MuiInputLabel: {
    root: {
      color: "#374151",
      fontSize: "20px"
    }
  }
};

export default theme;
