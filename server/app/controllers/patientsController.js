const Patients = require("../models/Patients");

class patientsController {
    async getPatients(req, res) {
        try {
            res.json(await Patients.find());
        } catch (error) {
            console.log(error);
        }
    }
    async postPatients(req, res) {
        try {
            const { diagnostic, date } = req.body;
            if (!diagnostic) {
                return res.status(400).json({ message: "Диагноз обязателен" });
            }
            const patients = new Patients({ diagnostic, date });
            await patients.save();
            return res.status(201).json({ message: "Patients created" });
        } catch (error) {
            console.log(error);
        }
    }
    async patchPatients(req, res) {
        try {
            const { diagnostic, date } = req.body;
            if (!diagnostic) {
                return res.status(400).json({ message: "Диагноз обязателен" });
            }
            const patients = await Patients.findByIdAndUpdate(
                req.params.id,
                { diagnostic, date },
                { new: true }
            );
            if (!patients) {
                return res.status(404).json({ message: "Patients not found" });
            }
            return res.status(201).json({ message: "Patients updated" });
        } catch (error) {
            console.log(error);
        }
    }
    async deletePatients(req, res) {
        try {
            const patients = await Patients.findByIdAndDelete(req.params.id);
            if (!patients) {
                return res.status(404).json({ message: "Patients not found" });
            }
            return res.status(201).json({ message: "Patients deleted" });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new patientsController();
