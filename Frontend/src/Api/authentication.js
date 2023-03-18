const baseUrl ="http://localhost:3001/api/"


export const signup=async(input)=>{

    try{
    let res= await fetch(baseUrl+"signup",{

        method:"POST",
        body:JSON.stringify(input),
        headers:{
            "Content-Type":"application/json"
        }


    });

    let data=await res.json();

    return data;
    
    }catch(err){

       console.log(err);

    }



}
export const login=async(input)=>{

    try{
    let res= await fetch(baseUrl+"login",{

        method:"POST",
        body:JSON.stringify(input),
        headers:{
            "Content-Type":"application/json"
        }

    });

    let data=await res.json();

    return data;
    
    }catch(err){

       console.log(err);

    }



}