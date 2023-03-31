const connection = require('./connection');

const getAll = async () => {
  const tasks = await connection.execute('SELECT * FROM taskas');
  return tasks;
};

module.exports = {
  getAll
};
