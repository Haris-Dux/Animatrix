import { User } from "../model/userModel.js";

export const adminOnly = async (req,res,next) => {
    const user = await User.findOne({_id:req.session.userId});
      if (!user) {
       return res.status(404).json({msg:'Invalid Credentials'})
      };
      if (user.superAdmin === false){
        return res.status(401).json({msg:'Unauthorized'});    
      }
      next();
};