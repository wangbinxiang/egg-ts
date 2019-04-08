// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClock from '../../../app/model/Clock';
import ExportControl from '../../../app/model/Control';
import ExportCounter from '../../../app/model/Counter';

declare module 'egg' {
  interface IModel {
    Clock: InstanceType<ExportClock>;
    Control: InstanceType<ExportControl>;
    Counter: InstanceType<ExportCounter>;
  }
}
