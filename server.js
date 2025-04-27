const express = require('express');
const sql = require('mssql');

const app = express();
const port = process.env.PORT || 3000;

const connectionString = process.env.DatabaseConnection;

const config = {
     user: '<your-username>',
     password: '<your-password>',
     server: '<your-database-name>.database.windows.net',
     database: '<your-database-name>',
     options: {
         encrypt: true,
         trustServerCertificate: false,
     }
};

sql.connect(config)
     .then(pool => {
         console.log('Connected to the database');
         return pool;
     })
     .catch(err => {
         console.error('Database connection failed:', err);
     });

app.get('/', (req, res) => {
     res.send('Hello, Narmadha! Your app is live!');
});

app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
});
