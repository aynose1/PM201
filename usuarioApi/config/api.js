export const API = 'http://192.168.137.1:5000/v1/usuarios';

const USUARIO = 'admin';
const CONTRASENA = '1234';


const credenciales = 'YWRtaW46MTIzNA==';

export const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Basic ${credenciales}`,
};