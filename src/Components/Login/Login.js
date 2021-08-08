import {
  TextField,
  Grid,
  Box,
  Button,
  Divider,
  Checkbox
} from "@material-ui/core";
import React from "react";
import image1 from "../../images/image1.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-form">
      <div className="login-left">
        <div className="img-wrapper">
          <img src={image1}></img>
        </div>
      </div>
      <div className="login-right">
        <div className="login-right-wrapper">
          <div className="header">
            <h3> Welcome to liveheart </h3>
            <span> Already have an account ? </span>{" "}
            <Link href="#" color="primary">
              Login
            </Link>
          </div>
          <Box mb={5} mt={5}>
            <Divider />
          </Box>
          <Grid item xs="12" mb={3}>
            <Box mb={5}>
              <TextField
                required
                placeholder="Enter your emil address"
                label="Email address"
                fullWidth
              />
            </Box>
          </Grid>
          <Grid item xs="12">
            <Box mb={5}>
              <TextField
                required
                label="Password "
                placeholder="Enter your password"
                type="password"
                fullWidth
              />
            </Box>
          </Grid>
          <Checkbox /> I agree to{" "}
          <Link href="#" color="primary">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="#" color="primary">
            Privacy Policy
          </Link>
          .<Box mb={5}></Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            href="#contained-buttons"
          >
            Create an Account
          </Button>
          <Box mb={5} mt={5} className="devider-text-wrap">
            <Divider />
            <span className="devider-text">Or</span>
          </Box>
        </div>
      </div>
    </div>
  );
}
