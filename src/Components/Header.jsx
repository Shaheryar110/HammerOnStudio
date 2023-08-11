import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import responsive from "../../src/styles/responsive.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
const HeaderTop = () => {
  const style = {
    topHeader: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: "100px",
    },
    iconStyle: {
      padding: "0.5rem",
      color: "#35A5F2",
      backgroundColor: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    topText: {
      fontSize: "15px",
      fontWeight: 600,
      lineHeight: "0.7em",
      marginBottom: "0.7rem",
    },
    topSecondText: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "0.7em",
    },
    boxDetail: {
      display: "flex",
      alignItems: "center",
      marginY: "1rem",
    },
    Left: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
    },
    icon: {
      color: "white",
      backgroundColor: "#35A5F2",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "40px",
      width: "40px",
    },
    container: {
      maxWidth: { lg: "1450px", md: "1000px" },
    },
  };
  return (
    <Box bgcolor="#1F588C" color="primary.contrastText">
      <Container sx={style.container}>
        <Stack sx={style.topHeader}>
          <Box sx={style.Left}>
            <Box sx={style.boxDetail}>
              <Box mr={1} sx={style.iconStyle}>
                <PhoneIcon />
              </Box>
              <Box>
                <Typography variant="body2" sx={style.topText}>
                  Need Any Roofing Help?
                </Typography>
                <Typography sx={style.topSecondText}>
                  CALL US : (845) 837-2616
                </Typography>
              </Box>
            </Box>
            <Box sx={style.boxDetail}>
              <Box mr={1} sx={style.iconStyle}>
                <MailIcon />
              </Box>
              <Box>
                <Typography variant="body2" sx={style.topText}>
                  Email Us:
                </Typography>
                <Typography sx={style.topSecondText}>
                  info@hammeronstudios.com
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={style.Left}>
            <Link href="https://www.facebook.com/HammerOnStudios">
              <Box sx={style.icon}>
                <FacebookIcon />
              </Box>
            </Link>
            <Link href="https://www.instagram.com/hammeronstudiosllc/">
              <Box sx={style.icon}>
                <InstagramIcon />
              </Box>
            </Link>
            <Link href="https://www.tiktok.com/@hammer.on.studios">
              <Box sx={style.icon}>
                <FontAwesomeIcon icon={faTiktok} fontSize={20} color="white" />
              </Box>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderTop;
