var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
users.sort();
var output="";
var urls = "";
var names = "";
var stat = "";
for(var i = 0; i < users.length; i++){
$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+users[i]+'?callback=?', function(data) {
	//alert(JSON.stringify(data));
	
 if(data["stream"]==null){
	 output += "offline,"; 
	 urls += "none,"
	 names += data["_links"]["channel"] + ",";
	 stat += ",";
 }
 else if(data["stream"] == "undefined"){
	 output += "Account Closed,";
	 urls += "https://www.twitch.tv/Account Closed,";
	 names += "Account Closed,";
	 stat += ",";
 }
 else{
	 output += "online,";
	 urls += data["stream"]["channel"]["url"]+",";
	 names += data["stream"]["channel"]["display_name"] +",";
	 stat += data["stream"]["channel"]["status"] + ",";
 }
 setVar(output, urls, names, stat);
});
}

function setVar(output, urls, names, stat){
	//alert(names+"\n",urls);
	k=output.split(",");
	u = urls.split(",");
	n = names.split(",");
	s = stat.split(",");
	if(k.length == 9){
		var ins = "";
		ins += "<table class = 'table-hover table-bordered'><th>User</th><th>Current Status</th>";
		for(var j = 0; j < 8; j++){
		//alert(users[j]+", "+k[j]+ ", " + u[j]);
		 
		 if(k[j] == "online"){
			 
		 ins += "<tr><td><div id='one'><h4>"+n[j]+" </h4></div><div><h5>"+ s[j] +"</h5></div></td>";
		 ins += "<td><u><a href='" + u[j] + "'target='_blank'>" + k[j] + "</a></u></td></tr>";
		 }
		 else if(k[j] == "undefined"){
			 var tst = n[j].length;
			ins += "<tr><td><div id='one'><h4>"+n[j].substring(38, tst)+"</h4> </div></td>";
			ins += "<td><u><a href='https://www.twitch.tv/" + n[j].substring(38, tst) + "'target='_blank'>" + k[j] + "</a></u></td></tr>";
		 }
		 else{
			 var tst = n[j].length;
			ins += "<tr><td><div id='one'><h4>"+n[j].substring(38, tst)+"</h4> </div></td>";
			ins += "<td><u><a href='https://www.twitch.tv/" + n[j].substring(38, tst) + "'target='_blank'>" + k[j] + "</a></u></td></tr>";
		}
		}
		ins += "</table>";
		//alert(ins);
		$("#stream").html(ins);
	}
	
}