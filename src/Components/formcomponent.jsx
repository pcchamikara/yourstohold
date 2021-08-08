import React, { Component } from "react";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import { v4 as uuidv4 } from "uuid";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import {
  Box,
  Grid,
  Paper,
  withStyles,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  alternativeLabel
} from "@material-ui/core";

const drawerWidth = 240;

const Styles = (theme) => ({
  root: {
    display: "flex"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
});

const steps = [
  { label: "Persoanal details", subTitle: "Step 1" },
  { label: "More about you", subTitle: "Step 2" },
  { label: "Payment", subTitle: "Step 3" }
];

class PermanentDrawerLeft extends Component {
  state = {
    data: {
      firstName: ""
    },
    currentStep: 0
  };

  /*- end stpe -*/

  render() {
    const { classes } = this.props;
    const handleOnChange = ({ target }) => {
      const { data } = this.state;
      data[target.name] = target.value;
      this.setState({ data: data });
      console.log(this.state);
    };

    const renderStep = () => {
      switch (this.state.currentStep) {
        case 0:
          return (
            <Step1
              state={this.state}
              handleOnChange={handleOnChange}
              handleNext={handleNext}
            />
          );
        case 1:
          return (
            <Step2
              state={this.state}
              handleOnChange={handleOnChange}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          );
        case 2:
          return (
            <Step3
              state={this.state}
              handleOnChange={handleOnChange}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          );
        case 3:
          return (
            <>
              <Button size="small" onClick={handlePrev}>
                <ArrowBackIosIcon />
                Back
              </Button>
              "this step not created"
            </>
          );

        default:
          return <h1>No project match</h1>;
      }
    };

    /*- step -*/
    const handleNext = () => {
      let { currentStep } = this.state;
      currentStep = currentStep + 1;
      this.setState({ currentStep });
    };
    const handlePrev = () => {
      let { currentStep } = this.state;
      currentStep = currentStep - 1;
      this.setState({ currentStep });
    };

    return (
      <div className={classes.root}>
        <CssBaseline />

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <Typography variant="subtitle1" align="center">
            Quick and Easy Setup
          </Typography>
          <Stepper
            activeStep={this.state.currentStep}
            alternativeLabel
            orientation="vertical"
          >
            {steps.map((i) => (
              <Step key={uuidv4()}>
                <StepLabel>
                  <Typography variant="overline">{i.subTitle}</Typography>
                  <br />
                  {i.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Drawer>
        <main className={classes.content}>
          <Grid container className="formContainer">
            <Grid item sm={5} xs={12}>
              <form className="form">{renderStep()}</form>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}
export default withStyles(Styles)(PermanentDrawerLeft);
