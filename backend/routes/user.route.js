import { Router } from "express";
import { addEmployee, getEmployee } from "../controllers/user.controller.js";
const router = Router()

router.route("/create-employee").post(addEmployee)
router.route("/get-employee").get(getEmployee)

export default router;