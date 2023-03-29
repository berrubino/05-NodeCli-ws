const fs = require("fs");

module.exports = {
  pwd: function () {
    console.log(process.argv);
  },

  date: function (print) {
    print(Date());
  },

  ls: function (path, print) {
    if (path === undefined) path = ".";

    fs.readdir(path, function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        print(file.toString() + "\n");
      });
      print("prompt > ");
    });
  },

  echo: function (str, print) {
    print(str.slice(4));
  },
};
