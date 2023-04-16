const mssql = require('mssql');

const sqlConfig = {
    user: 'sa',
    password: 'sapassword',
    database: 'Test',
    server: 'localhost',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

(async () => {
    try {
        const pool = await mssql.connect(sqlConfig).then(() => console.log('MSSQL Connected'));
    } catch (error) {
        console.log(error);
    }

    
})();