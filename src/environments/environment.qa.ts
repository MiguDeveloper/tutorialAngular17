import { commontEnvironment } from './environment.common';

const env: Partial<typeof commontEnvironment> = {
  titleApp: 'MiguApp-QA',
  domain: 'https://fakestoreapi-qa.com',
};
export const environment = {
  ...commontEnvironment,
  ...env,
};
