import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com/',

});


api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');

    if (token){
        config.headers.Authorization = `Bearer ${token}`
    }
    
    return config;
}, 
    error => {
        return Promise.reject(error);
    }
);

// // Добавляем интерцептор для ответов
// api.interceptors.response.use(
//     response => {
//       // Обработка успешных ответов
//       return response;
//     },
//     error => {
//       // Обработка ошибок ответа
//       if (error.response && error.response.status === 401) {
//         // Например, перенаправление на страницу логина
//         window.location.href = '/login';
//       }
//       return Promise.reject(error);
//     }
//   );

export default api;
