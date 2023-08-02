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
      backgroundColor: "#1F588C",
      padding: "1rem",
      marginLeft: "31rem",
      borderRadius: "1rem",
      width: "300px",
      position: "absolute",
      zIndex: "99",
      marginTop: "0.5rem",
    },
  };
  const [active, setActive] = useState(false);
  const DropDownHandler = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <>
      <Box bgcolor="#2296E6" color="white">
        <Container className={responsive.container}>
          <Box sx={style.navBar}>
            <ul className={styles.ul}>
              <Box className={styles.boxStyle}>
                <li className={styles.li}>
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <Typography className={styles.text}>Home</Typography>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="/about" style={{ textDecoration: "none" }}>
                    <Typography className={styles.text}>About</Typography>
                  </Link>
                </li>
                <li className={styles.lis}>
                  <Typography className={styles.text} onClick={DropDownHandler}>
                    Services
                  </Typography>
                  <KeyboardArrowDownIcon />
                </li>
                <li className={styles.li}>
                  <Link href="/merchandis" style={{ textDecoration: "none" }}>
                    <Typography className={styles.text} id={styles.margin}>
                      Merchandis
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
                    <Typography className={styles.text}>Our Work</Typography>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Typography className={styles.text}>Blogs</Typography>
                </li>
                <li className={styles.li}>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Typography className={styles.text}>Conatct Us</Typography>
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link href="/get-a-qoute" style={{ textDecoration: "none" }}>
                    <Typography className={styles.text}>Get A Qoute</Typography>
                  </Link>
                </li>
              </Box>
            </ul>
          </Box>
        </Container>
      </Box>
      {active && (
        <Box sx={style.dropDowmBox}>
          <ListItemButton className={styles.size}>
            <Link
              href="/commercialService"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemText primary="Commercial Service" />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link
              href="/residentialService"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemText
                primary="Residential Service"
                className={styles.size}
              />
            </Link>
          </ListItemButton>
        </Box>
      )}
    </>
  );
}

export default NavBAr;
