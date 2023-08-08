import React, { useState, useEffect } from "react";
import { TextField, MenuItem } from "@mui/material";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import responsive from "../../styles/responsive.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Select, FormControl, InputLabel } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function GetAQoute() {
  const style = {
    box: {
      marginY: "6rem",
    },
    width: {
      width: "100%",
    },
    space: {
      marginY: "2rem",
    },
    butn: {
      marginY: "1rem",
      fontSize: "1rem",
      width: "100%",
      backgroundColor: "#1F588C",
      paddingY: "0.7rem",
    },
  };
  const [selectedHour, setSelectedHour] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedAmPm, setSelectedAmPm] = useState("AM");

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleAmPmChange = (event) => {
    setSelectedAmPm(event.target.value);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const commercialServicesOption = [
    "Office renovation and expansion",
    "Workspace Addition in Commercial Buildings",
    "Commercial Remodeling",
    "Warehouse Remodel",
    "Office Interior and Exterior",
    "Conference Rooms Renovations and Expansion",
  ];
  const residentialServicesOption = [
    "Roofs",
    "Floors",
    "Siding",
    "Retaining Walls",
    "Painting",
    "Kitchen and Bathroom Renovations",
    "Basement Remodeling",
    "Decks",
    "Crown Molding",
    "Attic Renovations",
    "Garage Renovations",
    "Building Sheds",
    "Room Expansions",
    "Closet Expansions",
    "Carpentry",
    "Patios",
    "Pergolas",
  ];
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxes((prevSelected) => [...prevSelected, checkboxValue]);
    } else {
      setSelectedCheckboxes((prevSelected) =>
        prevSelected.filter((value) => value !== checkboxValue)
      );
    }
  };

  const [selectedCheckboxesRes, setSelectedCheckboxesRes] = useState([]);

  const handleCheckboxChangeRes = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedCheckboxesRes((prevSelected) => [
        ...prevSelected,
        checkboxValue,
      ]);
    } else {
      setSelectedCheckboxesRes((prevSelected) =>
        prevSelected.filter((value) => value !== checkboxValue)
      );
    }
  };

  //Data that has to be sent in api below

  const commercialData = selectedCheckboxes.join(", ");
  const residentialData = selectedCheckboxesRes.join(", ");

  return (
    <Box>
      <Container className={responsive.container}>
        <Box sx={style.box}>
          <Box sx={style.formBox}>
            <Grid container columnSpacing={3}>
              <Grid item lg={6}>
                <Box sx={style.space}>
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    sx={style.width}
                  />
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box sx={style.space}>
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    sx={style.width}
                  />
                </Box>
              </Grid>
              <Grid item lg={6}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={style.width}
                />
              </Grid>
              <Grid item lg={6}>
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  sx={style.width}
                />
              </Grid>
              <Grid item lg={6}>
                <Box sx={style.space}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box sx={style.space}>
                  <TextField
                    select
                    label="Select Hour"
                    value={selectedHour}
                    onChange={handleHourChange}
                    style={{ margin: "10px" }}
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                      <MenuItem key={hour} value={hour}>
                        {hour}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    select
                    label="Select Month"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    style={{ margin: "10px" }}
                  >
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(
                      (month) => (
                        <MenuItem key={month} value={month}>
                          {month}
                        </MenuItem>
                      )
                    )}
                  </TextField>

                  <TextField
                    select
                    label="AM/PM"
                    value={selectedAmPm}
                    onChange={handleAmPmChange}
                    style={{ margin: "10px" }}
                  >
                    <MenuItem value="AM">AM</MenuItem>
                    <MenuItem value="PM">PM</MenuItem>
                  </TextField>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <FormControl variant="outlined" sx={{ width: "60%" }}>
                  <InputLabel>Select an Service</InputLabel>
                  <Select
                    value={selectedOption}
                    onChange={handleChange}
                    label="Select an Service"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Commercial Service">
                      Commercial Service
                    </MenuItem>
                    <MenuItem value="Residential Service">
                      Residential Service
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {selectedOption === "Commercial Service" && (
                <Grid item lg={6}>
                  <Box sx={style.checkBoxes}>
                    {commercialServicesOption.map((options) => {
                      return (
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={options}
                                checked={selectedCheckboxes.includes(options)}
                                onChange={handleCheckboxChange}
                              />
                            }
                            label={options}
                          />
                        </FormGroup>
                      );
                    })}
                  </Box>
                </Grid>
              )}
              {selectedOption === "Residential Service" && (
                <Grid item lg={6}>
                  <Box sx={style.checkBoxes}>
                    {residentialServicesOption.map((options) => {
                      return (
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value={options}
                                checked={selectedCheckboxesRes.includes(
                                  options
                                )}
                                onChange={handleCheckboxChangeRes}
                              />
                            }
                            label={options}
                          />
                        </FormGroup>
                      );
                    })}
                  </Box>
                </Grid>
              )}
            </Grid>
            <Button variant="contained" sx={style.butn}>
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default GetAQoute;
