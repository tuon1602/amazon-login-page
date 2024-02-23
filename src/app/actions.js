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
    }
}