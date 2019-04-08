import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554268820659_4782';

  // add your egg config in here
  config.middleware = [];

  config.controller = {
    ctrlDir: [
      path.join('app', 'controller') as string,
      path.join('app', 'module', 'auth', 'controller') as string
    ]
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
