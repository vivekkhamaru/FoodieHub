const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.stack);
  res.status(500).json({ message: "Internal server error" });
});


app.use("/api", require("./routes/auth"));
app.use("/api/menu", require("./routes/menu"));

app.listen(5000, () => console.log("Server running on port 5000"));