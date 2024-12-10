class UserTests {
    constructor(baseRequest) {
        this.baseRequest = baseRequest;
    }

    async createUser(userData) {
        const endpoint = 'user';
        const response = await this.baseRequest.post(endpoint, userData);
        return response;
    }

    async getUser(username) {
        const endpoint = `user/${username}`;
        const response = await this.baseRequest.get(endpoint);
        return response;
    }

    async updateUser(username, newData) {
        const endpoint = `user/${username}`;
        const response = await this.baseRequest.put(endpoint, newData);
        return response;
    }

    async deleteUser(username) {
        const endpoint = `user/${username}`;
        const response = await this.baseRequest.delete(endpoint);
        return response;
    }
}

module.exports = UserTests;