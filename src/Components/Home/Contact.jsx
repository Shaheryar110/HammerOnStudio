import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import img021 from "../../assets/images/img012.webp";
import { Poppins } from "next/font/google";
import postContactForm from "../../service/contactusServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});
import { Inter } from "next/font/google";
import { useInView, motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

function Contact() {
  const style = {
    mainCont: {
      marginY: "5rem",
    },
    tag: {
      color: "#393738",
      fontSize: "14px",
      fontWeight: 700,
      marginBottom: "10px",
      letterSpacing: "1px",

      position: "relative",
      lineHeight: "21px",
      paddingLeft: "30px",
      "::before": {
        content: "' '",
        height: "3px",
        width: "21px",
        backgroundColor: "#2871ae",
        position: "absolute",
        top: "9px",
        left: 0,
      },
    },
    h3: {
      fontSize: { xl: "40px", lg: "30px" },
      fontWeight: 900,
      fontStyle: "normal",
      color: "#393738",
      lineHeight: "46px",
      marginBottom: "1rem",
    },
    par: {
      fontSize: "20px",
      fontWeight: 500,
      color: "grey",
    },
    contactForm: {
      padding: "4rem",
      width: "100%",
      height: "100%",
      borderRadius: "1rem",
      position: "relative",
      backgroundImage: `url(${img021.src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      marginY: "4rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: { lg: "start", md: "center" },
    },
    tag1: {
      color: "white",
      fontSize: "16px",
      fontWeight: 700,
      marginBottom: "10px",
      letterSpacing: "1px",

      position: "relative",
      lineHeight: "21px",
      paddingLeft: "30px",
      "::before": {
        content: "' '",
        height: "3px",
        width: "21px",
        backgroundColor: "#2871ae",
        position: "absolute",
        top: "9px",
        left: 0,
      },
    },
    h31: {
      fontSize: "39px",
      fontWeight: 800,
      fontStyle: "normal",
      color: "white",
      lineHeight: "46px",
      marginBottom: "0.5rem",
    },
    form: {
      marginY: "1rem",
      backgroundColor: "#408ECD",
      border: "2px solid white",
      color: "white",
      paddingX: "2rem",
    },
    buton: {
      width: "100%",
      marginY: "1rem",
      color: "white",
      borderRadius: "1rem",
      fontSize: "1.2rem",
      backgroundColor: "#05365F",
      textTransform: "uppercase",
      fontWeight: 400,
      marginLeft: "16px",
      ":hover": {
        backgroundColor: "#05365F",
      },
    },
    bux: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    feildC: {
      backgroundColor: "#408ecd",
      width: "100%",
      display: "block",
      padding: "0.5rem 0.75rem",
      fontSize: "1rem",
      lineHeight: "1.25",
      marginTop: "1.2rem",
      borderRadius: "0.25rem",
      ":focus": {
        outline: "none",
      },
    },
  };
  const feildC = {
    backgroundColor: "#408ecd",
    width: "100%",
    display: "block",
    padding: "0.5rem 0.75rem",
    fontSize: "1rem",
    lineHeight: "1.25",
    marginTop: "1.2rem",
    borderRadius: "0.25rem",
    ":focus": {
      outline: "none",
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
        // console.log(res.data);
        if (res.data == "Quote Form Added and Email Sent") {
          toast.success("Form Submitted Successfully");
        } else {
          toast.error("Invalid Feilds Occur");
        }
      });
      setName("");
      setPhoneNumber("");
      setEmail("");
      setCity("");
      setState("");
      setService("");
      setMessage("");
    } else {
      // console.log("Invalid  submission");
      toast.error("Invalid Feilds Occur");
    }
  };
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <>
      <Box sx={style.mainCont}>
        <Container className={responsive.container} ref={ref}>
          <Grid
            container
            justifyContent={{ lg: "space-between", xs: "center" }}
          >
            <Grid item lg={6} md={12}>
              <Box sx={style.bux}>
                <motion.div
                  initial={{ y: inView ? -50 : 0, opacity: inView ? 0 : 1 }}
                  animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                  transition={{ duration: 1, type: "easeIn" }}
                >
                  <Typography variant="h4" sx={style.tag}>
                    REVIEWS
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ y: inView ? -50 : 0, opacity: inView ? 0 : 1 }}
                  animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                  transition={{ duration: 1, type: "easeIn", delay: 0.3 }}
                >
                  <Typography
                    variant="h3"
                    sx={style.h3}
                    className={inter.className}
                  >
                    Our professional services are just one call away!
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ y: inView ? -50 : 0, opacity: inView ? 0 : 1 }}
                  animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }}
                  transition={{ duration: 1, type: "easeIn", delay: 0.4 }}
                >
                  <Typography sx={style.par}>
                    Want to know more about our home and building renovation
                    services? Connect with us today by writing us a message or
                    calling us today. Our representatives will reach out within
                    24 hours.
                  </Typography>
                </motion.div>
                <ul className={styles.unOrderList}>
                  <li id={styles.changeColor} className={inter.className}>
                    info@hammeronstudios.com
                  </li>
                  <li className={inter.className}>(845) 837-2616</li>
                </ul>
              </Box>
            </Grid>
            <Grid item lg={6} md={8}>
              <Box sx={style.contactForm}>
                <Typography variant="h4" sx={style.tag1}>
                  CONTACT HAMMER-ON STUDIOS
                </Typography>
                <Typography variant="h3" sx={style.h31}>
                  Send Us a Message
                </Typography>
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
                          {cityData.map((name, index) => {
                            return (
                              <MenuItem key={index} value={name}>
                                {name}
                              </MenuItem>
                            );
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
                          {serviceData.map((service, index) => {
                            return (
                              <MenuItem key={index} value={service}>
                                {service}
                              </MenuItem>
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

                  <Button
                    className={poppins.className}
                    sx={style.buton}
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <ToastContainer />
      </Box>
    </>
  );
}

export default Contact;
