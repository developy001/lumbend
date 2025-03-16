import  express from "express";
import { getAllLocations } from "../services/locationService";

const router = express.Router()


router.get('/' , async (req , res) => {
   const locations = await getAllLocations();
   res.status(200).send (locations)
})
export default router;