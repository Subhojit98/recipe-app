export const useSessionStorage = (key: string) =>{
const setItem = (value: string[],key: string)=>{
    try{
        window.sessionStorage.setItem(key, JSON.stringify(value))
    }catch(error){
    console.log(error)
    }
}

const getItem = (key: string) =>{
    try {
    const item = window.sessionStorage.getItem(key)
        
    return item ? JSON.parse(item) : []
    } catch (error) {
        console.log(error)
    } 
}
    return {setItem,getItem}
}