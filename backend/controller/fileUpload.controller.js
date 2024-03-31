import {uploadFile} from "../utils/upload.js";
import User from "../model/user.model.js";

export const uploadfile = async (req,res) => {
    try {
        const upload = await uploadFile(req.file.path,req.file.originalname)
        const url = upload.secure_url
        const email = req.headers['email']
        const filter = {email:email}
        const user = await User.updateMany(filter,{$push:{
                file_urlAndTitle:{
                    title:req.body.title,
                    urls:url
                }
            }})
        res.json({message:"success fully uploaded"})
    } catch (err){
        console.log(err.message)
    }
}