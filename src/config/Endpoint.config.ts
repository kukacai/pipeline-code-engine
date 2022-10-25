import * as dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT ?? 3000, // VCAP_PORT if running on Cloud Foundry
  host: process.env.HOST ?? 'localhost', // VCAP_HOST if running on Cloud Foundry
};
