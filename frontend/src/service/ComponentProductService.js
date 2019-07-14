import axios from 'axios'

const API_URL = '${http://${process.env.BACK_IP}:8080/api/components}';

class ComponentProductService {
    getProductComponents(productId) {
        console.log("prod comp srvice prodId = ", productId);
        return axios.get(`${API_URL}/${productId}/components`);
    }

    addProductComponents(productId, componentProductDTO) {
        console.log("prod comp service prodId = ", productId, componentProductDTO);
        return axios.post(`${API_URL}/${productId}/components`, componentProductDTO);
    }
}

export default new ComponentProductService()