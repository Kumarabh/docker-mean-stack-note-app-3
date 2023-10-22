# mkdir node-app

# cd node-app

# npm init -y

# npm install --save-dev ts-node

# npm install --save-dev typescript

# create tsconfig.json with below code
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}

# npm install --save express

# npm install --save-dev @types/express 

# create app.ts
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

Good luck !!!