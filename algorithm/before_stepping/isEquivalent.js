function isEquivalent(a, b){
	var aProperties = Object.getOwnPropertyNames(a);
	var bProperties = Object.getOwnPropertyNames(b);

	if(aProperties.length != bProperties.length){
		return false;
	}

	for(var i=0; i<aProperties.length; i++){
		var aPropertyName = aProperties[i];
		if(a[aPropertyName] !== b[aPropertyName]){
			return false;
		}
	}
	return true;
}