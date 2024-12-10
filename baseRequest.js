const axios = require('axios');

class BaseRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(endpoint, params = {}, headers = {}) {
        const url = `${this.baseUrl}/${endpoint}`;
        try {
            const response = await axios.get(url, { params, headers });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    async post(endpoint, data = {}, headers = {}) {
        const url = `${this.baseUrl}/${endpoint}`;
        try {
            const response = await axios.post(url, data, { headers });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    async put(endpoint, data = {}, headers = {}) {
        const url = `${this.baseUrl}/${endpoint}`;
        try {
            const response = await axios.put(url, data, { headers });
            return response;
        } catch (error) {
            return error.response;
        }
    }

    async delete(endpoint, headers = {}) {
        const url = `${this.baseUrl}/${endpoint}`;
        try {
            const response = await axios.delete(url, { headers });
            return response;
        } catch (error) {
            return error.response;
        }
    }
}

module.exports = BaseRequest;






