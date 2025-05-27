import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const clientId = "Rp0tlHApxfzeVwSH2s8HjmER9WQdT8XnqE5Fc_NPBHw"

 export const fetchImages = async (topic, Currentpage) => {
     const response = await axios.get('/search/photos', {
        
         headers: {
             Authorization: `Client-ID ${clientId}`,
         },
         params: {
             query: topic,
             page: Currentpage,
             per_page: 12,
             
    
         }
     });
     console.log("Response data:", response.data);

     return {
       photos: response.data.results,
       totalPages: response.data.total,
     };
}
