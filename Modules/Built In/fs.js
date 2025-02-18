//! const variableName = require('path')
//! const variableName = require("moduleName")
// const fs = require("fs");
// console.log(fs);

//! CRUD ON FILES IN SYNCHRONOUS(SYNC) WAY

//! 1) Creating a file
// method name ==> writeFileSync()
// syntax ==> fs.writeFileSync("filename/path", "data")
//? the first parameter is the path of the file and also the name
//? the second parameter is the data that we want to write
// you can give any extension of the file you want

// console.log("start");
// console.log("middle");
// fs.writeFileSync("./data.txt", "let a = 10");
// console.log("file created");
// console.log("end");

// console.log("start");
// console.log("middle");
// fs.writeFileSync("../data.txt", "let a = 10");
// console.log("file created");
// console.log("end");

//! create a file demo.java inside user defined folder
// now it has to be done

// fs.writeFileSync("../User Defined/demo.java", "let a =10");

//! 2) reading/ fetching a file synchronously
// method name ==> readFileSync()
// syntax ==> fs.readFileSync("path", "encoding")
//? path ==> path of the file which you want to read
//? encoding ==> todo

// console.log("start");
// let data = fs.readFileSync("./data.txt", "utf-8");
// console.log(data); // we can also use toString() to convert buffer into readable data
/* <Buffer 6c 65 74 20 61 20 3d 20
 31 30 0d 0a 0d 0a 6d 79 20 6e 
61 6d 65 20 69 73 20 62 6c 61 6
8 20 62 6c 61 68 20 62 6c 61 68
> it is an array, if we want to convert this buffer value into a readable data */
// console.log("file read");
// console.log("middle");
// console.log("end");

// let myName = "abc";
// console.log(myName); // abc
// console.log("myName"); // myName

// ? copy the contents of "fs.js" and paste it into new file "app.js" in the current folder

// let data = fs.readFileSync('./fs.js', "utf-8");
// console.log(data);

//! const variableName = require('path')
//! const variableName = require("moduleName")
// const { create } = require("domain");
// const fs = require("fs");
// console.log(fs);

//! CRUD ON FILES IN SYNCHRONOUS(SYNC) WAY

//! 1) Creating a file
// method name ==> writeFileSync()
// syntax ==> fs.writeFileSync("filename/path", "data")
//? the first parameter is the path of the file and also the name
//? the second parameter is the data that we want to write
// you can give any extension of the file you want

// console.log("start");
// console.log("middle");
// fs.writeFileSync("./data.txt", "hey, my name is abc");
// console.log("file created");
// console.log("end");

// console.log("start");
// console.log("middle");
// fs.writeFileSync("../data.txt", "let a = 10");
// console.log("file created");
// console.log("end");

//? in writeFileSync(), if the file is not present then it will create one file with the given data,
//? if the file is present, then the contents of the file will be overwritten with the new passed data

//! create a file demo.java inside user defined folder
// now it has to be done

// fs.writeFileSync("../User Defined/demo.java", "let a =10");

//! 2) reading/ fetching a file synchronously
// method name ==> readFileSync()
// syntax ==> fs.readFileSync("path", "encoding")
//? path ==> path of the file which you want to read
//? encoding ==> the data type which we want to display

// console.log("start");
// let data = fs.readFileSync("./data.txt"); // os --> source
// console.log(data); // 10 secs console --> destination
// /* <Buffer 6c 65 74 20 61 20 3d 20
//  31 30 0d 0a 0d 0a 6d 79 20 6e
// 61 6d 65 20 69 73 20 62 6c 61 6
// 8 20 62 6c 61 68 20 62 6c 61 68
// > it is an array, if we want to convert this buffer value into a readable data */
// // buffer ==> [ 6c, 65, 74, 20......... ]
// // to convert buffer value to readable data use toString()
// // streams and buffer
// console.log(data.toString());
// console.log("file read");
// console.log("middle");
// console.log("end");

// console.log("start");

// let data = fs.readFileSync("./data.txt", "utf-8");
// // utf ==> unicode transformation format
// // buffer --> array of values which is not in readable format
// console.log(data);

// console.log("middle");
// console.log("end");

// let myName = "abc";
// console.log(myName); // abc
// console.log("myName"); // myName

//! 3) appending/ updating a file synchronously
// updating -->  1) add something  2) modify the existing data (this is not possible with this method, partial modification is not possible)
// append --> add some data at the end of something
// method name ==> appendFileSync()
// syntax ==> fs.appendFileSync("path", "data")
//? path ==> path of the file which you want to update
//? data ==> new data to be added

// console.log("start");
// console.log("middle");

// fs.appendFileSync("./data.txt", "\n this is my added statement"); // previous contents will not be over written
// console.log("file updated/ appended");

// console.log("end");

//!4)  deleting a file
// method name ==> unlinkSync()
// syntax ==> fs.unlinkSync("path")

// console.log("start");
// console.log("middle");

// fs.unlinkSync("./data.txt");
// console.log("file deleted");

// console.log("end");

//! ques ==> copy the contents of "fs.js" and paste it into new file "app.js" in the current folder
// let payload = fs.readFileSync("./fs.js", "utf-8");
// console.log(payload);
// fs.writeFileSync("./app.js", payload);
// console.log("file has been copied");

//! === operations that can be performed on folders ==> create, delete or update

//! 5) creating a folder
// method name ==> mkdirSync() ==> make directory/ folder
// syntax ==> fs.mkdirSync("path/folderName")

// console.log("Start");
// fs.mkdirSync("./demo");
// console.log("middle");
// console.log("end");

//? create a server folder inside this Demo folder
// fs.mkdirSync("../../Demo/Server");
// console.log("folder created");
// ~/Desktop/Node 0700 ......../built in

//! 5) deleting a folder
// method name ==> rmdirSync()
// syntax ==> fs.rmdirSync("path/folderName")

// console.log("Start");
// console.log("middle");
// fs.rmdirSync("./demo");
// console.log("folder deleted");
// console.log("end");

//! 6) renaming a folder/file
// method name ==> renameSync()
// syntax ==> fs.renameSync("oldPath", "newPath")

// fs.renameSync("./app.js", "./server.txt"); // file renaming
// fs.renameSync("./demo", "./html"); // folder renaming

//! ========== asynchronous execution ==================

//! === using callbacks ===

//! 1) creating a file
// method name ==> writeFile()
// syntax ==> fs.writeFile("path/filename", "data", callback function)

// console.log("Start");

// fs.writeFile("./demo.py", "let a = 10", (err) => {
//   // error first callbacks
//   if (err) console.log(err);
//   console.log("file created");
// }); // () => {} it is a callback function

// //! error first callbacks ==> error first callbacks are used to handle errors in asynchronous execution, where the first parameter is the error

// console.log("middle");
// console.log("end");

// fs.writeFile("./demo.py", "let b = 10", (err) => {
//   // error first callbacks
//   if (err) console.log(err);
//   console.log("file created");
// });

// //? in writeFileSync(), if the file is not present then it will create one file with the given data,
//? if the file is present, then the contents of the file will be overwritten with the new passed data

//! WHILE CREATING A FOLDER, AND IT ALREADY EXISTS THEN IT WILL THROW AN ERROR, ON THE OTHER HAND WHILE CREATING A FILE AND IT ALREADY EXISTS THEN IT WILL OVER WRITE THE EXISTING FILE

//! 2) fetching/ reading a file
// method name ==> readFile()
// syntax ==> fs.readFile("path", "encoding", cb)

// console.log("start");

// fs.readFile("./demo.java", "utf-8", (err, data) => {
//   if (err) console.log(err);

//   console.log(data);
//   console.log("file read");
// });

// console.log("middle");
// console.log("end");

//! 3) updating/ appending a file
// method name ==> appendFile()
// syntax ==> fs.appendFile("path", "data", cb)

// console.log("start");

// fs.appendFile("./demo.py", `\nmyname="abc"`, (err) => {
//   // ``==> template literals/ backticks
//   if (err) console.log(err);

//   console.log("file updated");
// });

// console.log("middle");
// console.log("end");

//! 4) deleting a file
// method name ==> unlink()
// syntax ==> fs.unlink("path", cb)

// fs.unlink("./demo.py", (err) => {
//   if (err) console.log(err);
//   console.log("file deleted");
// });

//! 5) creating a folder
// method name ==> mkdir()
// syntax ==> fs.mkdir("path/folderName", cb)

// fs.mkdir("./css", (err) => {
//   if (err) console.log(err);
//   console.log("folder created");
// });

//! 6) deleting a folder

// method name ==> rmdir()
// syntax ==> fs.rmdir("path/folderName", cb)

// fs.mkdir("./css", (err) => {
//   if (err) console.log(err);
//   console.log("folder created");
// });


//! 7) renaming a folder/file
// method name ==> rename()
// syntax ==> fs.rename("old path", "new path", cb)

// fs.mkdir("./css", "./varun",  (err) => {
//   if (err) console.log(err);
//   console.log("folder created");
// });

// github.com/utk-281/node_0700

// ? ====== file by promise way asynchronous =======
// Promises are used to handle asynchronous execution

let fs = require('fs').promises;
// let fs = require('fs/promises');
//  It means that whenever we are going to use the methods of fs, it will be returning a promise

// ! 1. Creating a file

// let value = fs.writeFile('./index.html', "<h1>hello world</h1>")
// console.log(value);

// value.then((abc) =>{
//   // promise is not giving me a value
//   // console.log(abc) // undefined
//   console.log("file created")
// }).catch((err) =>{
// console.log(err);
// })


// !2 reading a file
// method name ==> readFile()
// Syntax: fs.readFile("path", "encoding");

// let value = fs.readFile("../../Demo/javascript.js", "utf-8"); // value = {promise: pending}
// value.then((data)=>{
//   // if the promise contains any kind of value
//    console.log(data);
// }).catch((err) =>{
//   console.log(err);
// })

// updating a file

//  method name ==> appendFile()
// Syntax: fs.appendFile("path", "data" )

let val = fs.appendFile("../../Demo/sample1.java", "this side varun dhiman from ludhiana")
val.then(() =>{
  console.log("file updated")
}).catch((err) =>{
  console.log(err);
})


// ? if we are using appendFile() and the file that we are updating exists then it will simply add the data
// ? if the file dne then it will create the one file with the given data. 

// ! deleting a file
//  method name  ====> unlink()
// syntax: fs.unlink("path");

// fs.unlink("./index.html").then(() =>{
//   console.log("file deleted");
// }).catch((err) =>{
//   console.log(err);
// })


// !  creating a folder
// method name ====> mkdir
//  syntax: mkdir("folderName/path")

// fs.mkdir("./sample").then(() =>{
//   console.log("folder created");
// }).catch((err) =>{
//   console.log(err)
// })

// ! deleting a folder

// method name ====> rmdir
//  syntax: fs.rmdir("folderName/path")

// fs.rmdir("./sample").then(() =>{
//   console.log("folder deleted");
// }).catch((err) =>{
//   console.log(err)
// })

// ! renaming a folder

// method name ====> rename()
//  syntax: fs.rename("old path", "new path");

// fs.rename("./sample", "./sample1").then(() =>{
//   console.log("folder renamed");
// }).catch((err) =>{
//    console.log(err);
// })

// fs.rename("../../Demo/sample.java", "../../Demo/sample1.java").then(() =>{
//   console.log("folder renamed");
// }).catch((err) =>{
//    console.log(err);
// })



// ! Task:

// ? Synchronus way

// const fs = require('fs');

// fs.mkdirSync("./BlogApp");
// console.log("folder created");

// fs.mkdirSync("./BlogApp/backend");

// fs.mkdirSync("./BlogApp/backend/controller");

// fs.writeFileSync("./BlogApp/backend/controller/userConroller.js", "hi this is controller");

// ? Asynchronous way 
// fs.mkdir("./BlogApp2", (err) =>{
//   if(err) console.log(err);
//   else {
//   fs.mkdir("./BlogApp2/backend", (err) =>{
//   if(err) console.log(err);
//   else {
//     fs.mkdir("./BlogApp2/backend/controller", (err) =>{
//   if(err) console.log(err);
//   else {
//     fs.writeFile("./BlogApp2/backend/controller/userController2.js", "this is blogApp ", (err) =>{
//       if(err) console.log(err)
//        else console.log("file created")
//     })
//   }  
//    })
//   }
//   })
// }
// });
