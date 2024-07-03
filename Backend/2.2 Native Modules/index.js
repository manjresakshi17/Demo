const fs=require("fs");

// fs.writeFile("message.txt","hello from nodejs",(err) =>{
//     if(err) throw err;
//     console.log("the file has been saved!");

// });

fs.readFile('./message.txt',"utf8",(err,data) =>{    // utf8 for buffer error solve
    if(err)throw err;
    console.log(data);
});