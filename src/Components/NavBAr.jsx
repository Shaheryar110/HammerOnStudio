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
import logo from "../../src/assets/images/logo.webp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

function NavBAr() {
  const style = {
    navBar: {
      width: "100%",
      display: { xl: "flex", xs: "none" },
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
      marginTop: "-3.2rem",
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
      cursor: "pointer",
    },
    container: {
      maxWidth: { lg: "1500px", md: "1000px" },
    },
    smallAppBar: {
      display: { xl: "none", xs: "flex" },
    },
    appBars: {
      paddingY: "1rem",
    },
    appStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      width: "100%",
    },
    item: {
      color: "white",
      fontSize: "1rem",
      padding: "1rem",
    },
    listItems: {
      width: "100%",
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
    }, 500);
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
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const smallApp = [
    { link: "/", text: "HOME" },
    { link: "/about", text: "ABOUT" },
    { link: "/", text: "SERVICE" },
    { link: "/our-work", text: "OUR WORK" },
    { link: "/blogs", text: "BLOGS" },
    { link: "/contact", text: "CONTACT US" },
    { link: "/get-a-quote", text: "GET A QOUTE" },
  ];
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
                  <Typography
                    sx={style.text}
                    onClick={DropDownHandler}
                    onMouseEnter={handleMouseEnter}
                  >
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
                <Image
                  src={logo}
                  alt="logo"
                  className={styles.image}
                  loading="eager"
                  fill={false}
                />
              </li>
              <Box className={styles.boxStyle}>
                <li className={styles.li}>
                  <Link href="/our-work" style={{ textDecoration: "none" }}>
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
                  <Link href="/get-a-quote" style={{ textDecoration: "none" }}>
                    <Typography sx={style.text}>Get A Qoute</Typography>
                  </Link>
                </li>
              </Box>
            </ul>
          </Box>
          <Box sx={style.smallAppBar}>
            <AppBar position="static" sx={style.appBars} bgcolor="#2296E6">
              <Box sx={style.appStyle}>
                <Image src={logo} width={100} height={100} />
                {!open && (
                  <MenuIcon sx={{ fontSize: "2rem" }} onClick={openMenu} />
                )}
                {open && (
                  <CancelIcon sx={{ fontSize: "2rem" }} onClick={openMenu} />
                )}
              </Box>
              {open && (
                <Box sx={style.listItems}>
                  {smallApp.map((data) => {
                    return (
                      <>
                        {data.text === "SERVICE" ? (
                          <div>
                            <div>
                              <Typography
                                sx={style.item}
                                onClick={toggleDropdown}
                              >
                                {data.text}
                              </Typography>

                              {showDropdown && (
                                <div>
                                  <Typography sx={style.item}>
                                    <Link
                                      href="/commercial-service"
                                      style={{
                                        textDecoration: "none",
                                        listStyle: "none",
                                        color: "white",
                                      }}
                                    >
                                      COMMERCIAL SERVICE
                                    </Link>
                                  </Typography>
                                  <Typography sx={style.item}>
                                    <Link
                                      href="/residential-service"
                                      style={{
                                        textDecoration: "none",
                                        listStyle: "none",
                                        color: "white",
                                      }}
                                    >
                                      RESIDENTIAL SERVICE
                                    </Link>
                                  </Typography>
                                </div>
                              )}
                            </div>
                            <hr />
                          </div>
                        ) : (
                          <div>
                            <Typography sx={style.item}>
                              <Link
                                href={data.link}
                                style={{
                                  textDecoration: "none",
                                  listStyle: "none",
                                  color: "white",
                                }}
                              >
                                {data.text}
                              </Link>
                            </Typography>
                            <hr />
                          </div>
                        )}
                      </>
                    );
                  })}
                </Box>
              )}
            </AppBar>
          </Box>
        </Container>
      </Box>
      {active && (
        <Box
          sx={style.dropDowmBox}
          onMouseEnter={() => setIsHoverDropdown(true)}
          onMouseLeave={() => {
            setIsHoverDropdown(false);
            setActive(true);
          }}
        >
          <ListItemButton
            className={styles.size}
            onMouseEnter={() => setIsHoverDropdown(true)}
            onMouseLeave={() => {
              setIsHoverDropdown(false);
              setActive(true);
            }}
          >
            <Link
              href="/commercial-services"
              style={{ textDecoration: "none", color: "inherit" }}
              onMouseEnter={() => setIsHoverDropdown(true)}
              onMouseLeave={() => {
                setIsHoverDropdown(false);
                setActive(true);
              }}
            >
              <ListItemText
                primary="Commercial Service"
                sx={{
                  ":hover": { color: "black", transition: "all ease 0.5s" },
                }}
                onMouseEnter={() => setIsHoverDropdown(true)}
                onMouseLeave={() => {
                  setIsHoverDropdown(false);
                  setActive(true);
                }}
              />
            </Link>
          </ListItemButton>
          <hr />
          <ListItemButton
            onMouseEnter={() => setIsHoverDropdown(true)}
            onMouseLeave={() => {
              setIsHoverDropdown(false);
              setActive(true);
            }}
          >
            <Link
              href="/residential-services"
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
