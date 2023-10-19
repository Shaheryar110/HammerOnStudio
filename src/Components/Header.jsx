import { Box, Container, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
const HeaderTop = () => {
  const style = {
    topHeader: {
      display: "flex",
      flexDirection: { lg: "row", sm: "column" },
      alignItems: "center",
      justifyContent: { lg: "space-between", sm: "center" },
      paddingY: { lg: "0px", sm: "2rem" },
    },
    iconStyle: {
      width: "40px",
      height: "40px",
      color: "#35A5F2",
      backgroundColor: "white",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    topText: {
      fontSize: "13px",
      fontWeight: 600,
      lineHeight: "0.7em",
      marginBottom: "0.5rem",
    },
    topSecondText: {
      fontSize: "16px",
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
      flexDirection: { lg: "row", xs: "column" },
      gap: { lg: "1rem" },
    },
    Left1: {
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
    paddings: {
      paddingBottom: { md: 0, sm: 2, xs: 1 },
    },
  };
  return (
    <Box bgcolor="#1F588C" color="primary.contrastText" sx={style.paddings}>
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
                  <Link
                    href={"(845) 837-2616"}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    CALL US : (845) 837-2616
                  </Link>
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
                  <Link
                    href={"info@hammeronstudios.com"}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    info@hammeronstudios.com
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={style.Left1}>
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
              <Box sx={[style.icon, { padding: "10px" }]}>
                <Image src={"/tik-tok.png"} width={24} height={24} alt="oops" />
              </Box>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderTop;
