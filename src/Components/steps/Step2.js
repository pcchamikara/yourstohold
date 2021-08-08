import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  DatePicker,
  MobileDatePicker,
  DesktopDatePicker,
  Typography
} from "@material-ui/core";

export default function Step2({
  state,
  handleOnChange,
  handleNext,
  handlePrev
}) {
  console.log(state);
  const gender = [
    {
      value: "male",
      label: "Male"
    },
    {
      value: "female",
      label: "Female"
    },
    {
      value: "Other",
      label: "other"
    }
  ];

  const relationship = [
    {
      value: "Married",
      label: "married"
    },
    {
      value: "unmarried",
      label: "Un Married"
    },
    {
      value: "devorced",
      label: "Devorced"
    }
  ];

  const [value, setValue] = useState(new Date());
  return (
    <>
      <Button size="small" onClick={handlePrev}>
        <ArrowBackIosIcon />
        Back
      </Button>
      <br />
      <Typography variant="h5">More details about you</Typography>
      <br />
      <Typography variant="p">
        your personal details are important to match a perferct partner for you
      </Typography>
      <br />
      <br />
      <br />

      <Grid>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleNext}
        >
          Save and continue
        </Button>
      </Grid>
    </>
  );
}
