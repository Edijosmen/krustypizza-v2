import Service from './Service.js';

const resourceRegister = 'account/api/register';
const resourceLogin = 'auth/';


export default {
    register(user) {

        return Service.post(resourceRegister,{
            username: user.userName,
            password: user.password,
            first_name: user.nombre,
            last_name: user.apellido
         },{
        headers: {
          'Content-Type':'application/json',
          //"Authorization": "JWT " + localStorage.getItem("token")
        }
        })
    },

    login(user){
        return Service.post(resourceLogin,{
            username: user.nombre,
            password: user.password
          },{
            headers: {
              'Content-Type':'application/json',
            }
          })
    }
}