import mysql from 'mysql2/promise';

const pool = mysql.createPool({
//   host: process.env.DB_HOST ,
  
//   user: process.env.DB_USER ,
//   password: process.env.DB_PASSWORD ,
//   database: process.env.DB_NAME ,
host: "localhost" ,
  
user: "root" ,
password: "",
database: "msvcdb",
});
// console.log(pool);
const connectToDatabase = async () => {
  const connection = await pool.getConnection();
//   console.log(connection);
  return connection;
};

export default connectToDatabase;