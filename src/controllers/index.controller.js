"use strict";

const status = (req, res) => {
    res.status(200).json({
        status: 200,
        statusText: "OK",
        error: false,
        message: "Status retrieval successful.",
        data: [],
    });
};

module.exports = { status };
