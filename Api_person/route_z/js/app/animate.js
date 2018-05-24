// define(['backbone', 'common', 'ap', 'bootstrap', 'arc', 'html2canvas', 'canvas2', 'jcanvas', 'file'],
define(['backbone', 'common', 'bootstrap','ap','jcanvas','html2canvas', 'canvas2', 'arc'],
  // function(Backbone, urlss, ap, bootstrap, arc, html2canvas, canvas2, jcanvas, file) {
  function(Backbone, urlss, bootstrap,ap,jcanvas, html2canvas, canvas2, arc) {
    var animate = Backbone.View.extend({
        el: '#map',
        initialize: function(map,name){

            window.map = map;
            this.map = map;
            
            window.name = this.name = (name != undefined && name != null) ? name : "天津";
            // console.log(window.name);

            // this.map.removeLayer(layer);
            // this.map.addLayer(layer);
            this.render();
        },
        render: function() {
            var name = this.name;
            // console.log(name);
            var center = [13107725.325569931, 4872803.627360835];
            //var center = ol.proj.fromLonLat([data.lng, data.lat]);
            // $.get(
            //   urlss.getCenterPoint,
            //   function(data) {
            //     if (data.status == 0) {       
            //       // console.log(12); 
            //       map.setView(new ol.View({
            //          center: ol.proj.fromLonLat([data.lng, data.lat]),
            //           //center:[13279323.709641118,3008895.8453032863],
            //         zoom: 13
            //       }));
            //     }else{
            //       map.setView(new ol.View({
            //           center:[12505097.262160545, 4571136.787094675],
            //         zoom: 13
            //       }));  
            //     }
            //   },
            //     'json'
            // )

            // 实例化
            
            var o = new tool();


            var u = 'http://127.0.0.1';
            // var name = "map";
            // var la =[];
            // var z = '';
            // var z1 = 5;
            // var z2 = 15;
            o.drawMap({
              url: u,
              // center: ol.proj.fromLonLat([])
              // source: new ol.source.OSM()
            });

            


            // $('.css_animation').hide();
            // $('#pointAni').on('click',function(){
            //     // document.createElement(div);
            //     // div.id = '';
            //    // o.clearLayer();
            //    $('.css_animation').show();
            //    // o.drawPointOne([120.34836599999998, 40.97956500000001],10,"green","blue");
            //    // o.flickerPoint([120.34836599999998, 40.97956500000001]);
            //    o.flickerPoint([120.34836599999998, 40.97956500000001]);
            //    // o.clearLayer();
            // });
            // o.drawPointOne([126.348366, 39.979565],5,"#000","#000");
            // 
            // 
            // o.drawPointOne({
            //   // pointCoordinate: [106.348366,39.979565]
            //   radius: 15,
            //   Scolor: 'blue',
            //   Fcolor: 'yellow',
            // });

            // o.drawLine({
            //   // urlImage: 'http://127.0.0.1/map/image/arrow.png',
            //   startCoordinate: [117.7487, 40.0472],
            //   endCoordinate: [113.00376, 28.15285]
            // });
            


//             // //点击点 自己进行操作
            var uu = 'http://127.0.0.1/ggpp/json/getStation.json';
            var st = new ol.style.Style({
                image: new ol.style.Icon({
                    anchor: [0.5, 1],
                    src: 'http://127.0.0.1/route_z/image/point.gif'
                })
            });

            var fun = function(){
              // alert("我愛你");
                console.log("这里你自己写的操作");
            }
            // o.clickPoint(uu,st,fun);

//             // var point_div = document.getElementById("css_animation");
//             // var point_overlay = new ol.Overlay({
//             //     element: point_div
//             // });
//             // map.addOverlay(point_overlay);
//             // point_overlay.setPosition(ol.proj.fromLonLat([120.348366, 40.979565]));



//             // function pointLight(){
//             //   var f = new ol.Feature({ 
//             //       geometry: new ol.geom.Point(ol.proj.transform([126.348366, 39.979565], 'EPSG:4326', 'EPSG:3857')), //设置点位置
//             //       featuretype: 'point'
//             //   });
//             //   var sourceVector = new ol.source.Vector({
//             //       features: [f]
//             //   });
//             //   var layer = new ol.layer.Vector({
//             //       title:"title",
//             //       source: sourceVector,
//             //       //样式
//             //       style: new ol.style.Style({
//             //         image: new ol.style.Circle({
//             //             radius: 5,
//             //             stroke: new ol.style.Stroke({
//             //                 color: arr[i]
//             //             }),
//             //             fill: new ol.style.Fill({
//             //                 color: arr[i]
//             //             })
//             //         })
//             //     }),
//             //   });
//             //   map.addLayer(layer);
//             // };
//             // setInterval(pointLight,100);

           
            

// //             var da = [1,3,5];
// //             width = 3;
// //             color = 'blue';
// //             ur = "http://127.0.0.1/map/image/arrow.png";
// //             st = [117.7487, 40.0472];
// //             en = [113.00376, 28.15285];

// //             o.drawLine(da,width,color,ur,st,en);
            
// //             // function clear_layer() {
// //             //   map.getLayers().forEach(function(e, i) {
// //             //     if (e.get("title")){
// //             //       map.removeLayer(e); 
// //             //     }
// //             //   });
// //             // }

// //             $('#cle').on('click', function(){
// //               o.clearLayer();
// //             });

            // $('#screen').on('click', function(){
            //     var da = [1,3,5];
            //     width = 3;
            //     color = 'blue';
            //     ur = "http://127.0.0.1/map/image/arrow.png";
            //     // st = [117.7487, 40.0472];
            //     // st = [112.95232, 28.22994];
            //      st = [117.1829, 39.0022];


            //      en = [124.1455, 41.1987];
            //     // en = [117.1829, 39.0022];
            //     // en = [112.95232, 28.22994];
            //   o.drawLine(da,width,color,ur,st,en);
            // });

           

           
             


//点击点
      // var uu = 'http://127.0.0.1/route_z/json/getStation.json';
      // var st = new ol.style.Style({
      //     image: new ol.style.Circle({
      //         radius: 3,
      //         stroke: new ol.style.Stroke({
      //             color: "red"
      //         }),
      //         fill: new ol.style.Fill({
      //             color: "blue"
      //         })
      //     })

      //     // image: new ol.style.Icon({
      //     //     anchor: [0.5, 1],
      //     //     src: 'http://127.0.0.1/route_z/image/point.gif'
      //     // })
      // });
      // var fun = function(){
      //    console.log($('#screen').html());

      //    // o.flickerPoint(feature.get("c_longitude"),feature.get("c_latitude"));
      // }
      // o.clickPoint(uu,st,fun); 



      var source = new ol.source.Vector({
        loader: function() {
          $.get(
              uu, //页面获取点
              {},
              function(data) {
                   var format = new ol.format.GeoJSON();
                   var feature = format.readFeatures(data, {
                    featureProjection: 'EPSG:3857'
                   });
                   source.addFeatures(feature);

                   // console.log(data);
                   // debugger
                   var le = data.features.length;
                   // console.log(le)
                   for(var a = 0;a<le;a++){
                      var parentdiv = $('<div></div>');
                      parentdiv.addClass('css_animation');
                      $('#map').append(parentdiv);
                      for(var i=0;i<le;i++){
                        $('.css_animation').show();
                        o.flickerPoint([data.features[i].properties.c_longitude,data.features[i].properties.c_latitude],le);
                      }
                   }
            },
          'json');
        }
      });



      // map.on('click', function(event) {
      //     map.updateSize();
      //     var pixel = map.getEventPixel(event.originalEvent);
      //     var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
      //         return feature;
      //     });
      //     if (feature && feature.getGeometry().getType() == 'Point') {
      //       // console.log(feature.get("c_longitude"),feature.get("c_latitude"));
      //       // fun();
      //       $('.css_animation').show();
      //       var fun = function(){
      //          o.flickerPoint([feature.get("c_longitude"),feature.get("c_latitude")]);
      //          console.log([feature.get("c_longitude"),feature.get("c_latitude")]);
      //       }
      //       fun();
      //     }
      // });
      var vector = new ol.layer.Vector({
          title:"title",
          source: source,
          style: st
      });

// 聚合点
      // var clusterSource = new ol.source.Cluster({
      //   distance:50,
      //   source: source
      // });

      // clusters = new ol.layer.Vector({
      //   source: clusterSource,
      //   style:function(feature) {
      //     return setClusterStyle(feature);
      //   }
      // });
      // function setClusterStyle(feature){
      //   var features = feature.get('features');
      //   var size = features.length;
      //   var style = new ol.style.Style({
      //     image: new ol.style.Circle({
      //       radius: 18,
      //       stroke: new ol.style.Stroke({
      //         color: '#fff'
      //       }),
      //       fill: new ol.style.Fill({
      //         color: '#3399CC'
      //       })
      //     }),
      //     text: new ol.style.Text({
      //       font: '40px sans-serif',
      //       text: size.toString(),
      //       fill: new ol.style.Fill({
      //         color: '#333'
      //       })
      //     })
      //   });
      //   return style;
      // }

      // map.addLayer(clusters);
      map.addLayer(vector);

var distance = 50; //点之间相距的距离
// console.log(source);
// 麻點圖
// o.clusterSource(distance,uu);

//熱力圖
var url = "http://127.0.0.1/route_z/json/getHeatmap.json";
// o.getHeatmap(url);

o.mousePosition();
o.controlZoom();
o.controlOverviewMap();
o.controlScaleLine();
// o.drawGeometry();



















// // 箭头
// var arrow = "http://127.0.0.1/route_z/image/arrow.png";
// var source = new ol.source.Vector();

// var coordinate = new Array();

// var coordinate1 = ol.proj.toLonLat(center);
// coordinate.push(coordinate1);
// var styleFunction = function(feature){
//     var geometry = feature.getGeometry();
//     // console.log(geometry);
//     //设置线的样式
//     var styles = [  
//         new ol.style.Style({
//             fill: new ol.style.Fill({
//                 color: '#0044aa'
//             }),
//             stroke: new ol.style.Stroke({
//                 lineDash: [1, 3, 5],
//                 width: 2,
//                 color: [255, 0, 0, 1]
//             })
//         })
//     ];
//     //箭头位置
//     geometry.forEachSegment(function(start, end) {
//         var arrowLonLat = [end[0],end[1]];
//         // console.log(arrowLonLat);
//         var dx = end[0] - start[0];
//         var dy = end[1] - start[1];
//         var rotation = Math.atan2(dy, dx);
//         styles.push(new ol.style.Style({
//             geometry: new ol.geom.Point(arrowLonLat),
//             image: new ol.style.Icon({
//                 src: arrow,
//                 anchor: [0.75, 0.5],
//                 rotateWithView: true,
//                 rotation: -rotation
//             })
//         }));
//     });
//     return styles;
// };


// $.get(
//   // urlss.get_lonlat + "name=" + this.name,
//   'http://127.0.0.1/route_z/json/getStation.json',
//   {},
//   function(data) {
//     // console.log(data);
//     var format = new ol.format.GeoJSON();
//     // debugger
//     var feature = format.readFeatures(data, {featureProjection: 'EPSG:3857' });
//     // console.log(feature);
     
    
//       var len = feature.length;
//       // var len = data.features.length;
//       for (var i = 0; i < len; i++) {
//           var tbd = "<tr class='warning'><td>" + feature[i].get('c_longitude')+','+  feature[i].get('c_latitude')+ "</td><td><button class='bt btn btn-danger'> + </td></tr>";
//           if(feature[i].get('c_latitude') || feature[i].get('c_longitude') !== undefined){
//             $('.table-responsive tbody').append(tbd);
//           }else{
//             var tbd = "<tr class='warning'><td>" + ' 数据读取没有经纬度 '+ "</td><td><button class='btn btn-primary'> + </td></tr>";
//             $('.table-responsive tbody').append(tbd);
//           }
//           // source.addFeatures(data.feature[i]);
//       }

//       if ($(".table-responsive").height() > 800) {
//           $(".table-responsive").height(800);
//       }
//       // console.log($(".table-responsive").height());
//       // var a=  0;
//       $('.bt').on('click', function() {
        
//           // map.getView().setCenter([117.7487, 40.0472]);
//              // map.getView().setZoom(5);

//           // a = 1;
//           var ht = $(this).parent().prev().html().split(',');
//           var arr = [];
//           for (var i = 0; i < ht.length; i++) {
//               arr.push(Number(ht[i]));
//           }
//           coordinate.push(arr);
//           // console.log(coordinate.length);
//           for (var i = 0; i < coordinate.length; i++) {

//                geometry.appendCoordinate(ol.proj.transform(coordinate[i], 'EPSG:4326', 'EPSG:3857'));
//                  var anchor = new ol.Feature({
//                      geometry: new ol.geom.Point(ol.proj.transform(coordinate[i], 'EPSG:4326', 'EPSG:3857'))
//                  });
//                  // console.log(coordinate[i]);
                
//                 anchor.setStyle(new ol.style.Style({
//                     // image: new ol.style.Circle({  
//                     //     radius: 1,  
//                     //     stroke: new ol.style.Stroke({  
//                     //         color: '#fff'  
//                     //     }),  
//                     //     fill: new ol.style.Fill({  
//                     //         color: '#black'  
//                     //     })  
//                     // }),
//                     // image: new ol.style.Icon({
//                     //     anchor: [0.5, 1],
//                     //     src: 'http://127.0.0.1/route_z/image/point.png'
//                     // })
//                 }));
//           };
//           layer.getSource().addFeature(anchor);
//           coordinate = [];
//         }
//       );

       
//         var layer = new ol.layer.Vector({
//             title:"title",
//             source: source
//         });
//         var geometry = new ol.geom.LineString();
//         for (var i = 0; i < coordinate.length; i++) {
//             geometry.appendCoordinate(ol.proj.transform(coordinate[i], 'EPSG:4326', 'EPSG:3857'));
//             // console.log(coordinate);
//             coordinate = [];
//         }

//         var fea = new ol.Feature({
//             geometry: geometry
//         });
//         source.addFeature(fea);
//         var vector = new ol.layer.Vector({
//             title:"title",
//             source: source,
//             style: styleFunction
//         });
//         map.addLayer(layer);
//         map.addLayer(vector);
//   });





var url = 'http://127.0.0.1/route_z/json/getStation.json';
var html = '<p>时间 : '+new Date().getTime()+'</p>' + '<p>地址:'+'xxxxxxxxxxxxxxx'+'</p>'+ '<p>人物:'+'xxxxxxxxxxx'+'</p>';

// var html = "<p>名称:" + feature.get('c_base_station_name') + "</p>" +
//             "<p>地址:" + feature.get('c_address') + "</p>"+
//             "<p>时间:"+new Date(parseInt(feature.get('c_timestamp')) * 1000).toLocaleString('chinses',{hour12:false}).replace(/年|月/g,"-").replace(/日/g," ").replace(/上午|下午/g," ")+"</p>";
var st = new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 1],
        src: 'http://127.0.0.1/route_z/image/point.gif'
    })
});

// o.popupFun({
//   url:url,
//   html:html,
//   style:st
// });

// // 
// // 绘制点之间动画
    var styles = {
        'route': new ol.style.Style({
          stroke:new ol.style.Stroke({
            width:4,
            color:[237,212,255,0.8]
            // color:"blue"
          })
        }),
        'icon':new ol.style.Style({
          image:new ol.style.Icon({
            anchor:[0.5,1],
            // src:'https://openlayers.org/en/v4.4.2/examples/data/icon.png'
            src: 'http://127.0.0.1/route_z/image/icon.png'
          })
        }),
        'geoMarker':new ol.style.Style({
          image:new ol.style.Circle({
            radius:5,
            snapToPixel:false,
            fill:new ol.style.Fill({
              color:'black'
            }),
            stroke:new ol.style.Stroke({
              color:'#fff',
              width:2
            })
          })
        }),
    };
    // var speed = 1.5;
    $.get(
        urlss.get_pointAnimate,
        //'http://127.0.0.1/route_z/json/3.json', //页面获取传入点的信息
        {},
        function(data) {
            var format = new ol.format.GeoJSON();
            var feature = format.readFeatures(data, {
                featureProjection: 'EPSG:3857'
            });
            var len = feature.length;
            var abr = [];
            for(var i= 0;i<len;i++){
                var ar = feature[i].getGeometry().getCoordinates();
                var aa = ol.proj.toLonLat(ar);
                var a = aa[0];
                var b = aa[1];
                var arrr = [b,a];
                abr.push(arrr);
            }
            // console.log(abr);
            var ar = [];
            function fun(abr){
                for(var i=0;i<abr.length;i++){
                    if(Array.isArray(abr[i])){
                        fun(abr[i]);
                    }else{
                        ar.push(abr[i]);
                    }
                }
            }
            fun(abr);

          $('#start-animation').on('click', function(){

            // $(window.element).popover('hide');
            // $(window.element).popover('destroy');
            // map.removeLayer(layer);
            // stopAnimation();
            // var le = map.getLayers().array_.length;
            // if (le > 1) {
            //     map.removeLayer(map.getLayers().array_[1]);
            //     map.removeLayer(map.getLayers().array_[2]);
            // }
            // o.clearLayer();

            // o.pointAnimate(ar,styles);
          });
        }
    )
  // console.log(o.getMapCenter());
  // 
  
//绘制图形
    // o.drawGeometry();
//绘制圆
    // o.drawGeometryCircle();
//热力图
    // o.getHeatmap({
    //   url: 'http://127.0.0.1/route_z/json/getHeatmap.json'
    // });
//麻点图
    // o.clusterSource(50,source)

// //飞机
// $('#flight-animation').on('click', function() {

//     // map.getView().setCenter([117.7487, 40.0472]);
//     // map.getView().setZoom(5);

//     // $(window.element).popover('hide');
//     // $(window.element).popover('destroy');
//     //   // map.removeLayer(layer);
//     //   // stopAnimation();
//     //   var le = map.getLayers().array_.length;
//     //   if (le > 1) {
//     //       map.removeLayer(map.getLayers().array_[1]);
//     //       map.removeLayer(map.getLayers().array_[2]);
//     //   }
//       // console.log(le);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // var dc = "#ccc";
      // var co = 'blue';
      // var wid = 3;
      // var speed = 0.1;
      // var arrowUrl = "http://127.0.0.1/route_z/image/arrw.png";
      // // var urll = 'https://openlayers.org/en/v4.4.1/examples/data/openflights/flights.json';
      // var urll = 'http://127.0.0.1/route_z/json/1.json';
      // o.lineAnimate(dc,co,wid,arrowUrl,speed,urll);
      // 
      
      o.lineAnimate({
        // url: 'http://127.0.0.1/route_z/json/1.json'
      });

//             var styleFun = function(feature) {
//                 var geometry = feature.getGeometry();
//                 var styles = [
//                   // linestring
//                   new ol.style.Style({
//                     stroke: new ol.style.Stroke({
//                       color: "#ccc",
//                       width: 1
//                     })
//                   })
//                 ];

//                 var ff = geometry.getLastCoordinate();
//                 // console.log(ff);
//                 geometry.forEachSegment(function(start, end) {
//                   var dx = end[0] - start[0];
//                   var dy = end[1] - start[1];
//                   var rotation = Math.atan2(dy, dx);
//                   // arrows
//                   styles.push(new ol.style.Style({
//                     geometry: new ol.geom.Point(ff),
//                     image: new ol.style.Icon({
//                       src: "http://127.0.0.1/route_z/image/arrow.png",
//                       anchor: [0.75, 0.5],
//                       rotateWithView: true,
//                       rotation: -rotation
//                     })
//                   }));
//                 });

//                 return styles;
//             };
//             var style = new ol.style.Style({
//                 stroke: new ol.style.Stroke({
//                     color: "yellow", //设置颜色
//                     width: "3" //设置宽度
//                 })
//             });
//             var flightsSource;
//             var addLater = function(feature, timeout) {
//                 setTimeout(function() {
//                     feature.set('start', new Date().getTime());
//                     flightsSource.addFeature(feature);
//                 }, timeout);
//             };
//             var pointsPerMs = 0.1; //设置速度
//             var animateFlights = function(event) {
//                 var vectorContext = event.vectorContext;
//                 var frameState = event.frameState;
//                 vectorContext.setStyle(style);
//                 var features = flightsSource.getFeatures();

//                 for (var i = 0; i < features.length; i++) {
//                     var feature = features[i];
//                     // console.log(features.length);
//                     if (!feature.get('finished')) {
//                         var coords = feature.getGeometry().getCoordinates();
//                         var elapsedTime = frameState.time - feature.get('start');
//                         //console.log(frameState.time);
//                         var elapsedPoints = elapsedTime * pointsPerMs;
//                         // console.log(elapsedPoints);
//                         if (elapsedPoints >= coords.length) {
//                             feature.set('finished', true);
//                         }

//                         var maxIndex = Math.min(elapsedPoints, coords.length);
//                         var currentLine = new ol.geom.LineString(coords.slice(0, maxIndex));

//                         // debugger
//                         vectorContext.drawGeometry(currentLine);
//                     } else {
//                         // feature.set('finished', false);
//                         // feature.set('start', new Date().getTime());
//                     }
//                 }
//                 map.render();
//             };
//             flightsSource = new ol.source.Vector({
//                 wrapX: false,
//                 loader: function() {
//                     var ur = 'http://127.0.0.1/route_z/json/1.json';
//                     // var ur = '[[[116.7242,40.1619],[88.1653,39.6002]]]';
//                     fetch(ur).then(function(response) {
//                         return response.json();
//                     }).then(function(json) {
//                         var flightsData = json.flights;
//                         // console.log(flightsData);
//                         for (var i = 0; i < flightsData.length; i++) {
//                             var flight = flightsData[i];
//                             // console.log(flight);
//                             var from = flight[0];
//                             var to = flight[1];
//                             // debugger
//                             var arcGenerator = new arc.GreatCircle({
//                                 x: from[0],
//                                 y: from[1]
//                             }, {
//                                 x: to[0],
//                                 y: to[1]
//                             });
//                             var arcLine = arcGenerator.Arc(300, {
//                                 offset: 10
//                             });
//                             // console.log(arcLine.geometries.length);
//                             if (arcLine.geometries.length === 1) {
//                                 var line = new ol.geom.LineString(arcLine.geometries[0].coords);
//                                 var c = line.transform(ol.proj.get('EPSG:4326'), ol.proj.get('EPSG:3857'));
//                                 // console.log(line);
//                                 var feature = new ol.Feature({
//                                     geometry: c,
//                                     finished: false
//                                 });
//                                 addLater(feature, i * 3000);
//                             }
//                         }
//                         map.on('postcompose', animateFlights);
//                     });
//                 }
//             });
//             var flightsLayer = new ol.layer.Vector({
//                 title:"title",
//                 source: flightsSource
//                 // style:styleFun
//             });
//             map.addLayer(flightsLayer);
// })
// ****************************************************************************************************************************************
$('#flight-animation').on('click', function() {
    var styleFun = function(feature) {
      var geometry = feature.getGeometry();
      var styles = [
        // linestring
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            color: "#ccc",
            width: 1
          })
        })
      ];

      var ff = geometry.getLastCoordinate();
      // console.log(ff);
      geometry.forEachSegment(function(start, end) {
        var dx = end[0] - start[0];
        var dy = end[1] - start[1];
        var rotation = Math.atan2(dy, dx);
        // arrows
        styles.push(new ol.style.Style({
          geometry: new ol.geom.Point(ff),
          image: new ol.style.Icon({
            src: "http://127.0.0.1/route_z/image/arrow.png",
            anchor: [0.75, 0.5],
            rotateWithView: true,
            rotation: -rotation
          })
        }));
      });

      return styles;
    };

      var style = new ol.style.Style({
          stroke: new ol.style.Stroke({
              color: "blue", //设置颜色
              width: "3" //设置宽度
          })
      });

      var flightsSource;
      var addLater = function(feature, timeout) {
          var set = setTimeout(function() {
              feature.set('start', new Date().getTime());
              flightsSource.addFeature(feature);
          }, timeout);
      };
      var pointsPerMs = 0.1; //设置速度
      var animateFlights = function(event) {
          var vectorContext = event.vectorContext;
          var frameState = event.frameState;
          vectorContext.setStyle(style);
          var features = flightsSource.getFeatures();

          for (var i = 0; i < features.length; i++) {
              var feature = features[i];
              if (!feature.get('finished')) { 
                  var coords = feature.getGeometry().getCoordinates();
                  var elapsedTime = frameState.time - feature.get('start');
                  //console.log(frameState.time);
                  var elapsedPoints = elapsedTime * pointsPerMs;
                  if (elapsedPoints >= coords.length) {
                      feature.set('finished', true);
                  }

                  var maxIndex = Math.min(elapsedPoints, coords.length);
                  var currentLine = new ol.geom.LineString(coords.slice(0, maxIndex));

                  // debugger
                  vectorContext.drawGeometry(currentLine);

              } else {
                  // feature.set('finished', false);
                  // feature.set('start', new Date().getTime());
              }
          }
          map.render();
      };
      flightsSource = new ol.source.Vector({
          wrapX: false,
          loader: function() {
              var ur = 'http://127.0.0.1/route_z/json/1.json';
              fetch(ur).then(function(response){
                  return response.json();
              }).then(function(json) {
                  var flightsData = json.flights;
                  console.log(flightsData.length);
                  for (var i = 0; i < flightsData.length; i++) {
                      var flight = flightsData[i];
                      // console.log(flight);
                      var from = flight[0];
                      var to = flight[1];
                      // debugger
                      var arcGenerator = new arc.GreatCircle({
                          x: from[0],
                          y: from[1]
                      }, {
                          x: to[0],
                          y: to[1]
                      });
                      var arcLine = arcGenerator.Arc(100, {
                          offset: 10
                      });
                      // console.log(arcLine);
                      if (arcLine.geometries.length === 1) {
                          var line = new ol.geom.LineString(arcLine.geometries[0].coords);
                          // console.log(arcLine.geometries[0].coords.length);
                          // for(var j=0;j<arcLine.geometries[0].coords.length;j++){
                          //   var poi = new ol.geom.Point(arcLine.geometries[0].coords[j]);
                          //   // console.log(poi);
                          //   var c = poi.transform(ol.proj.get('EPSG:4326'),ol.proj.get('EPSG:3857'));
                          //   // console.log(c);
                          //   var feature = new ol.Feature({
                          //     geometry: c,
                          //     finished: false
                          //   });
                          //   // map.removeLayer(map.getLayers().array_[3]);
                          //   addLater(feature, j * 100);

                          //   // var le =  map.getLayers().array_.length;
                          //   // console.log(le);
                            
                          //   // source.removeFeature(feature);
                            
                          //   // flightsSource.removeFeature(feature);
                          //  // map.removeLayer(flightsLayer);
                          // }
                          // console.log(poi);
                          
                          var c = line.transform(ol.proj.get('EPSG:4326'),ol.proj.get('EPSG:3857'));
                          var features = new ol.Feature({
                              geometry: line,
                              finished: false
                          });
                          // var le =  map.getLayers().array_.length;
                          // console.log(le);
                          addLater(features, i * 30);

                          // console.log(c);
                      }
                  }
                  map.on('postcompose', animateFlights);
              });
          }
      });
      var flightsLayer = new ol.layer.Vector({                                                          
          title:"title",
          source: flightsSource
          // style:styleFun
      });
      map.addLayer(flightsLayer);
      // window.setInterval(function(){
      //   var styleFun = function(feature) {
      //     var geometry = feature.getGeometry();
      //     var styles = [
      //       // linestring
      //       new ol.style.Style({
      //         stroke: new ol.style.Stroke({
      //           color: "#ccc",
      //           width: 1
      //         })
      //       })
      //     ];

      //     var ff = geometry.getLastCoordinate();
      //     // console.log(ff);
      //     geometry.forEachSegment(function(start, end) {
      //       var dx = end[0] - start[0];
      //       var dy = end[1] - start[1];
      //       var rotation = Math.atan2(dy, dx);
      //       // arrows
      //       styles.push(new ol.style.Style({
      //         geometry: new ol.geom.Point(ff),
      //         image: new ol.style.Icon({
      //           src: "http://127.0.0.1/route_z/image/arrow.png",
      //           anchor: [0.75, 0.5],
      //           rotateWithView: true,
      //           rotation: -rotation
      //         })
      //       }));
      //     });

      //     return styles;
      //   };
      //   var style = new ol.style.Style({
      //       stroke: new ol.style.Stroke({
      //           color: "blue", //设置颜色
      //           width: "3" //设置宽度
      //       })
      //   });
      //   var flightsSource;
      //   var addLater = function(feature, timeout) {
      //       setTimeout(function() {
      //           feature.set('start', new Date().getTime());
      //           flightsSource.addFeature(feature);
      //       }, timeout);
      //   };
      //   var pointsPerMs = 0.1; //设置速度
      //   var animateFlights = function(event) {
      //       var vectorContext = event.vectorContext;
      //       var frameState = event.frameState;
      //       vectorContext.setStyle(style);
      //       var features = flightsSource.getFeatures();

      //       for (var i = 0; i < features.length; i++) {
      //           var feature = features[i];
      //           if (!feature.get('finished')) {
      //               var coords = feature.getGeometry().getCoordinates();
      //               var elapsedTime = frameState.time - feature.get('start');
      //               //console.log(frameState.time);
      //               var elapsedPoints = elapsedTime * pointsPerMs;
      //               // console.log(elapsedPoints);
      //               if (elapsedPoints >= coords.length) {
      //                   feature.set('finished', true);
      //               }

      //               var maxIndex = Math.min(elapsedPoints, coords.length);
      //               var currentLine = new ol.geom.LineString(coords.slice(0, maxIndex));

      //               // debugger
      //               vectorContext.drawGeometry(currentLine);
      //           } else {
      //               // feature.set('finished', false);
      //               // feature.set('start', new Date().getTime());
      //           }
      //       }
      //       map.render();
      //   };
      //   flightsSource = new ol.source.Vector({
      //       wrapX: false,
      //       loader: function() {
      //           var ur = 'http://127.0.0.1/route_z/json/1.json';
      //           fetch(ur).then(function(response) {
      //               return response.json();
      //           }).then(function(json) {
      //               var flightsData = json.flights;
      //               // console.log(flightsData.length);
      //               for (var i = 0; i < flightsData.length; i++) {
      //                   var flight = flightsData[i];
      //                   // console.log(flight);
      //                   var from = flight[0];
      //                   var to = flight[1];
      //                   // debugger
      //                   var arcGenerator = new arc.GreatCircle({
      //                       x: from[0],
      //                       y: from[1]
      //                   }, {
      //                       x: to[0],
      //                       y: to[1]
      //                   });
      //                   var arcLine = arcGenerator.Arc(300, {
      //                       offset: 10
      //                   });
      //                   // console.log(arcLine.geometries.length);
      //                   if (arcLine.geometries.length === 1) {
      //                       var line = new ol.geom.LineString(arcLine.geometries[0].coords);
      //                       var c = line.transform(ol.proj.get('EPSG:4326'), ol.proj.get('EPSG:3857'));
      //                       // console.log(line);
      //                       var feature = new ol.Feature({
      //                           geometry: c,
      //                           finished: false
      //                       });
      //                       addLater(feature, i * 3000);
      //                   }
      //               }
      //               map.on('postcompose', animateFlights);
      //           });
      //       }
      //   });
      //   var flightsLayer = new ol.layer.Vector({
      //       title:"title",
      //       source: flightsSource
      //       // style:styleFun
      //   });
      //   map.addLayer(flightsLayer);
      // },6000)
})

//    mapv----------------------------------------------------------------------------------
//    
//    
//    
    // $.get(
    //     urlss.get_pointAnimate,
    //     //'http://127.0.0.1/route_z/json/3.json', //页面获取传入点的信息
    //     {},
    //     function(data) {
    //         var format = new ol.format.GeoJSON();
    //         var feature = format.readFeatures(data, {
    //             featureProjection: 'EPSG:3857'
    //         });
    //         var len = feature.length;
    //         var abr = [];
    //         for(var i= 0;i<len;i++){
    //             var ar = feature[i].getGeometry().getCoordinates();
    //             var aa = ol.proj.toLonLat(ar);
    //             var a = aa[0];
    //             var b = aa[1];
    //             var arrr = [b,a];
    //             abr.push(arrr);
    //         }
    //         console.log(abr);



    //       var randomCount = 1;  

    //       var data = [];  
    //       var timeData = [];

    //       for (var i = 0; i < abr.length; i++) {
    //           var line = abr[i];
    //           var coordinates = [];
    //           for (var j = 0; j < line.length; j++) {
    //               coordinates.push([line[j].x, line[j].y]);
    //               timeData.push({
    //                   geometry: {
    //                       type: 'Point',
    //                       coordinates: [line[j].x, line[j].y]
    //                   },
    //                   count: 1,
    //                   time: j
    //               });
    //           }
    //           data.push({
    //               geometry: {
    //                   type: 'LineString',
    //                   coordinates: coordinates
    //               }
    //           });
    //       }

    //       var dataSet = new mapv.DataSet(data);

    //       var options = {
    //           strokeStyle: 'rgba(55, 50, 250, 0.3)',
    //           globalCompositeOperation: 'lighter',
    //           shadowColor: 'rgba(55, 50, 250, 0.5)',
    //           shadowBlur: 10,
    //           methods: {
    //               click: function (item) {
    //               }
    //           },
    //           lineWidth: 1.0,
    //           draw: 'simple'
    //       }

    //       // var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);
    //       var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);

    //       var dataSet = new mapv.DataSet(timeData);

    //       var options = {
    //           fillStyle: 'rgba(255, 250, 250, 0.9)',
    //           globalCompositeOperation: 'lighter',
    //           size: 1.5,
    //           animation: {
    //               type: 'time',
    //               stepsRange: {
    //                   start: 0,
    //                   end: 100
    //               },
    //               trails: 1,
    //               duration: 5,
    //           },
    //           draw: 'simple'
    //       }

    //       var mapvLayer = new mapv.baiduMapLayer(map, dataSet, options);

    //     }
    // )
























// ************************************************************************************************************************

// //点击截图 点击保存
$('#export-png').on('click', function() {
  // alert(123);
// 
  //   map.getOverlays().clear();
  // var le = map.getLayers().array_.length;
  //     console.log(le);

  var name = "mapppppp";
  o.downloadPicture(name);



  // var da = [1,3,5];
  // width = 3;
  // color = 'blue';
  // ur = "http://127.0.0.1/map/image/arrow.png";
  // st = [117.7487, 40.0472];
  // en = [113.00376, 28.15285];

  // o.drawLine(da,width,color,ur,st,en);



    // map.once('postcompose', function(event) {
    //   var canvas = event.context.canvas;
    //   if (navigator.msSaveBlob) {
    //     navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
    //   } else {
    //     canvas.toBlob(function(blob) {
    //       saveAs(blob, 'map.png');
    //     });
    //   }
    // });
    // map.renderSync();
});

// //ip 数据的展示
//   $.get(
//       urlss.get_ip,
//       // 'http://127.0.0.1/route_z/json/2.json',
//       {},
//       function(data) {
//         var format = new ol.format.GeoJSON();
//         // debugger
//         var feature = format.readFeatures(data, {
//             featureProjection: 'EPSG:3857'
//         });
//         // console.log(feature);
//         var len = feature.length;
//         // var len = data.features.length;
//         for (var i = 0; i < len; i++) {
//             var tbd = "<tr class='warning'><td>" + feature[i].get('c_base_station_name')  + "</td><td>"+feature[i].get('ip')+"</td></tr>";
//             $('.table-responsive1 tbody').append(tbd);
//         }
//         if ($(".table-responsive1").height() > 700) {
//             $(".table-responsive1").height(700);
//         }
//       }
//     )
//   $('#ipshow').on('click', function() {
//       $(".table-responsive1").toggle();
//   })


// // 手动截图

// var bg = 'rgba(0, 0, 0, 0.2)';
// var cg = 'rgba(0, 10, 0, 0.8)';


// // //手动截图
//    function screenShot(quickStartKey, EndKey) {
//         var keyLength = quickStartKey.length;
//         var isKeyTrigger = {};
//         var cantStartShot = false;
//         var copyDomCanvas;
//         var canvasId = 'canvasPage';
//         var bGcolor = bg; //图层颜色
//         var color = cg; //边框颜色
//         var penWidth = 1; // 边框宽度A
//         quickStartKey.forEach(function(item) {
//             isKeyTrigger[item] = false
//         });
//         $('html').on('keyup', function(e) {
//             var keyCode = e.which;
//             if (keyCode === 27) {
//                 endShot([copyDomCanvas, "#" + canvasId, '.result'])
//                 cantStartShot = false
//             } else if (!cantStartShot) {
//                 isKeyTrigger[keyCode] = true
//                 var notTrigger = Object.keys(isKeyTrigger).filter(function(item) {
//                     return isKeyTrigger[item] === false
//                 })
//                 if (notTrigger.length === 0) {
//                     cantStartShot = true
//                     beginShot(cantStartShot)
//                 }
//             }
//         })

//         function downloadFile(el, fileName, href) {
//             el.attr({
//                 'download': fileName,
//                 'href': href
//             })
//         }

//         function beginShot(cantStartShot) {
//             if (cantStartShot) {
//                 html2canvas(document.body, {
//                     onrendered: function(canvas) {
//                         copyDomCanvas = canvas;
//                         document.body.appendChild(copyDomCanvas);
//                         this._calculateXY = function(e) {
//                             return {
//                                 x: e.clientX,
//                                 y: e.clientY
//                             }
//                         }
//                         var that = this;
//                         var startX = 0;
//                         var startY = 0;
//                         var isShot = false;
//                         var layerName = 'name' + Math.random(); //图层名字，每次删除上一图层
//                         var canvasWrapperId = 'canvasWrapperId'; //最后确定框图
//                         var css = '<style> .copy-body {position: fixed;bottom: 0;left: 0;background-color: #ffffff;z-index:1}#' + canvasId + ' {position: fixed;top: 0;left: 0;z-index: 2;}';
//                         css += '#canvasWrapperId {position: fixed;top: 0;left: 0;z-index: 3;}#shot {display: inline-block;padding: 5px 15px;border: 1px solid #cccccc;border-radius: 5px;cursor: pointer;}';
//                         css += '.result {position: fixed;z-index: 4;cursor: pointer;}.result a {padding: 5px 15px;border-radius: 5px;margin-right: 5px;}</style>';
//                         $('#' + canvasId).remove();
//                         $('head').append(css);
//                         $('body').css('cursor', 'crosshair').append('<canvas id=' + canvasId + ' width=' + canvas.width + ' height=' + canvas.height + '></canvas>'); //添加图层用来画选择框
//                         $(copyDomCanvas).addClass('copy-body'); //html转化来的canvas图片作为背景
//                         $('#' + canvasId).mousedown(function(e) {
//                             $('.result').remove();
//                             $("#" + canvasId).removeLayer(layerName);
//                             layerName += 1;
//                             startX = that._calculateXY(e).x;
//                             startY = that._calculateXY(e).y;
//                             isShot = true;
//                             $("#" + canvasId).addLayer({
//                                 type: 'rectangle',
//                                 strokeStyle: color,
//                                 strokeWidth: penWidth,
//                                 fillStyle: bGcolor,
//                                 name: layerName,
//                                 fromCenter: false,
//                                 x: startX,
//                                 y: startY,
//                                 width: 1,
//                                 height: 1
//                             })
//                         }).mousemove(function(e) {
//                             if (isShot) {
//                                 $("#" + canvasId).removeLayer(layerName);
//                                 var moveX = that._calculateXY(e).x;
//                                 var moveY = that._calculateXY(e).y;
//                                 var width = moveX - startX;
//                                 var height = moveY - startY;
//                                 $("#" + canvasId).addLayer({
//                                     type: 'rectangle',
//                                     strokeStyle: color,
//                                     strokeWidth: penWidth,
//                                     fillStyle: bGcolor,
//                                     name: layerName,
//                                     fromCenter: false,
//                                     x: startX,
//                                     y: startY,
//                                     width: width,
//                                     height: height
//                                 });
//                                 $("#" + canvasId).drawLayers();
//                             }
//                         }).mouseup(function(e) {
//                             var moveX = that._calculateXY(e).x
//                             var moveY = that._calculateXY(e).y
//                             var width = Math.abs(moveX - startX)
//                             var height = Math.abs(moveY - startY)
//                             isShot = false;
//                             $('body').append('<div class="result"><a class="ok btn btn-primary">确定</a></div>')
//                             $('.result').css({
//                                 'top': moveY - startY < 0 ? startY - 32 : moveY - 32,
//                                 'left': moveX - startX < 0 ? startX - 60 : moveX - 60
//                             })
//                             $('.ok').on('click', function() {
//                                 $('body').append('<canvas id="canvasResult" width=' + width + ' height=' + height + ' style="display:none"></canvas>') //添加图层用来画选择框
//                                 var canvasResult = document.getElementById('canvasResult');
//                                 var ctx = canvasResult.getContext("2d");
//                                 ctx.drawImage(copyDomCanvas, moveX - startX > 0 ? startX : moveX, moveY - startY > 0 ? startY : moveY, width, height, 0, 0, width, height);
//                                 var dataURL = canvasResult.toDataURL("image/png");
//                                 downloadFile($('.ok'), 'screenShot' + Math.random().toString().split('.')[1] || Math.random() + '.png', dataURL);
//                                 endShot([copyDomCanvas, "#" + canvasId, '.result']);
//                                 $('body').css('cursor', 'default');
//                                 ctx.clearRect(0, 0, width, height);
//                                 canvasWrapperId = '';
//                                 $(copyDomCanvas).removeClass('copy-body');
//                                 $('#canvasResult').remove();
//                             })
//                         })
//                     }
//                 })
//             }
//         }

//         function endShot(resetObj) {
//             if (resetObj) {
//                 if (Array.isArray(resetObj)) {
//                     resetObj.forEach(function(item) {
//                         $(item).remove()
//                     })
//                 } else {
//                     console.error('resetObj must be a Array')
//                 }
//             }
//             $('body').css('cursor', 'default');
//         }
//    };
//    $('#screen').on('click',function(){
//        screenShot([16, 65], 27);
//     })
//     $('#cle').on('click',function(){
//         o.clearLayer();
//     })
      














            // // 箭头
            // var arrow = "http://127.0.0.1/ggpp/image/arrow.png";
            // var source = new ol.source.Vector();
            // var coordinate = new Array();
            // var coordinate1 = ol.proj.toLonLat(center);
            // coordinate.push(coordinate1);
            // var styleFunction = function(feature) {
            //     var geometry = feature.getGeometry();
            //     // console.log(geometry);
            //     //设置线的样式
            //     var styles = [
            //         new ol.style.Style({
            //             fill: new ol.style.Fill({
            //                 color: '#0044aa'
            //             }),
            //             stroke: new ol.style.Stroke({
            //                 lineDash: [1, 3, 5],
            //                 width: 2,
            //                 color: [255, 0, 0, 1]
            //             })
            //         })
            //     ];
            //     //箭头位置
            //     geometry.forEachSegment(function(start, end) {
            //         var arrowLonLat = [end[0], end[1]];
            //         // console.log(arrowLonLat);
            //         var dx = end[0] - start[0];
            //         var dy = end[1] - start[1];
            //         var rotation = Math.atan2(dy, dx);
            //         styles.push(new ol.style.Style({
            //             geometry: new ol.geom.Point(arrowLonLat),
            //             image: new ol.style.Icon({
            //                 src: arrow,
            //                 anchor: [0.75, 0.5],
            //                 rotateWithView: true,
            //                 rotation: -rotation
            //             })
            //         }));
            //     });
            //     return styles;
            // };
            // $.get(
            //     // urlss.get_lonlat + "name=" + this.name,      //表格获取经纬度
            //     'http://127.0.0.1/ggpp/json/getStation.json',
            //     {},
            //     function(data) {
            //         // console.log(data);
            //         var format = new ol.format.GeoJSON();
            //         // debugger
            //         var feature = format.readFeatures(data, {
            //             featureProjection: 'EPSG:3857'
            //         });
            //         // console.log(feature);
            //         var len = feature.length;
            //         // var len = data.features.length;
            //         for (var i = 0; i < len; i++) {
            //             var tbd = "<tr class='warning'><td>" + feature[i].get('c_longitude') + ',' + feature[i].get('c_latitude') + "</td><td><button class='bt btn btn-danger'> + </td></tr>";
            //             if (feature[i].get('c_latitude') || feature[i].get('c_longitude') !== undefined) {
            //                 $('.table-responsive tbody').append(tbd);
            //             } else {
            //                 var tbd = "<tr class='warning'><td>" + ' 数据读取为空 ' + "</td><td><button class='btn btn-primary'> + </td></tr>";
            //                 $('.table-responsive tbody').append(tbd);
            //             }
            //             // source.addFeatures(data.feature[i]);
            //         }
            //         if ($(".table-responsive").height() > 800) {
            //             $(".table-responsive").height(800);
            //         }
            //         // console.log($(".table-responsive").height());
            //         // var a=  0;
            //         $('.bt').on('click', function() {
            //             // console.log(feature);
            //             // console.log(a);
            //             // if(a = 1){
            //             //   var le = map.getLayers().array_.length;
            //             //   // console.log(le);
            //             //   if (le > 1) {
            //             //       map.removeLayer(map.getLayers().array_[1]);
            //             //   }
            //             // }
            //             // map.getView().setCenter([117.7487, 40.0472]);
            //             map.getView().setZoom(5);
            //             // a = 1;
            //             var ht = $(this).parent().prev().html().split(',');
            //             // console.log(ht);
            //             var arr = [];
            //             for (var i = 0; i < ht.length; i++) {
            //                 arr.push(Number(ht[i]));
            //             }
            //             coordinate.push(arr);
            //             // console.log(coordinate);
            //             for (var i = 0; i < coordinate.length; i++) {
            //                 geometry.appendCoordinate(ol.proj.transform(coordinate[i], 'EPSG:4326', 'EPSG:3857'));
            //                 var anchor = new ol.Feature({
            //                     geometry: new ol.geom.Point(ol.proj.transform(coordinate[i], 'EPSG:4326', 'EPSG:3857'))
            //                 });
            //                 // console.log(coordinate[i]);
            //                 anchor.setStyle(new ol.style.Style({
            //                     // image: new ol.style.Circle({  
            //                     //     radius: 1,  
            //                     //     stroke: new ol.style.Stroke({  
            //                     //         color: '#fff'  
            //                     //     }),  
            //                     //     fill: new ol.style.Fill({  
            //                     //         color: '#black'  
            //                     //     })  
            //                     // }),
            //                     // image: new ol.style.Icon({
            //                     //     anchor: [0.5, 1],
            //                     //     src: 'http://127.0.0.1/route_z/image/point.png'
            //                     // })
            //                 }));
            //             };
            //             layer.getSource().addFeature(anchor);
            //             coordinate = [];
            //         })
            //     });
            // var layer = new ol.layer.Vector({
            //     source: source
            // });
            // var geometry = new ol.geom.LineString();
            // for (var i = 0; i < coordinate.length; i++) {
            //     geometry.appendCoordinate(ol.proj.transform(coordinate[i], 'EPSG:4326', 'EPSG:3857'));
            //     // console.log(coordinate);
            //     coordinate = [];
            // }
            // var fea = new ol.Feature({
            //     geometry: geometry
            // });
            // source.addFeature(fea);
            // var vector = new ol.layer.Vector({
            //     source: source,
            //     style: styleFunction
            // });
            // map.addLayer(layer);
            // map.addLayer(vector);
            // var source = new ol.source.Vector({
            //     loader: function() {
            //         $.get(
            //             // urlss.get_point,
            //             'http://127.0.0.1/ggpp/json/getStation.json', //页面获取点的位置信息
            //             {},
            //             function(data) {
            //                 var format = new ol.format.GeoJSON();
            //                 var feature = format.readFeatures(data, {
            //                     featureProjection: 'EPSG:3857'
            //                 });
            //                 source.addFeatures(feature);
            //             }, 'json');
            //     }
            // });
            // $('#map').append('<div id="popup"></div>');
            // window.element = this.element = document.getElementById('popup');
            // window.popup = this.popup = new ol.Overlay({
            //     element: this.element,
            //     positioning: 'bottom-center',
            //     stopEvent: false,
            //     offset: [0, -10]
            // });
            // map.addOverlay(this.popup);
            // $(this.element).popover('destroy');
            // var st = new ol.style.Style({
            //     image: new ol.style.Icon({
            //         anchor: [0.5, 1],
            //         src: 'http://127.0.0.1/route_z/image/point.gif'
            //     })
            // });
            // map.on('click', function(event) {
            //     map.updateSize();
            //     var pixel = map.getEventPixel(event.originalEvent);
            //     var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
            //         return feature;
            //     });
            //     var element = document.getElementById('popup');
            //     $("#popup").popover('destroy');
            //     if (feature && feature.getGeometry().getType() == 'Point') {
            //         var coordinates = ol.proj.fromLonLat([feature.get("c_longitude"), feature.get("c_latitude")]);
            //         var y = coordinates[1];
            //         var extent = map.getView().calculateExtent(map.getSize());
            //         var dy = parseInt(((y - extent[3]) / (extent[1] - extent[3])) * map.getSize()[1]);
            //         //需要显示的信息
            //         // html = '<p>时间 : ' + new Date().getTime() + '</p>' + '<p>地址:' + 'xxxxxxxxxxxxxxx' + '</p>' + '<p>人物:' + 'xxxxxxxxxxx' + '</p>' + "<button id='buu' class='btn btn-success'>点击</button>";
            //         html = '<p>时间 : ' + new Date().getTime() + '</p>' + '<p>地址:' + 'xxxxxxxxxxxxxxx' + '</p>' + '<p>人物:' + 'xxxxxxxxxxx' + '</p>';
            //         window.popup.setPosition(coordinates);
            //         if (dy < 120) {
            //             $(element).popover({
            //                 'placement': 'bottom',
            //                 'html': true,
            //                 'content': html
            //             });
            //         } else {
            //             $(element).popover({
            //                 'placement': 'top',
            //                 'html': true,
            //                 'animation': false,
            //                 'content': html
            //             });
            //         }
            //         $(element).popover('show');
            //     } else {
            //         $(window.element).popover('hide');
            //         $(window.element).popover('destroy');
            //     }
            // });
            // var vector = new ol.layer.Vector({
            //     source: source,
            //     style: st
            // });
            // map.addLayer(vector);
            // var url = 'http://127.0.0.1/ggpp/json/getStation.json';
            // var html = '<p>时间 : '+new Date().getTime()+'</p>' + '<p>地址:'+'xxxxxxxxxxxxxxx'+'</p>'+ '<p>人物:'+'xxxxxxxxxxx'+'</p>';
            // // var html = "<p>名称:" + feature.get('c_base_station_name') + "</p>" +
            // //             "<p>地址:" + feature.get('c_address') + "</p>"+
            // //             "<p>时间:"+new Date(parseInt(feature.get('c_timestamp')) * 1000).toLocaleString('chinses',{hour12:false}).replace(/年|月/g,"-").replace(/日/g," ").replace(/上午|下午/g," ")+"</p>";;
            // o.popupFun(url,html,st);
            // // $(document).on('click','#bu',function(){ console.log(123 )});
            // // $(document).on('click',$('.wode'),function(){
            // //     if($(element).popover('show')){
            // //       alert(123);
            // //     }
            // // })
            // // console.log(map.getLayers());
            // // 
            // 绘制点之间动画
            // $.get(
            //     // urlss.get_pointAnimate,
            //     'http://127.0.0.1/route_z/json/3.json', //页面获取传入点的信息
            //     {},
            //     function(data) {
            //         var format = new ol.format.GeoJSON();
            //         var feature = format.readFeatures(data, {
            //             featureProjection: 'EPSG:3857'
            //         });
            //         var len = feature.length;
            //         var abr = [];
            //         for(var i= 0;i<len;i++){
            //             var ar = feature[i].getGeometry().getCoordinates();
            //             // console.log(ar);
            //             var aa = ol.proj.toLonLat(ar);
            //             var a = aa[0];
            //             var b = aa[1];
            //             var arrr = [b,a];
            //             abr.push(arrr);
            //         }

            //         var ar = [];
            //         function fun(abr){
            //             for(var i=0;i<abr.length;i++){
            //                 if(Array.isArray(abr[i])){
            //                     fun(abr[i]);
            //                 }else{
            //                     ar.push(abr[i]);
            //                 }
            //             }
            //         }
            //         fun(abr);
            //          // console.log(ar);
            //         var cc = ol.format.Polyline.encodeDeltas(ar, 2, 1e6);
            //         // console.log(cc);
            //         var polyline = [cc].join('');
            //         console.log(polyline);
            //         var route = (new ol.format.Polyline({
            //             factor: 1e6
            //         }).readGeometry(polyline, {
            //             dataProjection: 'EPSG:4326',
            //             featureProjection: 'EPSG:3857'
            //         }));
            //         // console.log(route);
            //         var routeCoords = route.getCoordinates();
            //         console.log(routeCoords);
            //         var routeLength = routeCoords.length;

            //         var routeFeature = new ol.Feature({
            //             type: 'route',
            //             geometry: route
            //         });
            //         var geoMarker = new ol.Feature({
            //             type: 'geoMarker',
            //             geometry: new ol.geom.Point(routeCoords[0])
            //         });
            //         var startMarker = new ol.Feature({
            //             type: 'icon',
            //             geometry: new ol.geom.Point(routeCoords[0])
            //         });
            //         var endMarker = new ol.Feature({
            //             type: 'icon',
            //             geometry: new ol.geom.Point(routeCoords[routeLength - 1])
            //         });
            //         var styles = {
            //             'route': new ol.style.Style({
            //                 stroke: new ol.style.Stroke({
            //                     width: 6,
            //                     color: [237, 212, 0, 0.8]
            //                         // color:"blue"
            //                 })
            //             }),
            //             'icon': new ol.style.Style({
            //                 image: new ol.style.Icon({
            //                     anchor: [0.5, 1],
            //                     // src:'https://openlayers.org/en/v4.4.2/examples/data/icon.png'
            //                     src: 'http://127.0.0.1/map/image/icon.png'
            //                 })
            //             }),
            //             'geoMarker': new ol.style.Style({
            //                 image: new ol.style.Circle({
            //                     radius: 7,
            //                     snapToPixel: false,
            //                     fill: new ol.style.Fill({
            //                         color: 'black'
            //                     }),
            //                     stroke: new ol.style.Stroke({
            //                         color: '#fff',
            //                         width: 2
            //                     })
            //                 })
            //             }),
            //         };
            //         var animating = false;
            //         var speed, now;
            //         var vectorLayer = new ol.layer.Vector({
            //             source: new ol.source.Vector({
            //                 features: [routeFeature, geoMarker, startMarker, endMarker]
            //             }),
            //             style: function(feature) {
            //                 if (animating && feature.get('type') === 'geoMarker') {
            //                     return null;
            //                 }
            //                 return styles[feature.get('type')];
            //             }
            //         })
            //         var moveFeature = function(event) {
            //             var vectorContext = event.vectorContext;
            //             var frameState = event.frameState;
            //             var va = $('#speed').val();
            //             if (animating) {
            //                 var elapsedTime = frameState.time - now;
            //                 var index = Math.round(va * elapsedTime / 500);
            //                 if (index >= routeLength) {
            //                     stopAnimation(true);
            //                     return;
            //                 }
            //                 var currentPoint = new ol.geom.Point(routeCoords[index]);
            //                 var feature = new ol.Feature(currentPoint);
            //                 vectorContext.drawFeature(feature, styles.geoMarker);
            //             }
            //             map.render();
            //         };

            //         function startAnimate() {
            //             map.addLayer(vectorLayer);
            //             // $(window.element).popover('hide');
            //             // $(window.element).popover('destroy');
            //             // map.removeLayer(layer);
            //             // map.removeLayer(Overlay);
            //             map.addLayer(vectorLayer);
            //             // map.addLayer(layer);
            //             // var le = map.getLayers().array_.length;
            //             // if (le > 1) {
            //             //     map.removeLayer(map.getLayers().array_[1]);
            //             //     map.removeLayer(map.getLayers().array_[2]);
            //             //     map.removeLayer(map.getLayers().array_[3]);
            //             // }
            //             // console.log(le);
            //             // a = 1;
            //             if (animating) {
            //                 stopAnimation(false);
            //             } else {
            //                 animating = true;
            //                 now = new Date().getTime();
            //                 // speed = speed.val();
            //                 var va = $('#speed').val();
            //                 geoMarker.setStyle(null);
            //                 // debugger
            //                 map.getView().setCenter(routeCoords[(routeCoords.length) / 2]);
            //                 // map.getView().setZoom(22);
            //                 map.on('postcompose', moveFeature);
            //                 // map.render();
            //             }
            //         }

            //         function stopAnimation(ended) {

            //             animating = false;
            //             // var coord = ended ? routeCoords[routeLength - 1] : routeCoords[0];
            //             // (geoMarker.getGeometry()).setCoordinates(coord);
            //             map.un('postcompose', moveFeature);
            //             // console.log(map.getLayers());
            //         }
            //         $('#start-animation').on('click', startAnimate);
            //     }
            // );
            
            
            // // debugger
            
            // //飞机
            // $('#flight-animation').on('click', function() {
            //     // alert(123123);
            //         // $(window.element).popover('hide');
            //         // $(window.element).popover('destroy');
            //         // map.removeLayer(layer);
            //         // // stopAnimation();
            //         // var le = map.getLayers().array_.length;
            //         // // console.log(le);
            //         // if (le > 1) {
            //         //     map.removeLayer(map.getLayers().array_[1]);
            //         //     map.removeLayer(map.getLayers().array_[2]);
            //         // }
            //         var style = new ol.style.Style({
            //             stroke: new ol.style.Stroke({
            //                 // color: 'rgba(250,220,100,0.2)',
            //                 color: 'blue',
            //                 width: 2.5
            //             })
            //         });
            //         var flightsSource;
            //         var addLater = function(feature, timeout) {
            //             window.setTimeout(function() {
            //                 feature.set('start', new Date().getTime());
            //                 flightsSource.addFeature(feature);
            //             }, timeout);
            //         };
            //         var pointsPerMs = 0.03;
            //         var animateFlights = function(event) {
            //             var vectorContext = event.vectorContext;
            //             var frameState = event.frameState;
            //             vectorContext.setStyle(style);
            //             var features = flightsSource.getFeatures();
            //             //console.log(features);
            //             for (var i = 0; i < features.length; i++) {
            //                 var feature = features[i];
            //                 if (!feature.get('finished')) {
            //                     var coords = feature.getGeometry().getCoordinates();
            //                     var elapsedTime = frameState.time - feature.get('start');
            //                     var elapsedPoints = elapsedTime * pointsPerMs;
            //                     // console.log(coords.length);
            //                     // console.log(elapsedPoints);
            //                     if (elapsedPoints >= coords.length) {
            //                         feature.set('finished', true);
            //                     }
            //                     var maxIndex = Math.min(elapsedPoints, coords.length);
            //                     var currentLine = new ol.geom.LineString(coords.slice(0, maxIndex));
            //                     vectorContext.drawGeometry(currentLine);
            //                 } else {
            //                     feature.set('finished', false);
            //                     feature.set('start', new Date().getTime());
            //                 }
            //             }
            //             feature.set('finished', false);
            //             feature.set('start', new Date().getTime());
            //         };
            //         flightsSource = new ol.source.Vector({
            //             wrapX: false,
            //             loader: function() {
            //                 // var url = 'https://openlayers.org/en/v4.4.1/examples/data/openflights/flights.json'; //请求数据
            //                 // urlss.get_lineAnimate,
            //                 var url = 'http://127.0.0.1/route_z/json/1.json';
            //                 // console.log(url);
            //                 $.get(
            //                      url,
            //                      {},
            //                      function(data){
            //                       // alert(12312312);
            //                         var flightsData = data.flights;
            //                         console.log(flightsData.length);
            //                         for (var i = 0; i < flightsData.length; i++) {
            //                             var flight = flightsData[i];
            //                             var from = flight[0];
            //                             var to = flight[1];
            //                             // create an arc circle between the two locations
            //                             var arcGenerator = new arc.GreatCircle({
            //                                 x: from[0],
            //                                 y: from[1]
            //                             }, {
            //                                 x: to[0],
            //                                 y: to[1]
            //                             });
            //                             //速度设置
            //                             var arcLine = arcGenerator.Arc(300,{
            //                                 offset: 10
            //                             });
            //                             if (arcLine.geometries.length === 1) {
            //                                 var line = new ol.geom.LineString(arcLine.geometries[0].coords);
            //                                  // console.log(arcLine.geometries[0].coords);
            //                                 var c = line.transform(ol.proj.get('EPSG:4326'), ol.proj.get('EPSG:3857'));
            //                                 var feature = new ol.Feature({
            //                                     geometry: c,
            //                                     finished: false
            //                                 });
            //                                 addLater(feature, i * 10);
            //                             }
            //                         }
            //                          //map.getView().setCenter([117.199,39.1257]);
            //                         map.on('postcompose', animateFlights);
            //                       },
            //                     'json'
            //                   )
            //             }
            //         });
            //         // console.log(feature);
            //         var flightsLayer = new ol.layer.Vector({
            //             source: flightsSource,
            //             // style : sty
            //         });
            //         map.addLayer(flightsLayer);
            // })
            // //点击截图 点击保存
            // $('#export-png').on('click', function() {
            //     map.once('postcompose', function(event) {
            //         var canvas = event.context.canvas;
            //         if (navigator.msSaveBlob) {
            //             navigator.msSaveBlob(canvas.msToBlob(), "map");
            //         } else {
            //             canvas.toBlob(function(blob) {
            //                 saveAs(blob, "map");
            //             });
            //         }
            //     });
            //     map.renderSync();
            // });
            // //ip 数据的展示
            // $.get(
            //     // urlss.get_ip,
            //     'http://127.0.0.1/route_z/json/2.json',
            //     {},
            //     function(data) {
            //       var format = new ol.format.GeoJSON();
            //       // debugger
            //       var feature = format.readFeatures(data, {
            //           featureProjection: 'EPSG:3857'
            //       });
            //       // console.log(feature);
            //       var len = feature.length;
            //       // var len = data.features.length;
            //       for (var i = 0; i < len; i++) {
            //           var tbd = "<tr class='warning'><td>" + feature[i].get('c_base_station_name')  + "</td><td>"+feature[i].get('ip')+"</td></tr>";
            //           $('.table-responsive1 tbody').append(tbd);
            //       }
            //       if ($(".table-responsive1").height() > 700) {
            //           $(".table-responsive1").height(700);
            //       }
            //     }
            //   )
            // $('#ipshow').on('click', function() {
            //     $(".table-responsive1").toggle();
            // })
            // //手动截图
            // function screenShot(quickStartKey, EndKey) {
            //     var keyLength = quickStartKey.length;
            //     var isKeyTrigger = {};
            //     var cantStartShot = false;
            //     var copyDomCanvas;
            //     var canvasId = 'canvasPage';
            //     var bGcolor = 'rgba(0, 0, 0, 0.2)'; //图层颜色
            //     var color = 'rgba(0, 10, 0, 0.8)'; //边框颜色
            //     var penWidth = 1; // 边框宽度A
            //     quickStartKey.forEach(function(item) {
            //         isKeyTrigger[item] = false
            //     });
            //     $('html').on('keyup', function(e) {
            //         var keyCode = e.which;
            //         if (keyCode === 27) {
            //             endShot([copyDomCanvas, "#" + canvasId, '.result'])
            //             cantStartShot = false
            //         } else if (!cantStartShot) {
            //             isKeyTrigger[keyCode] = true
            //             var notTrigger = Object.keys(isKeyTrigger).filter(function(item) {
            //                 return isKeyTrigger[item] === false
            //             })
            //             if (notTrigger.length === 0) {
            //                 cantStartShot = true
            //                 beginShot(cantStartShot)
            //             }
            //         }
            //     })

            //     function downloadFile(el, fileName, href) {
            //         el.attr({
            //             'download': fileName,
            //             'href': href
            //         })
            //     }

            //     function beginShot(cantStartShot) {
            //         if (cantStartShot) {
            //             html2canvas(document.body, {
            //                 onrendered: function(canvas) {
            //                     copyDomCanvas = canvas;
            //                     document.body.appendChild(copyDomCanvas);
            //                     this._calculateXY = function(e) {
            //                         return {
            //                             x: e.clientX,
            //                             y: e.clientY
            //                         }
            //                     }
            //                     var that = this;
            //                     var startX = 0;
            //                     var startY = 0;
            //                     var isShot = false;
            //                     var layerName = 'name' + Math.random(); //图层名字，每次删除上一图层
            //                     var canvasWrapperId = 'canvasWrapperId'; //最后确定框图
            //                     var css = '<style> .copy-body {position: fixed;bottom: 0;left: 0;background-color: #ffffff;z-index:1}#' + canvasId + ' {position: fixed;top: 0;left: 0;z-index: 2;}';
            //                     css += '#canvasWrapperId {position: fixed;top: 0;left: 0;z-index: 3;}#shot {display: inline-block;padding: 5px 15px;border: 1px solid #cccccc;border-radius: 5px;cursor: pointer;}';
            //                     css += '.result {position: fixed;z-index: 4;cursor: pointer;}.result a {padding: 5px 15px;border-radius: 5px;margin-right: 5px;}</style>';
            //                     $('#' + canvasId).remove();
            //                     $('head').append(css);
            //                     $('body').css('cursor', 'crosshair').append('<canvas id=' + canvasId + ' width=' + canvas.width + ' height=' + canvas.height + '></canvas>'); //添加图层用来画选择框
            //                     $(copyDomCanvas).addClass('copy-body'); //html转化来的canvas图片作为背景
            //                     $('#' + canvasId).mousedown(function(e) {
            //                         $('.result').remove();
            //                         $("#" + canvasId).removeLayer(layerName);
            //                         layerName += 1;
            //                         startX = that._calculateXY(e).x;
            //                         startY = that._calculateXY(e).y;
            //                         isShot = true;
            //                         $("#" + canvasId).addLayer({
            //                             type: 'rectangle',
            //                             strokeStyle: color,
            //                             strokeWidth: penWidth,
            //                             fillStyle: bGcolor,
            //                             name: layerName,
            //                             fromCenter: false,
            //                             x: startX,
            //                             y: startY,
            //                             width: 1,
            //                             height: 1
            //                         })
            //                     }).mousemove(function(e) {
            //                         if (isShot) {
            //                             $("#" + canvasId).removeLayer(layerName);
            //                             var moveX = that._calculateXY(e).x;
            //                             var moveY = that._calculateXY(e).y;
            //                             var width = moveX - startX;
            //                             var height = moveY - startY;
            //                             $("#" + canvasId).addLayer({
            //                                 type: 'rectangle',
            //                                 strokeStyle: color,
            //                                 strokeWidth: penWidth,
            //                                 fillStyle: bGcolor,
            //                                 name: layerName,
            //                                 fromCenter: false,
            //                                 x: startX,
            //                                 y: startY,
            //                                 width: width,
            //                                 height: height
            //                             });
            //                             $("#" + canvasId).drawLayers();
            //                         }
            //                     }).mouseup(function(e) {
            //                         var moveX = that._calculateXY(e).x
            //                         var moveY = that._calculateXY(e).y
            //                         var width = Math.abs(moveX - startX)
            //                         var height = Math.abs(moveY - startY)
            //                         isShot = false;
            //                         $('body').append('<div class="result"><a class="ok btn btn-primary">确定</a></div>')
            //                         $('.result').css({
            //                             'top': moveY - startY < 0 ? startY - 32 : moveY - 32,
            //                             'left': moveX - startX < 0 ? startX - 60 : moveX - 60
            //                         })
            //                         $('.ok').on('click', function() {
            //                             $('body').append('<canvas id="canvasResult" width=' + width + ' height=' + height + ' style="display:none"></canvas>') //添加图层用来画选择框
            //                             var canvasResult = document.getElementById('canvasResult');
            //                             var ctx = canvasResult.getContext("2d");
            //                             ctx.drawImage(copyDomCanvas, moveX - startX > 0 ? startX : moveX, moveY - startY > 0 ? startY : moveY, width, height, 0, 0, width, height);
            //                             var dataURL = canvasResult.toDataURL("image/png");
            //                             downloadFile($('.ok'), 'screenShot' + Math.random().toString().split('.')[1] || Math.random() + '.png', dataURL);
            //                             endShot([copyDomCanvas, "#" + canvasId, '.result']);
            //                             $('body').css('cursor', 'default');
            //                             ctx.clearRect(0, 0, width, height);
            //                             canvasWrapperId = '';
            //                             $(copyDomCanvas).removeClass('copy-body');
            //                             $('#canvasResult').remove();
            //                         })
            //                     })
            //                 }
            //             })
            //         }
            //     }

            //     function endShot(resetObj) {
            //         if (resetObj) {
            //             if (Array.isArray(resetObj)) {
            //                 resetObj.forEach(function(item) {
            //                     $(item).remove()
            //                 })
            //             } else {
            //                 console.error('resetObj must be a Array')
            //             }
            //         }
            //         $('body').css('cursor', 'default');
            //     }
            // }
            // screenShot([16, 65], 27);
        },
        remove: function() {
          
        }
    });
    return animate;
});