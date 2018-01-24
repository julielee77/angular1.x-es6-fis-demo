/**
 * @file - app.home index
 * @author lihaizhu
 * @since 2017/01/16
 */
import angular from 'angular';
import homeRoutes from './homeRoutes';
import HomeCtrl from './HomeCtrl';

let homeModule = angular.module('app.home', []);
homeModule.config(homeRoutes);

// controllers
homeModule.controller('HomeCtrl', HomeCtrl);

// components ...
// services ...

export default homeModule.name;
