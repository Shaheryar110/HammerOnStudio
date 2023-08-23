import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import responsive from "../../styles/responsive.module.css";
import styles from "../../styles/style.module.css";
import new1 from "../../assets/images/new1.webp";
import Image from "next/image";
import BeforeHeadSmall from "../Commons/BeforeHeadSmall";
import { Poppins } from "next/font/google";
import postNewsLetterForm from "../../service/newLetterService";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
function ContactForm1() {
  const style = {
    main: {
      backgroundColor: "#3FBDF9",
      marginTop: "3rem",
      position: "relative",
      height: "100%",
    },

    boxSetting: {
      marginY: "4rem",
    },
    buton: {
      marginY: "1rem",
      color: "white",
      paddingY: "0.8rem",
      fontSize: "0.7rem",
      backgroundColor: "white",
      color: "#393738",
      marginTop: "2rem",
      fontWeight: 600,
      shadow: "none",
      border: "1px solid white",
      paddingX: "0.6rem",
      borderRadius: "0.5rem",
      ":hover": {
        marginY: "1rem",
        color: "white",

        backgroundColor: "white",
        color: "#393738",
        marginTop: "2rem",
        fontWeight: 600,
        shadow: "none",
        border: "1px solid white",
        paddingX: "0.6rem",
        borderRadius: "0.5rem",
        transition: "all ease 1s",
      },
    },
    three: {
      display: { sm: "flex", xs: "block" },
      flexDirection: "row",
      gap: "1rem",

      alignItems: "center",
    },
    helpering: {
      position: "absolute",
      bottom: "-5px",
      left: { xl: "300px", lg: "170px" },
      display: { lg: "block", xs: "none" },
    },
  };
  //name feild
  const [name, setName] = useState("");

  const nameHandler = (e) => {
    const value = e.target.value;
    setName(value);
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
  const handleSubmit = () => {
    if (name && isValidEmail) {
      postNewsLetterForm({
        name: name,
        email: email,
      });
      setName("");
      setEmail("");
      console.log("data sent");
      toast.success("Form Submitted Successfully");
    } else {
      console.log("Invalid  submission");
      toast.error("Invalid Feilds Occur");
    }
  };
  const [active, setActive] = useState(false);
  const enter = () => {
    setActive(true);
  };
  const out = () => {
    setActive(false);
  };
  return (
    <>
      <Box sx={style.main}>
        <Container className={responsive.container}>
          <Grid
            container
            columnSpacing={3}
            justifyContent={{ lg: "start", xs: "center" }}
          >
            <Box sx={style.helpering}>
              <Image src={new1} />
            </Box>
            <Grid item xl={5} lg={5}></Grid>
            <Grid item lg={7} xs={12}>
              <Box sx={style.boxSetting}>
                <BeforeHeadSmall text="NEWSLETTER" color="white" />
                <Typography variant="h3" className={styles.h3}>
                  Need Any Home Repair Help?
                </Typography>
                <Box sx={style.three}>
                  <input
                    className={styles.feild}
                    placeholder="Name"
                    value={name}
                    onChange={nameHandler}
                  />
                  <input
                    className={styles.feild1}
                    placeholder="Email"
                    onChange={handleInputChangeEmail}
                    value={email}
                  />
                  <Button
                    onClick={handleSubmit}
                    sx={style.buton}
                    className={poppins.className}
                    onMouseEnter={enter}
                    onMouseOut={out}
                  >
                    <motion.div
                      initial={{ x: 0, opacity: 0 }}
                      whileInView={{ opacity: 1, x: active ? -5 : 10 }}
                      transition={{ duration: 0.5 }}
                      onMouseEnter={enter}
                      onMouseOut={out}
                    >
                      {" "}
                      SUBSCRIBE
                    </motion.div>

                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ opacity: active ? 1 : 0, x: -5 }}
                      transition={{ duration: 0.5 }}
                      onMouseEnter={enter}
                      onMouseOut={out}
                    >
                      <KeyboardDoubleArrowRightIcon
                        sx={{
                          transition: "all ease 0.5s",
                          display: "flex",
                          alignSelf: "center",
                        }}
                      />
                    </motion.div>
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <ToastContainer />
      </Box>
    </>
  );
}

export default ContactForm1;
