import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';

const main = () => {
  const app = express();

  app.use(cors());

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}.`);
    // test
  });
};

main();
