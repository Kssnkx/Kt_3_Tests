class StoreTests {
    constructor(baseRequest) {
        this.baseRequest = baseRequest;
    }

    async placeOrder(orderData) {
        const endpoint = 'store/order';
        const response = await this.baseRequest.post(endpoint, orderData);
        return response;
    }

    async getOrder(orderId) {
        const endpoint = `store/order/${orderId}`;
        const response = await this.baseRequest.get(endpoint);
        return response;
    }

    async deleteOrder(orderId) {
        const endpoint = `store/order/${orderId}`;
        const response = await this.baseRequest.delete(endpoint);
        return response;
    }

    async getInventory() {
        const endpoint = 'store/inventory';
        const response = await this.baseRequest.get(endpoint);
        return response;
    }
}

module.exports = StoreTests;