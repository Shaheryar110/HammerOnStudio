import {
  Box,
  Container,
  Grid,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import responsive from "../../src/styles/responsive.module.css";
import styles from "../../src/styles/style.module.css";
import logo from "../../src/assets/images/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Link from "next/link";

function NavBAr() {
  const style = {
    navBar: {
      width: "100%",
      display: "flex",
      flexBasis: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    dropDowmBox: {
      color: "white",
      backgroundColor: "#2296E6",
      padding: "1rem",
      marginLeft: "31rem",
      borderRadius: "1rem",
      width: "200px",
      position: "absolute",
      zIndex: "99",
      marginTop: "-2rem",
    },
    text: {
      color: "white",
      textTransform: "capitalize",
      fontSize: "1.3rem",
      fontWeight: 600,
      padding: "0px",
      ":hover": {
        color: "#393738",
        textDecoration: "underline",
        transition: "ease all 0.8s",
      },
    },
    container: {
      maxWidth: { lg: "1450px", md: "1000px" },
    },
  };
  const [active, setActive] = useState(false);
  const [isHoverDropdown, setIsHoverDropdown] = useState(false);
  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isHoverDropdown) setActive(false);
      else setActive(true);
    }, 1000);
  };
  const DropDownHandler = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  const text = {
    color: "white",
    textTransform: "capitalize",
    fontSize: "1.3rem",
    fontWeight: 600,
    padding: 0,
  };
  return (
    <>
      <Box bgcolor="#2296E6" color="white">
        <Container sx={style.container}>
          <Box sx={style.navBar}>
            <ul className={styles.ul}>
              <Box className={styles.boxStyle}>
                <li className={styles.li}>
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <Typography sx={style.text}>Home</Typography>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="/about" style={{ textDecoration: "none" }}>
                    <Typography sx={style.text}>About</Typography>
                  </Link>
                </li>
                <li
                  className={styles.lis}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Typography sx={style.text} onClick={DropDownHandler}>
                    Services
                  </Typography>
                  <KeyboardArrowDownIcon />
                </li>
                <li className={styles.li}>
                  <Link href="/merchandis" style={{ textDecoration: "none" }}>
                    <Typography sx={style.text} id={styles.margin}>
                      Merchandise
                    </Typography>
                  </Link>
                </li>
              </Box>
              <li className={styles.liImage} id={styles.margin}>
                <Image src={logo} alt="logo" className={styles.image} />
              </li>
              <Box className={styles.boxStyle}>
                <li className={styles.li}>
                  <Link href="/work" style={{ textDecoration: "none" }}>
                    <Typography sx={style.text}>Our Work</Typography>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="/blogs" style={{ textDecoration: "none" }}>
                    <Typography sx={style.text}>Blogs</Typography>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Typography sx={style.text}>Contact Us</Typography>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="/get-a-qoute" style={{ textDecoration: "none" }}>
                    <Typography sx={style.text}>Get A Qoute</Typography>
                  </Link>
                </li>
              </Box>
            </ul>
          </Box>
        </Container>
      </Box>
      {active && (
        <Box
          sx={style.dropDowmBox}
          onMouseEnter={() => setIsHoverDropdown(true)}
          onMouseLeave={() => {
            setIsHoverDropdown(false);
            setActive(false);
          }}
        >
          <ListItemButton className={styles.size}>
            <Link
              href="/commercialService"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemText
                primary="Commercial Service"
                sx={{
                  ":hover": { color: "black", transition: "all ease 0.5s" },
                }}
              />
            </Link>
          </ListItemButton>
          <hr />
          <ListItemButton>
            <Link
              href="/residentialService"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemText
                primary="Residential Service"
                className={styles.size}
                sx={{
                  ":hover": { color: "black", transition: "all ease 0.5s" },
                }}
              />
            </Link>
          </ListItemButton>
        </Box>
      )}
    </>
  );
}

export default NavBAr;
