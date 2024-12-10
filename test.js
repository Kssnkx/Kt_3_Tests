const BaseRequest = require('./baseRequest.js'); 
const UserTests = require('./userTests');
const StoreTests = require('./storeTests');

const baseUrl = 'https://petstore.swagger.io/v2';
const baseRequest = new BaseRequest(baseUrl);

const userTests = new UserTests(baseRequest);

const userData = {
    id: 1,
    username: 'john_doe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: 'password123',
    phone: '123456789',
    userStatus: 1
};

async function runUserTests() {
    // Создание пользователя
    let response = await userTests.createUser(userData);
    console.log('Create User:', response.status, response.data);

    // Получение пользователя
    response = await userTests.getUser('john_doe');
    console.log('Get User:', response.status, response.data);

    // Обновление пользователя
    const newUserData = {
        id: 1,
        username: 'john_doe',
        firstName: 'John',
        lastName: 'Doe Updated',
        email: 'johndoeupdated@example.com',
        password: 'password12345',
        phone: '987654321',
        userStatus: 1
    };
    response = await userTests.updateUser('john_doe', newUserData);
    console.log('Update User:', response.status, response.data);

    // Удаление пользователя
    response = await userTests.deleteUser('john_doe');
    console.log('Delete User:', response.status, response.data);
}

// Store Tests
const storeTests = new StoreTests(baseRequest);

// Пример данных заказа
const orderData = {
    id: 1,
    petId: 1,
    quantity: 2,
    shipDate: '2024-10-01T14:30:00.000Z',
    status: 'placed',
    complete: true
};

async function runStoreTests() {
    // Создание заказа
    let response = await storeTests.placeOrder(orderData);
    console.log('Place Order:', response.status, response.data);

    // Получение заказа
    response = await storeTests.getOrder(1);
    console.log('Get Order:', response.status, response.data);

    // Удаление заказа
    response = await storeTests.deleteOrder(1);
    console.log('Delete Order:', response.status, response.data);

    // Получение инвентаря
    response = await storeTests.getInventory();
    console.log('Get Inventory:', response.status, response.data);
}

// Запускаем тесты
runUserTests();
runStoreTests();
