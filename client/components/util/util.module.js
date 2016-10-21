'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('cucumberstackApp.util', [])
  .factory('Util', UtilService)
  .name;
