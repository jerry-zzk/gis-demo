requirejs.config({
    //路径依照html的相对路径
    baseUrl: './js', //assets
    //清除缓存
    urlArgs: "bust=" + (new Date()).getTime(),
    //路径依照baseUrl的相对路径 结尾不加.js
    paths: {

        jquery: './lib/jquery.min',
        underscore: './lib/underscore_debug',
        backbone: './lib/backbone',
        bootstrap:'./lib/bootstrap/js/bootstrap.min',
        ap:'./app/ap1',
        // ap:'./app/ap',
        arc:'./lib/arc',
        canvas2:'./lib/canvas2',
        jcanvas:'./lib/jcanvas.min',
        html2canvas:'./lib/html2canvas.min',
        // file:'./lib/file',

        router: './app/router',
        animate: './app/animate',
        common: './app/common',
        mapv:'./lib/mapv',
        olmap:'./lib/olmap'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap:{
            deps: [
                'jquery'
            ],
        },
        'ap':{
            exports: 'ap'
        // }
        },
        'arc':{
            exports: 'arc'
        },
        'mapv':{
            exports: 'mapv'
        },
        'olmap':{
            exports: 'olmap'
        }
        // 'canvas2':{
        //     deps: [
        //         'jquery'
        //     ],
        //     exports: 'canvas2'
        // },
        // 'jcanvas':{
        //     deps: [
        //         'jquery'
        //     ],
        //     exports: 'jcanvas'
        // },
        // 'html2canvas':{
        //     deps: [
        //         'jquery'
        //     ],
        //     exports: 'html2canvas'
        // },
        // 'file':{
        //     deps: [
        //         'jquery'
        //     ],
        //     exports: 'file'
        // }
    }
});

requirejs([
    'jquery',
    'router',
], function($, router) {
    var app_router = new router();
    Backbone.history.start();
});