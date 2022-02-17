import Router from "express";
import path from "path"
import { spawn } from "child_process";


const router = Router();

router.get("/run", (request, response) =>{
    response.sendFile(path.join(__dirname, '../../client', 'index.html'));
})

router.post("/run", (request, response) => {
  const { queryDate, queryMessage } = request.body;

  let concateQueryDate = `-t ${queryDate}`;
  let concateQueryMessage = `-q ${queryMessage}`;

  let data1 = '';
   const python = spawn('python', ['D:/Masterclass/query-runner-node-python/src/infra/routes/script.py', concateQueryDate, concateQueryMessage]);
   python.stdout.on('data', function (data) {
      data1 = data.toString();
   });

   python.on('close', (code) => {
      console.log(`child process close all stdio with code ${code}`);
      response.send(data1)
   });
  
});

export { router };