import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bisto-boss-server-two.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;