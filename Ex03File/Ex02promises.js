const fs = require('fs').promises
// promises : 비동기 처리 시 콜백함수에 늪에 빠지는 단점을 보완

fs.readFile('./file1.txt')
.then((data)=>{
    //작업 성공
    console.log(data.toString());
})
.catch((err)=>{
    //오류 발생
    console.log(err);
})
