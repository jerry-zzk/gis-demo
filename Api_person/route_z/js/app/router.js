define(
    // ['backbone','ap','animate','common','arc','canvas2','jcanvas','html2canvas','file'],
    ['backbone','ap','animate','common','jcanvas','html2canvas','canvas2','arc'],
    // function(Backbone,ap,animate,url,arc,canvas2,jcanvas,html2canvas,file) {
    function(Backbone,ap,animate,url,jcanvas,html2canvas,canvas2,arc) {

        var AppRouter = Backbone.Router.extend({

            initialize: function() {
                _.templateSettings = {
                    interpolate: /\$\{(.+?)\}/g
                };
                function printf() {
                  var as = [].slice.call(arguments),
                    fmt = as.shift(),
                    i = 0;
                  return fmt.replace(/%(\w)?(\d)?([dfsx])/ig, function(_, a, b, c) {
                    var s = b ? new Array(b - 0 + 1).join(a || '') : '';
                    if (c == 'd') s += parseInt(as[i++]);
                    return b ? s.slice(b * -1) : s;
                  });
                }
                var vector_basic = new ol.source.XYZ({
                    //url: url.map
                         tileUrlFunction: function(coordinate) {
                    //      // coordinate[0]= Math.abs(coordinate[0]);
                    //       //coordinate[1]= Math.abs(coordinate[1]);
                    //       //coordinate[2]= Math.abs(coordinate[2]);

                       var tilegrid = new ol.tilegrid.createXYZ();
                       var range = tilegrid.getFullTileRange(coordinate[0]);
                       var y = range.getHeight() + coordinate[2];
                       return url.IP+'/osm/' +
                         printf('%02d', coordinate[0]) + '/' +
                         printf('%03d', parseInt(coordinate[1] / 1000000)) + '/' +
                         printf('%03d', parseInt(coordinate[1] / 1000) % 1000) + '/' +
                         printf('%03d', parseInt(coordinate[1] % 1000)) + '/' +
                         printf('%03d', parseInt(y / 1000000)) + '/' +
                         printf('%03d', parseInt(y / 1000) % 1000) + '/' +
                         printf('%03d', parseInt(y) % 1000) + '.png';
                     },
                });
                var map = new ol.Map({
                    // target: 'map',
                    // layers: [
                    //     new ol.layer.Tile({
                    //         source: vector_basic
                    //             // source: new ol.source.OSM()
                    //     })
                    // ],
                    // interactions: new ol.interaction.defaults({
                    //     // doubleClickZoom:false,
                    //     // mouseWheelZoom:false,
                    // }),
                    // view: new ol.View({
                    //     /*全国*/
                    //     center: [13107725.325569931, 4872803.627360835],
                    //     zoom: 6,  
                    //     minZoom: 5,
                    //     maxZoom: 15
                    // }),
                    // controls: [
                    //     // new ol.control.Zoom(),

                    //     // new ol.control.MousePosition({
                    //     //     coordinateFormat: ol.coordinate.createStringXY(6),
                    //     //     projection: 'EPSG:4326'
                    //     // }),

                    //     // new ol.control.ScaleLine(),
                    //     // new ol.control.ZoomSlider(),
                    //     // new ol.control.ZoomToExtent()
                    // ],
                });
                window.map = map;
                this.map = map;
                // window.get_zoom = function(){
                //     return map.getView().getZomm();
                // };
            },
            routes: {
                "animate(/:name)": "animate"
            },
            execute: function(callback, args) {
                
                map.getLayers().forEach(function(e, i) {
                    //console.log("delete line");
                    if (e.get("title")) {
                        map.removeLayer(e);
                    }
                });  
                $(window.element).popover('destroy');
                if(window.popup)
                    this.map.removeOverlay(window.popup);
                map.un("moveend");
                map.un("click");
                if (callback) callback.apply(this, args);
              
            },
            animate:function(start_time,end_time,id,phone,name,type){
               
                var Animate = new animate(
                    this.map,
                    start_time,
                    end_time,
                    id,
                    phone,
                    name,
                    type
                );
            },
        });

        return AppRouter;
    });