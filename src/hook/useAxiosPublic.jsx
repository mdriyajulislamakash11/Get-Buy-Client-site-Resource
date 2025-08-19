import axios from 'axios';


const asxiosPublic = axios.create({
    baseURL: 'http://localhost:5000/',

})

const useAxiosPublic = () => {
    
    
    
    
    return asxiosPublic;

};

export default useAxiosPublic;