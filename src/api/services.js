import api from './config';

export const productService = {
  getCategories: () => api.get('/categories'),
  getProducts: (params) => {
    if (params?.category) {
      return api.get(`/categories?slug=${params.category}`).then(async (catRes) => {
        const cat = catRes.data[0];
        if (cat) {
          return api.get(`/products?categoryId=${cat.id}`);
        }
        return { data: [] };
      });
    }
    return api.get('/products');
  },
  getProduct: (id) => api.get(`/products/${id}`),
};

export const authService = {
  register: (data) => api.post('/users', data),          // создание пользователя
  login: (email) => api.get(`/users?email=${email}`),   // поиск по email
};

export const orderService = {
  getOrders: (userId) => api.get(`/orders?userId=${userId}`),
  createOrder: (data) => api.post('/orders', data),
};

export const reviewService = {
  getByProduct: (productId) => api.get(`/reviews?productId=${productId}`),
  add: (data) => api.post('/reviews', data),
};