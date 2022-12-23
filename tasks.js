let taskArr = [];

/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (text.trim().split(" ")[0] === "hello") {
    hello(text);
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    console.log(list());
  } else if (text.trim().split(" ")[0] === "add") {
    add(text);
  } else if (text.trim().split(" ")[0] === "remove") {
    remove(text);
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function hello(c) {
  console.log("" + c.trim() + "!");
}

/**
 * prints all commends for help
 *
 * @returns {void}
 */
function help(text) {
  console.log(
    " hello\n hello x\n list\n add\n remove\n remove 1\n remove 2\n quit\n exit"
  );
}

/**
 * Prints tasks
 *
 * @returns {void}
 */
function list() {
  console.log(taskArr.map((e, i) => `${i + 1}. ${e}`).join("\n"));
}

/**
 * add tasks
 *
 * @returns {void}
 */
function add(text) {
  if (text.trim().split(" ").length === 1) {
    console.log("you need to write a task!");
  } else {
    taskArr.push(text.replace("add", ""));
  }
}
/**
 * remove task
 *
 * @returns {void}
 */
function remove(text) {
  if (text.trim().split(" ").length === 1) {
    taskArr.splice(-1);
  } else if (text.trim().split(" ")[1] === "1") {
    taskArr.shift();
  } else if (text.trim().split(" ")[1] === "2") {
    taskArr.splice(1, 1);
  }
}
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Fatima");
