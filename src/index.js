"use strict";

const express = require("express");
const dotenv = require("dotenv");

const indexRoutes = require("./routes/index.routes");

// Loading environment variables from .env file
// TODO: Implement error handling when .env file is not found
dotenv.config({ debug: true });

const app = express();
const PORT = process.env.PORT;

// Middlewares
// TODO: Add a default starting route to all routes, like /api/v1
app.use(express.json());

// Routes
app.use("/api", indexRoutes);

// Starting the server
app.listen(PORT, () => {
    console.log(`Express API started successfully on port ${PORT}.`);
});
