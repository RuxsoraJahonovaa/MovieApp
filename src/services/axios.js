import axios from "axios";


const baseUrl= "https://api.themoviedb.org/3";
const token= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2JiMjE0ZjE4YzI4YTEyZGM5YTk4NmFmOTI1OWQwYSIsInN1YiI6IjY1YzFhNTk5Y2U5OTdhMDE4ODJmMGE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zMvfY7mdcgX2d-TPeRMzoMCgtsRXhHW4oauTH1wh-nI";



 export const privateApi= axios.create({
    baseURL:baseUrl,
    
})


privateApi.interceptors.request.use(async(config)=>{
    return {
        ...config,
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
        }
    }

})


privateApi.interceptors.response.use(
    (response)=>{
        if(response && response.data) return response.data;
        return response;
    },
    (error)=>{
        if(error.response.status){
            throw error.response.data;
        }

return Promise.reject(error)

    }
)


