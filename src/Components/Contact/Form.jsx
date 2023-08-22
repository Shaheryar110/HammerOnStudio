import React, { useState } from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import responsive from "../../styles/responsive.module.css";
import BeforeHeadSmall from "../Commons/BeforeHeadSmall";
import HeadingH2 from "../Commons/HeadingH2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import styles from "../../styles/style.module.css";
import { Poppins } from "next/font/google";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import postContactForm from "../../service/contactusServices";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function Form() {
  const style = {
    spacing: {
      marginY: "5rem",
    },
    paragraph: {
      color: "grey",
      fontSize: "1.1rem",
      marginY: "1.5rem",
    },
    iconBox: {
      marginY: "2rem",
      display: "flex",
      flexDirection: "row",
      gap: "2rem",
      alignItems: "center",
    },
    icon: {
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      backgroundColor: "#2871AE",
      borderRadius: "12px",
    },
    boldAddres: {
      fontSize: "1.3rem",
      color: "#393738",
      fontWeight: 600,
      marginBottom: "0.3rem",
    },
    details: {
      color: "grey",
      fontSize: "1rem",
    },
    size: {
      fontSize: "2rem",
    },
    justify: {
      justifyContent: "space-between",
    },
    btn: {
      fontSize: "1rem",
      padding: "0.5rem",
      color: "white",
      backgroundColor: "#05365F",
      paddingX: "2rem",
      marginY: "1rem",
      border: "2px solid #05365F",
      ":hover": {
        color: "white",
        backgroundColor: "#05365F",
        border: "2px solid #05365F",
      },
      fontFamily: "poppins",
    },
    mainGrid: {
      justifyContent: "space-around",
    },
  };

  const cityData = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  const serviceData = ["commercial service", "residential service"];
  // states of feilds

  //name feild
  const [name, setName] = useState("");

  const nameHandler = (e) => {
    const value = e.target.value;
    setName(value);
  };

  //phone number
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const validatePhoneNumber = (input) => {
    // Regular expression to match US phone numbers in various formats
    const phoneNumberPattern = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?(\d{4})$/;
    return phoneNumberPattern.test(input);
  };
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setPhoneNumber(inputValue);
    setIsValidPhoneNumber(validatePhoneNumber(inputValue));
  };

  //email
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (input) => {
    // Regular expression to validate email addresses
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(input);
  };

  const handleInputChangeEmail = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setIsValidEmail(validateEmail(inputValue));
  };

  //city feild
  const [city, setCity] = useState("");

  const CityHandler = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  //state feild
  const [state, setState] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  //service feild
  const [service, setService] = useState("");

  const handleChangeService = (event) => {
    setService(event.target.value);
  };

  //message feild
  const [message, setMessage] = useState("");

  const MessaegHandler = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  //on submit
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (
      name &&
      isValidPhoneNumber &&
      isValidEmail &&
      city &&
      state &&
      service &&
      message
    ) {
      postContactForm({
        name: name,
        phone: phoneNumber,
        email: email,
        state: state,
        city: city,
        service: service,
        message: message,
      }).then((res) => {
        console.log(res.data);
      });
      setName("");
      setPhoneNumber("");
      setEmail("");
      setCity("");
      setState("");
      setService("");
      setMessage("");
    } else {
      console.log("Invalid  submission");
    }
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.webp" />
        <title>Contact</title>
      </Head>
      <Box>
        <Container className={responsive.container}>
          <Box sx={style.spacing}>
            <Grid container sx={style.mainGrid}>
              <Grid item lg={4}>
                <Box>
                  <BeforeHeadSmall text="INFORMATION" />
                  <HeadingH2 text="Get in Touch" />
                  <Typography sx={style.paragraph}>
                    Want to know more about our home and building renovation
                    services? Connect with us, by writing us a message, or
                    calling us. Our representatives will reach out within 24
                    hours.
                  </Typography>
                  <Box sx={style.mainIconDiv}>
                    <Box sx={style.iconBox}>
                      <Box sx={style.icon}>
                        <LocationOnIcon sx={style.size} />
                      </Box>
                      <Box>
                        <Typography sx={style.boldAddres}>
                          P.O. BOX Address
                        </Typography>
                        <Typography sx={style.details}>
                          74 Brookview Drive
                        </Typography>
                        <Typography sx={style.details}>
                          Monroe, NY 10950
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={style.iconBox}>
                      <Box sx={style.icon}>
                        <MailOutlineIcon sx={style.size} />
                      </Box>
                      <Box>
                        <Typography sx={style.boldAddres}>
                          E-mail us for information
                        </Typography>
                        <Typography sx={style.details}>
                          info@hammeronstudios.com
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={style.iconBox}>
                      <Box sx={style.icon}>
                        <WifiCalling3Icon sx={style.size} />
                      </Box>
                      <Box>
                        <Typography sx={style.boldAddres}>Phone</Typography>
                        <Typography sx={style.details}>
                          (845) 837-2616
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4}>
                <BeforeHeadSmall text="BOOKING FORM" />
                <HeadingH2 text="Send Us Message" />
                <Grid container sx={style.justify} columnSpacing={3}>
                  <Grid item lg={6}>
                    <input
                      className={styles.feildC}
                      placeholder="Name"
                      value={name}
                      onChange={nameHandler}
                      required
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <input
                      className={styles.feildC}
                      placeholder="phone"
                      value={phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>
                  <Grid item lg={12}>
                    <input
                      className={styles.feildC}
                      placeholder="email address"
                      value={email}
                      onChange={handleInputChangeEmail}
                      required
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <input
                      className={styles.feildC}
                      placeholder="City"
                      onChange={CityHandler}
                      value={city}
                      required
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <Box>
                      <FormControl
                        fullWidth
                        sx={{
                          marginTop: "1rem",
                        }}
                      >
                        <Select
                          // hidden={true}
                          // defaultValue="Select"
                          displayEmpty={true}
                          renderValue={(e) => (e ? e : "State")}
                          sx={{
                            backgroundColor: "#408ECD",
                            color: "white",
                            ":focus": { outline: "none", border: "none" },
                          }}
                          labelId="State"
                          value={state}
                          label="State"
                          onChange={handleChange}
                        >
                          {cityData.map((name) => {
                            return <MenuItem value={name}>{name}</MenuItem>;
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item lg={12}>
                    <Box>
                      <FormControl
                        fullWidth
                        sx={{
                          marginTop: "1rem",
                        }}
                      >
                        <Select
                          hidden={true}
                          displayEmpty={true}
                          renderValue={(e) => (e ? e : "Select")}
                          sx={{
                            backgroundColor: "#408ECD",
                            color: "white",
                            ":focus": { outline: "none", border: "none" },
                          }}
                          labelId="service"
                          value={service}
                          onChange={handleChangeService}
                        >
                          {serviceData.map((service) => {
                            return (
                              <MenuItem value={service}>{service}</MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item lg={12}>
                    <input
                      className={styles.feildC}
                      placeholder="message"
                      style={{ height: "100px" }}
                      onChange={MessaegHandler}
                      value={message}
                      required
                    />
                  </Grid>
                </Grid>
                <Box clasName={poppins.className}>
                  <Button sx={style.btn} onClick={handleSubmit}>
                    SUBMIT
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Form;
