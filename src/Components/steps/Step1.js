import React, { useState } from "react";
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

export default function Step1({ state, handleOnChange, handleNext }) {
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
      <Typography variant="h5">Compleate your profile</Typography>
      <br />
      <Typography variant="p">
        your personal details are important to match a perferct partner for you
      </Typography>
      <br />
      <br />
      <br />
      <TextField
        label="First name"
        variant="outlined"
        name="firstName"
        fullWidth
        size="small"
        value={state.data.first_name}
        onChange={handleOnChange}
        style={{ marginBottom: 20 }}
        placeholder="Please enter your first name"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        label="Last name"
        variant="outlined"
        name="lastName"
        fullWidth
        size="small"
        value={state.data.last_name}
        onChange={handleOnChange}
        style={{ marginBottom: 20 }}
        placeholder="Please enter your Last name"
        InputLabelProps={{
          shrink: true
        }}
      />

      <TextField
        id="standard-select-currency"
        fullWidth
        select
        label="Gender"
        value={state.data.gender}
        size="small"
        //onChange={handleOnChange}
        style={{ marginBottom: 20 }}
        variant="outlined"
        placeholder="Please enter your Last name"
        InputLabelProps={{
          shrink: true
        }}
      >
        {gender.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="standard-select-currency"
        fullWidth
        select
        label="Relationship Status"
        value={state.data.relationshiop}
        size="small"
        //onChange={handleOnChange}
        style={{ marginBottom: 20 }}
        variant="outlined"
        placeholder="Please enter your Last name"
        InputLabelProps={{
          shrink: true
        }}
      >
        {relationship.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <hr />
      <br />
      <Typography variant="subtitle1">Details about your location</Typography>
      <br />

      <TextField
        id="standard-select-currency"
        fullWidth
        select
        label="Country of origin"
        value={state.data.relationshiop}
        size="small"
        //onChange={handleOnChange}
        style={{ marginBottom: 20 }}
        variant="outlined"
        placeholder="Please enter your Last name"
        InputLabelProps={{
          shrink: true
        }}
      >
        {relationship.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="standard-select-currency"
        fullWidth
        select
        label="Australia residence status"
        value={state.data.relationshiop}
        size="small"
        //onChange={handleOnChange}
        style={{ marginBottom: 20 }}
        variant="outlined"
        placeholder="Please enter your Last name"
        InputLabelProps={{
          shrink: true
        }}
      >
        {relationship.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

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
