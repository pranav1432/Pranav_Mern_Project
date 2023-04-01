

let initialData={
    data:[],
    login_signup_handler:false
}

export const myReducer=(storeData=initialData,action)=>{


    if(action.type=="ADD")
    {
        return {...storeData,data:[...storeData.data,action.Payload]};
    }
    else if(action.type=="LOGIN_SIGNUP_HANDLER")
    {
        return {...storeData,login_signup_handler:action.Payload}
    }
    else{
        return storeData;

    }
  



}