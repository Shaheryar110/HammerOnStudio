import React from "react";
import { Container, Box, Typography } from "@mui/material";
import BeforeHeadSmall from "../Commons/BeforeHeadSmall";
import HeadingH2 from "../Commons/HeadingH2";
import Layout from "../Layout";
import StripSection from "../Commons/Stripe";
import Image from "next/image";
import tag from "../../assets/images/tag01.webp";
import Head from "next/head";

function TermsAndCondition() {
  const data = [
    {
      heading: "Welcome to Hammer-On Studios LLC!",
      para: `These terms and conditions outline the rules and regulations for using Hammer-On Studios LLC’s Website, located at https://hammeronstudios.com/.

    By accessing this website, we assume you accept these terms and conditions. Do not continue to use Hammer-On Studios LLC if you do not agree to take all of the terms and conditions stated on this page.
    
    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice, and all Agreements: “Client,” “You,” and “Your” refers to you, the person who logs on this website and is compliant with the Company’s terms and conditions. “The Company,” “Ourselves,” “We,” “Our,” and “Us” refers to our Company. “Party,” “Parties,” or “Us” refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of the provision of the Company’s stated services, in accordance with and subject to, prevailing law of New York. Any use of the above terminology or other words in the singular, plural, capitalization, and/ or they are taken as interchangeable and therefore refer to the same.`,
    },
    {
      heading: "Cookies",
      para: `We employ the use of cookies. You agreed to use cookies in agreement with Hammer-On Studios LLC’s Privacy Policy by accessing Hammer-On Studios LLC.

      Most interactive websites use cookies to let us retrieve the user’s details for each visit. Our website uses cookies to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.`,
    },
    {
      heading: "License",
      para: `Unless otherwise stated, Hammer-On Studios LLC and/or its licensors own the intellectual property rights for all material on Hammer-On Studios LLC. All intellectual property rights are reserved. You may access this from Hammer-On Studios LLC for your personal use, subject to these terms and conditions restrictions.

      You must not:
      
      Republish material from Hammer-On Studios LLC
      
      Sell, rent, or sub-license material from Hammer-On Studios LLC
      
      Reproduce, duplicate or copy material from Hammer-On Studios LLC
      
      Redistribute content from Hammer-On Studios LLC
      
      Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Hammer-On Studios LLC does not filter, edit, publish or review Comments before their presence on the website. Comments do not reflect the views and opinions of Hammer-On Studios LLC, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Hammer-On Studios LLC shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
      
      Hammer-On Studios LLC reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or cause a breach of these Terms and Conditions.
      
      You warrant and represent that:
      
      You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
      
      The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;
      
      The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy
      
      The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
      
      You hereby grant Hammer-On Studios LLC a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any forms, formats, or media.`,
    },
    {
      heading: "Hyperlinking to our Content",
      para: `The following organizations may link to our website without prior written approval:

      Government agencies;
      
      Search engines;
      
      News organizations;
      
      Online directory distributors may link to our website in the same manner as they hyperlink to the Websites of other listed businesses; and
      
      System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
      
      These organizations may link to our home page, to publications, or other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
      
      We may consider and approve other link requests from the following types of organizations:
      
      Commonly-known consumer and/or business information sources;
      
      Dot.com community sites;
      
      Associations or other groups representing charities;
      
      Online directory distributors;
      
      Internet portals;
      
      Accounting, law, and consulting firms; and
      
      Educational institutions and trade associations.
      
      We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Hammer-On Studios LLC, and (d) the link is in the context of general resource information.
      
      These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
      
      If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Hammer-On Studios LLC. Please include your name, organization name, contact information, URL of your site, a list of URLs from which you intend to link to our website, and a list of URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
      
      Approved organizations may hyperlink to our website as follows:
      
      By use of our corporate name; or
      
      By use of the uniform resource locator being linked to; or
      
      By use of any other description of our website being linked to that makes sense within the context and format of content on the linking party’s site.
      
      No use of Hammer-On Studios LLC’s logo or other artwork will be allowed for linking absent a trademark license agreement.`,
    },
    {
      heading: "Iframes",
      para: `Without prior approval and written permission, you may not create frames around our Webpages that alter our website’s visual presentation or appearance.`,
    },
    {
      heading: "Content Liability",
      para: `We shall not be held responsible for any content on your website. You agree to protect and defend us against all rising claims on your website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.`,
    },
    {
      heading: "Your Privacy",
      para: "Please read Privacy Policy",
    },
    {
      heading: "Reservation of Rights",
      para: `If you find any link on our website that is offensive, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.

      We do not ensure that the information on this website is correct; we do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date`,
    },

    {
      heading: "Disclaimer",
      para: `To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:

      Limit or exclude our or your liability for death or personal injury;
      
      Limit or exclude our or your liability for fraud or fraudulent misrepresentation;
      
      Limit any of our or your liabilities in any way that is not permitted under applicable law; or
      
      Exclude any of our or your liabilities that may not be excluded under applicable law.
      
      The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
      
      As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.`,
    },
  ];
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
      display: "block", // Display as a block element
      wordBreak: "break-word", // Allowing word breaks
      whiteSpace: "pre-line",
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
        <title>Terms & Conditions</title>
      </Head>
      <Layout>
        <StripSection heading="TERMS & CONDITIONS" />
        <Box sx={style.margins}>
          <Box sx={style.overlay}>
            <Image src={tag} style={{ width: "100%", height: "100%" }} />
          </Box>
          <Container sx={style.container}>
            <BeforeHeadSmall text="Terms & Conditions" />
            <HeadingH2 text="Terms & Conditions" />

            {data.map((content) => {
              return (
                <>
                  <Typography sx={style.bold}>{content.heading}</Typography>
                  <Typography sx={style.text}>{content.para}</Typography>
                </>
              );
            })}
          </Container>
        </Box>
      </Layout>
    </>
  );
}

export default TermsAndCondition;
