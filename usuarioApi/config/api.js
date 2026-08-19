export const API = 'http://127.0.0.1:5000/v1/usuarios';

const USUARIO = 'admin';
const CONTRASENA = '1234';


const credenciales = 'YWRtaW46MTIzNA==';

export const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Basic ${credenciales}`,
};