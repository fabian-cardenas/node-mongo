//==============
// Puerto
//==============
process.env.PORT = process.env.PORT || 3000;

// ======================
// ENTORNO
// ======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ======================
// Vencimioento del token
// ======================

// 60 segundosa
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ======================
// Seed de autenticacion
// ======================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//========================
// BASE DE DATOS
// =======================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//========================
// Google Client ID
// =======================

process.env.CLIENT_ID = process.env.CLIENT_ID || '943882552662-47ed2bs6dh0b4thgfq6i1v662bnuc6aq.apps.googleusercontent.com';