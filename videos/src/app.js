const express = require("express");
const Video = require("./models/video_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "videos" });
});

app.get("/api/v1/videos", async (req, res) => {
  const videos = await Video.findAll({});
  res.json(videos);
});

app.post("/api/v1/videos", async (req, res) => {
  const video = req.body
  const savedVideo = await video.create(video);
  res.json(savedVideo);
});

module.exports = app;
