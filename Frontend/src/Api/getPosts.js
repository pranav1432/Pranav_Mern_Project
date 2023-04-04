
const baseUrl ="http://localhost:3001/api/"

export const getPosts=async()=>{

    try{
        let res=await fetch(baseUrl+"getallposts",{
            method:"GET",
            headers:{
                token:localStorage.getItem("token")
            }
        })
    
        let data=res.json();
        return data;

    }catch(err)
    {
        alert(err.message);
    }


}