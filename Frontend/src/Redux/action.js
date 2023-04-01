


export const myAction=(data,dispatch)=>{

  dispatch({

    type:"ADD",
    Payload:data

  })


}

export const login_and_signup_handler=(data,dispatch)=>{

    return dispatch({

      type:"LOGIN_SIGNUP_HANDLER",
      Payload:data

    })

}

