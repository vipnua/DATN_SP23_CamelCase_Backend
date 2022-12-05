
export const checkAuth = (request, response,next)=>{
    const isAdmin = true;
    if(isAdmin){
        console.log("xin chao admin")
        next()
    } else{
        console.log("ban khong co quyen truy cap")
    }
}