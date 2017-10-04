var myApp = angular.module('myApp', []);

myApp.controller('PageController', function ($http) {
    var vm = this;
    vm.gifs = {list: []};
    vm.getGifs = function () {
        $http({
            method: 'GET',
            url: '/giphy'
        }).then(function (response) {
            console.log('Got got', response);
            vm.gifs.list = response.data.data;
            console.log(vm.gifs.list);
        });
    }
    vm.getGifs();
});