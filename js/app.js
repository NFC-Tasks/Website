var fb = new Firebase('https://nfc-tasks.firebaseio.com/');

var promptBox = window.prompt("test", "random");

fb.push({
  taskType: "test",
  taskInfo: {
    btAddress: "12345",
    text: "text",
  }
});
