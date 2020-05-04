import joi from '@hapi/joi';

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
    throw new Error(`Config validation error: ${error.message}`);
  }

  const config = {
    env: envVars.NODE_ENV || 'development',
    port: envVars.PORT,
  
  };

  return config;
};