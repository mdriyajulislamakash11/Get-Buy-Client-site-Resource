import axios from 'axios';


const asxiosPublic = axios.create({
    baseURL: 'https://get-buy-server.vercel.app/',

})

const useAxiosPublic = () => {
    
    
    
    
    return asxiosPublic;

};

export default useAxiosPublic;