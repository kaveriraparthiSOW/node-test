import express, { Request, Response } from "express";
import developerRoutes from "./developers/routes";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Hello Kaveri, Congratulations! Node + Express + TypeScript is set up."
  );
});
app.use(express.json());
app.use("/developers", developerRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
