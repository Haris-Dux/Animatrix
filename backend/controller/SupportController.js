import { Support } from "../model/SupportModel.js";

export const createSupport = async (req, res) => {
  try {
    const { firstName, message, lastName, phoneNumber , email } = req.body;
    const data = await Support.create({
      firstName,
      message,
      lastName,
      email,
      phoneNumber
    });

    return res.status(201).json({msg: "Successfully Submitted"});
  } catch (error) {
    return res.status(400).json({msg:error.message});
  }
};

export const getAllSupport = async (req, res) => {
  try {
    const supportData = await Support.find({}).sort({createdAt:-1})
    return res.status(201).json(supportData);
  } catch (error) {
    return res.status(400).json({msg:error.message});
  }
};


