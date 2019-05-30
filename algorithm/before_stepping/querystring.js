var  uri = 'http://curicuri.curious/jeager?category=80&product_id=dsage14sd&query=cap+small'; 
var  queryString =  {};
uri.replace( 
	new RegExp ("([^?=&]+)(=([^&]*))?" , "g" ),
	function ($0, $1, $2, $3) { queryString[$1] =  $3; } 
); 
console.log(queryString)