

let initialData={
    data:[]
}

export const myReducer=(storeData=initialData,action)=>{


    if(action.type=="ADD")
    {
        return {...storeData,data:[...storeData.data,action.Payload]};
    }
    else{
        return storeData;

    }
  



}