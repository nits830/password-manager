
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://nits911:mongodb830@cluster0.hbcdxjb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));


// Creating Schema

const keyValueSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true },
    value: { type: mongoose.Schema.Types.Mixed, required: true }, // Allows storing any data type
  });
  
  const KeyValue = mongoose.model("KeyValue", keyValueSchema);
  

// Create API routes

// Test Route

app.get("/", (req, res)=> {
    res.send("hello")
})

// Create or update a key-value pair
app.post("/key-value", async (req, res) => {
    const { key, value } = req.body;
  
    try {
      const existingPair = await KeyValue.findOneAndUpdate(
        { key },
        { value },
        { new: true, upsert: true } // Upsert creates if not found
      );
      res.status(200).send(existingPair);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  // Retrieve a value by key
  app.get("/key-value/:key", async (req, res) => {
    const { key } = req.params;
  
    try {
      const pair = await KeyValue.findOne({ key });
      if (!pair) return res.status(404).send({ message: "Key not found" });
      res.status(200).send(pair);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });
  
  // Delete a key-value pair
  app.delete("/key-value/:key", async (req, res) => {
    const { key } = req.params;
  
    try {
      const result = await KeyValue.findOneAndDelete({ key });
      if (!result) return res.status(404).send({ message: "Key not found" });
      res.status(200).send({ message: "Key deleted successfully" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  });


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
