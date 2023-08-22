const express = require("express");
const data = require("./data.js");
const server = express();

server.get("/", (req, res) => {
  res.send("Undertale Hakkında Minik Bilgiler");
});

server.get("/Karakterler", (req, res) => {
  res.status(200).json(data);
});

server.get("/Flowey", (req, res) => {
  res.send("NEYE BAKIYORSUN BÖYLE!!");
});

server.get("/Sans", (req, res) => {
  res.send("Yanlış yer dostum");
});

server.get("/Gaster", (req, res) => {
  res.send("☪✌💣✌☠ Ç✋☪☜☹☝☜💧✋");
});

server.get("/Toriel", (req, res) => {
  res.send("Küçüğüm...");
});

server.get("/Karakterler/:id", (req, res) => {
  const { id } = req.params;
  const karakter = data.find((karakter) => karakter.id == parseInt(id));
  if (karakter) {
    res.status(200).json(karakter);
  } else {
    res.status(404).send("ARADIĞINIZ VERİ BULUNAMADI");
  }
});

server.listen(5000, () => {
  console.log("htttps://localhost:5000 sunucuna biri girdi");
});
