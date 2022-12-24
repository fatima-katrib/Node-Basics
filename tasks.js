let tasks = [
  {
    task: "do my hw",
    done: true,
  },
];

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
  const textVerb = text.trim().split(" ")[0];
  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (textVerb === "hello") {
    hello(text);
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    console.log(list());
  } else if (textVerb === "add") {
    add(text);
  } else if (textVerb === "remove") {
    remove(text);
  } else if (textVerb === "edit") {
    edit(text);
  } else if (textVerb === "check") {
    check(text);
  } else if (textVerb === "uncheck") {
    uncheck(text);
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
  tasks.map((e, i) => {
    e.done === true
      ? console.log(`[✓] ${i + 1}. ${e.task}`)
      : console.log(`[ ] ${i + 1}. ${e.task}`);
  });
}

/**
 * add tasks
 *
 * @returns {void}
 */
function add(text) {
  text.trim().split(" ").length === 1
    ? console.log("you need to write a task!")
    : tasks.push({ task: text.replace("add", "").trim(), done: false });
}

/**
 * remove task
 *
 * @returns {void}
 */
function remove(text) {
  if (text.trim().split(" ").length === 1) {
    tasks.splice(-1);
  } else if (text.trim().split(" ").length > tasks.length) {
    console.log("enter valid number after remove");
  } else {
    tasks.splice(parseInt(text.trim().split(" ")[1]) - 1, 1);
  }
}

/**
 * edit task
 *
 * @returns {void}
 */
function edit(text) {
  if (text.trim().split(" ").length === 1) {
    console.log("enter a valid command");
  } else if (isNaN(parseInt(text.trim().split(" ")[1]))) {
    tasks[tasks.length - 1].task = text.replace("edit ", "").trim();
    console.log("last task is edited");
  } else {
    if (text.trim().split(" ")[1] > tasks.length) {
      console.log("enter valid number after edit");
    } else {
      tasks[parseInt(text.trim().split(" ")[1]) - 1].task = text.substring(
        6,
        text.length
      );
      console.log("tasks are edited");
    }
  }
}

/**
 * check tasks
 *
 * @returns {void}
 */
function check(text) {
  text.trim().split(" ").length === 1
    ? console.log("you need to write task number!")
    : (tasks[parseInt(text.trim().split(" ")[1]) - 1].done = true);
}

/**
 * check tasks
 *
 * @returns {void}
 */
function uncheck(text) {
  text.trim().split(" ").length === 1
    ? console.log("you need to write task number!")
    : (tasks[parseInt(text.trim().split(" ")[1]) - 1].done = false);
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
