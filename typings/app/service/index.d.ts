// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest = require('../../../app/service/Test');
import ExportTestClass from '../../../app/service/TestClass';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    testClass: ExportTestClass;
  }
}
