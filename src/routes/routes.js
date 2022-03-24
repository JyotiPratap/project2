const express = require('express');
const router = express.Router();
const ProjectController= require("../controllers/controllers")

router.post("/functionup/colleges",ProjectController.college)
router.post("/functionup/interns",ProjectController.intern)
router.get("/getcollegeName",ProjectController.getcollege)

module.exports = router;
