import { NextRequest, NextResponse } from "next/server";

const AllowedCountry = "US";

export const middleware = (req, res) => {
  const country = req.geo.country;
  console.log(country, "country");
  if (country !== AllowedCountry) {
    return NextResponse.redirect(
      new URL("https://www.hammeronstudios.com/not-found")
    );
  }
};
