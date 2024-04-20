import express from 'express';
import { getAllSupport , createSupport} from '../controller/SupportController.js';
import { adminOnly } from '../middleware/AuthUser.js';

const supportRouter = express.Router();

supportRouter.post("/createSupport",createSupport);
supportRouter.post("/getAllSupport",adminOnly,getAllSupport);

export default supportRouter;



