import { getrequests, sendrequest } from "../controllers/clientrequest.controller.js";
// const { getrequests, sendrequest } = require("../controllers/clientrequest.controller.js");

import express from 'express'

const router = express.Router()


router.post('/send',sendrequest)
router.get('/get',getrequests)

export default router;