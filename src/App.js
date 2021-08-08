import FormComponent from "./Components/formcomponent";
import "./styles.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Preferences from "./Pages/Preferences";
import Dashboard from "./Pages/Dashboard";
import Login from "./Components/Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

export default function App() {
  return (
    <div className="">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <FormComponent />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
