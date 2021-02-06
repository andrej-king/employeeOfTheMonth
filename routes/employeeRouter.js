const express               = require("express");
const router                = express.Router();
const employeeController    = require("../controllers/employeeController");

router.get("/", employeeController.getEmployeeOfMonthInfo);
router.post("/", employeeController.postUpdateEmployeeOfMonthInfo);

module.exports = router;