import express from "express";
import cors from "cors";
import tagsRoute from "./routes/tags.js";
import photosRoute from "./routes/photos.js";
import "dotenv/config";
const port = process.env.PORT || 8000;
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.use("/api", tagsRoute);

app.use("/api/photos", photosRoute);

app.listen(port, function () {
  console.log(`listening on port' ${port}`);
});
