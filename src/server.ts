import express, { json, Request, Response } from "express";

const app = express();
app.use(json());

app.get("/", (req: Request, resp: Response) => {
  resp.json({ message: "okay" });
});

app.get("/f", (req: Request, resp: Response) => {
    const {code} = req.query

  resp.json({ code });
});

app.get("/ff", (req: Request, resp: Response) => {

  resp.json({ "FreeFire não é bom"});
});

app.listen(3333, () => {
  console.log("Server is running in port 3333");
});
