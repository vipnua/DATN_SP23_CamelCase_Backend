import User from "../models/user";
export const signup = async(request, response) =>{
const{name, email,phone,password, roll} = request.body
try {
    const exitsUser = await User.findOne({email}).exec()
    if(exitsUser){
        return response.status(400).json({
            message:"User da ton tai"
        })
    }
    const user = await User({name, email,phone,roll,password}).save()
    response.json({
        user:{
            _id:user._id,
            name: user.name,
            email:user.email,
            roll:user.roll,
            phone:user.phone,
            password:user.password
        }
    })
} catch (error) {
    console.log(error);
}
}
export const signin = async (request,response)=>{
    const {email,password} = request.body
    const user = await User.findOne({email}).exec()
    if(!user){
        return response.status(400).json({
            message:"User không tồn tại"
        })
    }
    if(!user.authenticate(password)){
        return response.status(400).json({
            message:"Mật khẩu không chính xác"
        })
    }
    response.json({
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            roll:user.roll,
            phone:user.phone
        }
    })
}

export const listUser = async (request,response)=>{
    try{
        const user = await User.find().exec()
        response.json(user)
  
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}

export const deleteUser = async (request,response)=>{
    try{
        const user = await User.findOneAndDelete({_id:request.params.id}).exec()
    response.json(user);
    }catch(error){
        response.status(400).json({message:"Không xóa duoc"})
    }
}   

export const detailUser = async (request,response)=>{
    try{
        const user = await User.findOne({_id:request.params.id}).exec()
        response.json(user)
    }catch(error){
        response.status(400).json({message:"Khong tim thay data"})
    }
}