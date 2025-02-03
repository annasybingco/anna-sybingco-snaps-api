import express from "express";
import cors from "cors";
import "dotenv/config";
import tagsRoute from "./routes/tags.js";
import photosRoute from "./routes/photos.js";

const PORT = process.env.PORT || 8000;
const { CORS_ORIGIN } = process.env;
const app = express();

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.use("/api", tagsRoute);

app.use("/api/photos", photosRoute);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
