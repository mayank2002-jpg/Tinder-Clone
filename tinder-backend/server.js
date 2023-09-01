// mongo pass - z3bNwb12jIAXpWOZ
import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://mayankmahajan936:z3bNwb12jIAXpWOZ@cluster0.z8hzcmt.mongodb.net/?retryWrites=true&w=majority`;

//MiddleWare
app.use(express.json());
app.use(cors());

//Db Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send(err); // Send an error response
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`Listening on localhost`));
