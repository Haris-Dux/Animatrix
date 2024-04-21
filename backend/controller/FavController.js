import { Fav } from "../model/favModel.js";


export const createFav = async (req, res) => {
    try {
      const { imageUrl, title, userId} = req.body;
      await Fav.create({
        imageUrl,
        title,
        userId
      });
      return res.status(201).json({msg: "Successfully Added"});
    } catch (error) {
      return res.status(400).json({msg:error.message});
    }
  };

  export const getFavForUser = async (req, res) => {
    try {
     const {userId} = req.body;
      const Data = await Fav.find({userId:userId})
      return res.status(201).json(Data);
    } catch (error) {
      return res.status(400).json({msg:error.message});
    }
  };
  