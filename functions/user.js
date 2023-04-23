import userinfo from "../mongoose_schemas/user.js";

export const Updateuser = async(req,res)=>{
    
    const {userid} = req.query;
    try {
        const [ userdata ] = await userinfo.find({'id': userid });
        res.json(userdata)

    } catch (error) {
        console.log(error.message);
    }

}

export const Createuser = async(req,res)=>{

    const data = req.body
    const newuser = new userinfo(data)
    try {
        await newuser.save()
    }
    catch (error) {
        console.log(error.message);
    }
}
