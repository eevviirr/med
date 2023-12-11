const Router = require("express");
const router = new Router();
const patientsController = require("../controllers/patientsController");

// Роутинг
router.get("/", patientsController.getPatients);
router.post("/add", patientsController.postPatients);
router.patch("/update/:id", patientsController.patchPatients);
router.delete("/delete/:id", patientsController.deletePatients);

module.exports = router;
