import React from "react";
import { Container, Box, Typography } from "@mui/material";
import BeforeHeadSmall from "../Commons/BeforeHeadSmall";
import HeadingH2 from "../Commons/HeadingH2";
import Layout from "../Layout";
import StripSection from "../Commons/Stripe";
import Link from "next/link";
import tag from "../../assets/images/tag01.webp";
import Image from "next/image";
import Head from "next/head";

function PrivacyPolicy() {
  const style = {
    container: {
      maxWidth: { xl: "1200px", lg: "1100px", md: "900px" },
    },
    margins: {
      marginY: "3rem",
      position: "relative",
    },
    text: {
      color: "grey",
      marginY: "1rem",
    },
    bold: {
      color: "grey",
      marginY: "1rem",
      fontWeight: 600,
    },
    overlay: {
      position: "absolute",
      bottom: 0,
      zIndex: "-1",
      width: "500px",
      height: "500px",
      right: 0,
    },
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.webp" />
        <title>Privacy Policy</title>
      </Head>
      <Layout>
        <StripSection heading="PRIVACY POLICY" />
        <Box sx={style.margins}>
          <Box sx={style.overlay}>
            <Image src={tag} style={{ width: "100%", height: "100%" }} />
          </Box>
          <Container sx={style.container}>
            <BeforeHeadSmall text="PRIVACY POLICY" />
            <HeadingH2 text="Privacy Policy" />
            <Typography sx={style.text}>
              At Hammer-On Studios LLC, accessible from
              <Link
                style={{
                  textDecoration: "none",
                  fontWeight: 600,
                  color: "inherit",
                }}
                href="https://hammeronstudios.com/"
              >
                {" "}
                https://hammeronstudios.com/
              </Link>{" "}
              , one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains information collected and
              recorded by Hammer-On Studios LLC and how we use it.
            </Typography>
            <Typography sx={style.text}>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </Typography>
            <Typography sx={style.text}>
              This Privacy Policy applies only to our online activities. It is
              valid for visitors to our website regarding the information that
              they shared and/or collected in Hammer-On Studios LLC. This policy
              does not apply to any information collected offline or via
              channels other than this website.
            </Typography>
            <Typography sx={style.bold}>Consent</Typography>
            <Typography sx={style.text}>
              You hereby consent to our Privacy Policy and agree to its terms by
              using our website.
            </Typography>
            <Typography sx={style.bold}>Information we collect</Typography>
            <Typography sx={style.text}>
              The personal information you are asked to provide and the reasons
              you are asked to provide it will be made clear to you at the point
              we ask you to provide your personal information.
            </Typography>
            <Typography sx={style.text}>
              f you contact us directly, we may receive additional information
              about you, such as your name, e-mail address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </Typography>
            <Typography sx={style.text}>
              When you register for an Account, we may ask for your contact
              information, including name, company name, address, e-mail
              address, and telephone number.
            </Typography>
            <Typography sx={style.text}>
              We use the information we collect in various ways, including:
            </Typography>
            <Typography sx={style.text}>
              Provide, operate, and maintain our website
            </Typography>
            <Typography sx={style.text}>
              Improve, personalize, and expand our website
            </Typography>
            <Typography sx={style.text}>
              Understand and analyze how you use our website
            </Typography>
            <Typography sx={style.text}>
              Develop new products, services, features, and functionality
            </Typography>
            <Typography sx={style.text}>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website and for
              marketing and promotional purposes
            </Typography>
            <Typography sx={style.text}>Send you e-mails</Typography>
            <Typography sx={style.text}>Find and prevent fraud</Typography>
            <Typography sx={style.bold}>log Files</Typography>
            <Typography sx={style.text}>
              Hammer-On Studios LLC follows a standard procedure of using log
              files. These files log visitors when they visit websites. All
              hosting companies do this and are a part of hosting services’
              analytics. The information collected by log files includes
              internet protocol (IP) addresses, browser type, Internet Service
              Provider (ISP), date and time stamp, referring/exit pages, and
              possibly the number of clicks. These are not linked to any
              personally identifiable information. The information aims to
              analyze trends, administer the site, track user’s movement on the
              website, and gather demographic information.
            </Typography>
            <Typography sx={style.bold}>Cookies and Web Beacons</Typography>
            <Typography sx={style.text}>
              Like any other website, Hammer-On Studios LLC uses ‘cookies.’
              These cookies store information, including visitors’ preferences
              and the website pages that the visitor accessed or visited. The
              information is used to optimize the users’ experience by
              customizing our web page content based on visitors browser type
              and/or other information.
            </Typography>
            <Typography sx={style.bold}>
              Advertising Partners Privacy Policies
            </Typography>
            <Typography sx={style.text}>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of Hammer-On Studios LLC.
            </Typography>
            <Typography sx={style.text}>
              Third-party ad servers or ad networks use technologies like
              cookies, JavaScript, or Web Beacons used in their respective
              advertisements and links that appear on Hammer-On Studios LLC,
              which are sent directly to users’ browsers. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or personalize the advertising content you see on websites you
              visit.
            </Typography>
            <Typography sx={style.text}>
              Hammer-On Studios LLC has no access to or control over third-party
              advertisers’ cookies
            </Typography>
            <Typography sx={style.bold}>
              Third-Party Privacy Policies
            </Typography>
            <Typography sx={style.text}>
              Hammer-On Studios LLC’s Privacy Policy does not apply to other
              advertisers or websites. Thus, we advise you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about opting out of certain options.
            </Typography>
            <Typography sx={style.text}>
              You can choose to disable cookies through your browser options. To
              know more detailed information about cookie management with
              specific web browsers, it can be found at their respective
              websites
            </Typography>
            <Typography sx={style.bold}>
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </Typography>
            <Typography sx={style.text}>
              Under the CCPA, among other rights, New York consumers have the
              right to:
            </Typography>
            <Typography sx={style.text}>
              Request that a business that collects a consumer’s data disclose
              the categories and specific pieces of personal data that a
              business has collected about consumers.
            </Typography>
            <Typography sx={style.text}>
              Request that a business deletes any personal data about the
              consumer that a business has collected
            </Typography>
            <Typography sx={style.text}>
              Request that a business that sells a consumer’s personal data not
              sell the consumer’s personal data.
            </Typography>
            <Typography sx={style.text}>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </Typography>
            <Typography sx={style.bold}>GDPR Data Protection Rights</Typography>
            <Typography sx={style.text}>
              We want to make sure you are fully aware of your data protection
              rights. Every user is entitled to the following
            </Typography>
            <Typography sx={style.text}>
              The right to access – You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </Typography>
            <Typography sx={style.text}>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you think is
              incomplete.
            </Typography>
            <Typography sx={style.text}>
              The right to erasure – You have the right to request that we erase
              your personal data under certain conditions.
            </Typography>
            <Typography sx={style.text}>
              The right to restrict processing – You have the right to request
              that we restrict the processing of your personal data under
              certain conditions.
            </Typography>
            <Typography sx={style.text}>
              The right to object to processing – Under certain conditions, you
              have the right to object to our processing of your personal data.
            </Typography>
            <Typography sx={style.text}>
              The right to data portability – You have the right to request that
              we transfer the data collected to another organization or directly
              to you under certain conditions.
            </Typography>
            <Typography sx={style.text}>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </Typography>
            <Typography sx={style.bold}>Children’s Information</Typography>
            <Typography sx={style.text}>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </Typography>
            <Typography sx={style.text}>
              Hammer-On Studios LLC does not knowingly collect any Personal
              Identifiable Information from children under the age of 13. If you
              think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately, and
              we will do our best efforts to remove such information from our
              records promptly.
            </Typography>
          </Container>
        </Box>
      </Layout>
    </>
  );
}

export default PrivacyPolicy;
