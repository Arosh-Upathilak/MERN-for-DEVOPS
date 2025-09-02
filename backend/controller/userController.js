import userModel from "../model/userModel.js";

const createUser= async(req,res)=>{
    try{
        const newUser =new userModel(req.body);
        const email = req.body.email
        //const {email} =req.body; data destructuring
        const userExsist = await userModel.findOne({email})
        if(userExsist){
            return res.status(400).json({message:"User already exists"})
        }
        else{
            const saveData=await newUser.save();
            return res.status(201).json({data:saveData,message:"User created successfully"})
        }

    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const getUser =async(req,res)=>{
    try{
        const userData =await userModel.find();
        if(!userData || userData.length === 0){
            return res.status(404).json({message:"No users found"})
        }
        else{
            res.status(200).json({data:userData,message:"Users fetched successfully"})
        }

    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

const getUserId = async(req,res)=>{
    try{
        //get from the parameters
        const id = req.params.id;
        const userExsist =await userModel.findById(id);

        if(!userExsist || userExsist.length === 0){
            return res.status(404).json({message:"User not found"})
        }
        else{
            return res.status(200).json({data:userExsist,message:"User fetched successfully"})
        }

    }catch(error){
        return res.status(500).json({message:error.message})
    }

}

const updateUser =async(req,res)=>{
    try{
        const id = req.params.id;
        const userExsist =await userModel.findById(id);
        if(!userExsist || userExsist.length === 0){
            return res.status(404).json({message:"User not found"})
        }
        else{                                                  
            const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {new: true});
            return res.status(200).json({data:updatedUser,message:"User updated successfully"})
        }

    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

const deleteUser =async(req,res)=>{
    try{
        const id = req.params.id;
        const userExsist =await userModel.findById(id);
        if(!userExsist || userExsist.length === 0){
            return res.status(404).json({message:"User not found"})
        }
        else{
            await userModel.findByIdAndDelete(id);
            return res.status(200).json({message:"User deleted successfully"})
        }

    }catch(error){
        return res.status(500).json({message:error.message})
    }

}

export  {createUser,getUser,getUserId ,updateUser ,deleteUser };