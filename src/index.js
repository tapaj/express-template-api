"use strict";

const rfs = require("rotating-file-stream");
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const indexRoutes = require("./routes/index.routes");

// Loading environment variables from .env file
// TODO: Implement error handling when .env file is not found
dotenv.config({ debug: true });

// Create a write stream, in append mode
const accessLogStream = rfs.createStream("access.log", {
    interval: "1d",
    path: path.join(__dirname, "..", "logs"),
});

const errorLogStream = rfs.createStream("error.log", {
    interval: "1d",
    path: path.join(__dirname, "..", "logs"),
});

const app = express();
const PORT = process.env.PORT;

// Middlewares
// TODO: Add a default starting route to all routes, like /api/v1
app.use(express.json());
app.use(morgan("combined", { stream: accessLogStream }));
app.use(
    morgan("combined", {
        skip: (req, res) => {
            return res.statusCode < 400;
        },
        stream: errorLogStream,
    })
);

// Routes
app.use("/api", indexRoutes);

// Starting the server
app.listen(PORT, () => {
    console.log(`Express API started successfully on port ${PORT}.`);
});
