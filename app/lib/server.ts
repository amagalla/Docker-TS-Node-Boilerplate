import express, { Application, Request, Response } from 'express';

const app: Application = express();

const PORT = 3000;

app.get('/welcome', (req: Request, res: Response) => {
  console.log('Have fun building stuff!!');
  res.send(`Hello from typescript node`);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
