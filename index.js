const LinkedList = require("./models/LinkedList");
const util = require("util");

const linkedList = new LinkedList();

// linkedList.prepend("a");
// linkedList.prepend("B");
// linkedList.append("3");
// linkedList.append("4");
// linkedList.prepend("C");
// linkedList.prepend("D");
// linkedList.prepend("B");
// linkedList.append("1");
// linkedList.append("2");
// linkedList.pop();
// linkedList.pop();
// linkedList.pop();
// linkedList.insertAt("baru", 1);
// linkedList.insertAt("new", 7);
// linkedList.insertAt("new", 0);

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(6);
linkedList.append(7);
linkedList.append(8);
linkedList.append(9);
linkedList.append(0);

// linkedList.removeAt(4);
linkedList.insertAt("at index 0", 4);

console.log(util.inspect(linkedList, { depth: null }));
// console.log(linkedList.size());
// console.log(linkedList.head());
// console.log(linkedList.tail());

// console.log(linkedList.at(5));
// console.log(linkedList.at(50));
// console.log(linkedList.at(-50));
// console.log(linkedList.contains("a"));
// console.log(linkedList.find("a"));
// console.log(linkedList.find("B"));
// console.log(linkedList.find("C"));
// console.log(linkedList.find("9"));
// console.log(linkedList.find("awaw"));
// console.log(linkedList.find("3"));
// console.log(linkedList.toString());
