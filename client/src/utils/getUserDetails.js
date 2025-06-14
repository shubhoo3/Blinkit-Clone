import Axios from "./Axios"
import SummaryApi from "../configApi/SummaryApi"

const getUserDetails = async () => {
    try {
        const response = await Axios({
            ...SummaryApi.userDetails,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // token
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('AxiosError:', error.response?.data || error.message);
    }
};

export default getUserDetails
