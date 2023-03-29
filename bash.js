const commands = require("./commands");

const print = function (str) {
  process.stdout.write(str);
};

// Un prompt como output
print("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim(); // Remueve la nueva línea
  let comando = cmd.split(" ");

  if (comando[0] === "pwd") commands.pwd(print);
  if (comando[0] === "date") commands.date(print);
  if (comando[0] === "ls") commands.ls(comando[1], print);
  if (comando[0] === "echo") commands.echo(cmd, print);
  print(".\nprompt > ");
});
