import { commontEnvironment } from './environment.common';

const env: Partial<typeof commontEnvironment> = {
  titleApp: 'MiguApp-Development',
};
export const environment = {
  ...commontEnvironment,
  ...env,
};
