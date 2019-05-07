// Update with your config settings.

module.exports = {

  development:{
    client:'pg',
    connection:'postgres://postgres:12345@localhost:5433/sibUTNDB'
  },
  test:{
    client:'pg',
    connection:'postgres://postgres:12345@localhost:5433/test-emuseoDB'
  }

 
};
