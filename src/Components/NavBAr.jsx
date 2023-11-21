import {
  Box,
  Container,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";

import styles from "../../src/styles/style.module.css";
import logo from "../../src/assets/images/logo.webp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { useRouter } from "next/router";

function NavBAr() {
  const style = {
    navBar: {
      width: "100%",
      display: { lg: "flex", xs: "none" },
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
      display: "none",
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
      display: { lg: "none", xs: "flex" },
      paddingX: "1rem",
    },
    appBars: {
      paddingY: "1rem",
      backgroundColor: "#2296E6 !important",
      boxShadow: 0,
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

  const DropDownHandler = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
    router.push("/myservices");
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
    { link: "/about", text: "ABOUT US" },
    { link: "/", text: "SERVICE" },
    { link: "/our-work", text: "OUR WORK" },
    { link: "/blogs", text: "BLOGS" },
    { link: "/contact", text: "CONTACT US" },
    { link: "/get-a-quote", text: "GET A QOUTE" },
  ];
  const linkAndPages = [
    {
      name: "Roof Installation and Repair",
      link: "Installation",
    },
    {
      name: "Kiryas Joel NY Bathroom Renovations ",
      link: "Renovations",
    },
    {
      name: "Cornwall NY Construction Company",
      link: "Construction",
    },
    {
      name: "Stony Point NY Roofing Services ",
      link: "Roofing",
    },
    {
      name: "West Haverstraw NY Deck Construction ",
      link: "Haverstraw",
    },
    {
      name: "Peekskill, NY Painting Contractors ",
      link: "Painting",
    },
    {
      name: "Home Improvement Specialists",
      link: "Improvement",
    },
    {
      name: "Retaining Walls in Haverstraw",
      link: "Retaining",
    },
    {
      name: "Suffern NY Kitchen Renovations ",
      link: "Kitchen",
    },
    {
      name: "NY Roof Repair  ",
      link: "Repair",
    },
    {
      name: "Superior Performance",
      link: "Performance",
    },
    {
      name: "Commercial Property Remodeling ",
      link: "Commercial",
    },
    {
      name: "Experienced Renovators",
      link: "Renovators",
    },
    {
      name: "Bath Remodeling Experts",
      link: "Bath",
    },
    {
      name: "Beacon NY Deck Builders ",
      link: "Beacon",
    },
    {
      name: "Roof Installation and Repair  ",
      link: "Roof-Installation",
    },
    {
      name: "Orange County",
      link: "orange-county",
    },
    {
      name: "Experienced Renovators ",
      link: "Renovators",
    },
    {
      name: "Ulster County",
      link: "Ulster",
    },
    {
      name: "Dutchess County ",
      link: "Dutchess",
    },
    {
      name: "Putnam County",
      link: "Putnam",
    },
  ];
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const router = useRouter();
  const openServicePage = () => {
    router.push("/myservices");
  };
  const handleDoubleClick = () => {
    router.push("/myservices");
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
                    <Typography sx={style.text}>About Us</Typography>
                  </Link>
                </li>
                <li className={styles.lis}>
                  <Typography sx={style.text} onClick={DropDownHandler}>
                    Services
                  </Typography>
                  <KeyboardArrowDownIcon />
                  <Box className={styles.dropDowmBox}>
                    <ListItemButton className={styles.size}>
                      <Link
                        href="/commercial-services"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <ListItemText
                          primary="Commercial Services"
                          sx={{
                            ":hover": {
                              color: "black",
                              transition: "all ease 0.5s",
                            },
                          }}
                        />
                      </Link>
                    </ListItemButton>
                    <hr />
                    <ListItemButton>
                      <Link
                        href="/residential-services"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <ListItemText
                          primary="Residential Services"
                          className={styles.size}
                          sx={{
                            ":hover": {
                              color: "black",
                              transition: "all ease 0.5s",
                            },
                          }}
                        />
                      </Link>
                    </ListItemButton>
                  </Box>
                </li>
                <li className={styles.lis}>
                  <Typography sx={style.text}>Locations</Typography>
                  <KeyboardArrowDownIcon />
                  <Box className={styles.dropDowmBox1}>
                    {linkAndPages.map((data, index) => {
                      return (
                        <React.Fragment key={index}>
                          <ListItemButton className={styles.size}>
                            <Link
                              href={`/location/${data.link}`}
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <ListItemText
                                primary={data.name}
                                sx={{
                                  ":hover": {
                                    color: "black",
                                    transition: "all ease 0.5s",
                                  },
                                }}
                              />
                            </Link>
                          </ListItemButton>
                          <hr />
                        </React.Fragment>
                      );
                    })}
                  </Box>
                </li>
              </Box>
              <li className={styles.liImage} id={styles.margin}>
                <Image
                  src={logo}
                  alt="Logo"
                  className="image"
                  loading="eager"
                  fill={false}
                  priority={true}
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
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt="Logo"
                  priority={true}
                />
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
                              <div onDoubleClick={handleDoubleClick}>
                                <Typography
                                  sx={style.item}
                                  onClick={toggleDropdown}
                                >
                                  {data.text}
                                </Typography>
                              </div>
                              {showDropdown && (
                                <div>
                                  <Typography sx={style.item}>
                                    <Link
                                      href="/commercial-services"
                                      style={{
                                        textDecoration: "none",
                                        listStyle: "none",
                                        color: "white",
                                      }}
                                    >
                                      COMMERCIAL SERVICES
                                    </Link>
                                  </Typography>
                                  <Typography sx={style.item}>
                                    <Link
                                      href="/residential-services"
                                      style={{
                                        textDecoration: "none",
                                        listStyle: "none",
                                        color: "white",
                                      }}
                                    >
                                      RESIDENTIAL SERVICES
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
                primary="Commercial Services"
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
