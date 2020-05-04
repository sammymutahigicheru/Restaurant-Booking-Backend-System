import joi from '@hapi/joi';
import dotenv from 'dotenv';

dotenv.config();

const envVarsSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .allow('development', 'production', 'test', 'staging')
      .required(),
    PORT: joi.number().default(8080),
  })
  .unknown()
  .required();

export const getConfig = () => {
  const { error, value: envVars } = envVarsSchema.validate(process.env);

  if (error) {
    //throw new Error(`Config validation error: ${error.message}`);
    console.log(`Config validation error: ${error.message}`)
  }

  const config = {
    env: process.env.NODE_ENV || 'development',
    port: envVars.PORT,
  
  };

  return config;
};