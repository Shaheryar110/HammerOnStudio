// import { URI } from "@/uri";

export default async function blogs(req, res) {
  if (req.method === "GET") {
    const ress = await fetch(`/api/blogs`);
    const blogs = await ress.json();
    res.send({ blogs });
  } else {
    res.send("text");
  }
}
