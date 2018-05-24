define(function(){
	var ip="http://127.0.0.1:8080";
	  // var ip="http://172.16.8.67:8080";
	//var ip="http://192.168.10.158:8080";
	//var ip="http://192.168.10.170";
	//var ip="http://172.17.20.165:8080";   / / 改 中心
	//var ip="http://192.168.10.105:8080";
	var url={
		//IP:"http://172.17.20.165/",    / / 改  中心
		IP:"http://127.0.0.1/",
		// IP:"http://172.16.8.67",
		//IP:"http://192.168.10.158/",
		//IP:"http://192.168.10.170/",
		
		// get_station:ip+"/PBS/getStation?",
		// get_station_line:ip+"/PBS/getStationLine?",
		get_station:ip + "/route_z/json/getStation.json",
		// get_fli:ip + "/route_z/json/1.json",
		// get_ip:ip + "/route_z/json/2.json",
		// get_geopolygon:ip+"/PBS/getGeoPolygon?",
		// get_centerpoint:ip+"/PBS/getCenterPoint?",

		get_ip : "/route_z/json/2.json",
		get_pointAnimate : "/route_z/json/3.json",
		get_centerpoint : "/route_z/json/get_centerpoint.json",
		set_Figure:ip+"/PBS/setFigure?",
		del_Figure:ip+"/PBS/delFigure?",
		get_AllFigure:ip+"/PBS/getAllFigure?",
		get_Heat:ip+"/PBS/getHeat?",


		map:"http://127.0.0.1/cgi-bin/tilecache.cgi/1.0.0/osm/{z}/{x}/{-y}.png"
		//map:"http://192.168.65.160/cgi-bin/tilecache.cgi/1.0.0/osm/{z}/{x}/{-y}.png"
		//map:"http://192.168.10.192/cgi-bin/tilecache.cgi/1.0.0/osm/{z}/{x}/{-y}.png"
	};
	// var url = {
		
	
	// 	get_station_line:"/route/json/35.json",
	// 	get_ip : "/route_z/json/2.json",
	// 	//get_station_line:"/route/json/getStationLine.json",
	// 	get_people_line:"/route/json/getPeopleLine.json",
	// 	get_geopolygon:"/route/json/mapdata/geometryProvince/43.json",
	// 	map:"http://172.25.3.97/cgi-bin/tilecache.cgi/1.0.0/osm/{z}/{x}/{-y}.png"
	// };
	return url;
});
