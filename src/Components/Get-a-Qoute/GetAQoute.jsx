import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import responsive from "../../styles/responsive.module.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Select, FormControl, InputLabel } from "@mui/material";

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
      fontSize: "1.5rem",
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
