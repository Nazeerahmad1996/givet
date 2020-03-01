// /**
//  *  Init FeathersJs
//  * **/

// // import feathers from "@feathersjs/feathers";
// // import auth from "@feathersjs/authentication-client";
// // import rest from "@feathersjs/rest-client";
// // import axios from "axios";

// const restClient = rest('http://173.249.40.233:3030');
// const api = feathers();

// axios.interceptors.request.use(request => {
//     console.log('Starting Request', request);
//     return request
// });
// api.configure(restClient.axios(axios)).configure(
//     auth({
//         path: '/api/authentication',
//         //storage: window.localStorage
//         storage: window.sessionStorage
//     })
// );

// api.debug = true;

// /**
//  *  Register FeathersJs Services
//  * **/

// function addService(name, alias) {
//     api.use(name, api.service(name));
//     if (alias) {
//         api.use(alias, api.service(name));
//     }
// }

// addService("/api/authentication");
// addService("/api/orders");
// addService("/api/users");
// addService("/api/users/:id/tickets");
// addService("/api/users/:id/wallet");
// addService("/api/users/:id/tree-view");
// addService("/api/sell_ticket");
// addService("/api/buy_ticket");
// addService("/api/packs");

// export default api;