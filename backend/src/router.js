const express = require("express");
const resultController = require("./controllers/Results.controller");

const router = express.Router();

router.get("/resultats/:id", resultController.get);
router.get("/resultats", resultController.getAll);

module.exports = router;
