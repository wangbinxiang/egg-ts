import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  aop: {
    enable: true,
    package: 'egg-aop'
  },
  controller: {
    enable: true,
    package: 'egg-controller',
  }
};

export default plugin;
