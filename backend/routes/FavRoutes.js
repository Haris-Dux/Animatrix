import express from 'express';
import { createFav, getFavForUser } from '../controller/FavController.js';



const favRouter = express.Router();

favRouter.post("/createFav",createFav);
favRouter.post("/getFavForUser",getFavForUser);

export default favRouter;
