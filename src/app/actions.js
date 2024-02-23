"use server"

export async function handleLogin(prevState,formdata){
    const data = formdata.get('emailOrNumber')
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const numberPattern = /^\d+$/;
    if(!data){
        return {error:404}
    }
    else if(data){
        if(emailPattern.test(data)){
            return{error:400}
        }
        else if(numberPattern.test(data)){
            return{error:401}
        }
        else{
            return{error:405}
        }
    }
}
export async function handleRegister(prevState,formdata){
    const emailOrNumber = formdata.get('emailOrNumber');
    const name = formdata.get('name');
    const password = formdata.get('password');
}