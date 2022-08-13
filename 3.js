function pairProgramming(experiences, mostExperienced) {
	var a;
	var b;
	var data = [...experiences];
	var origin = [...experiences];
	data.sort((c, d) =>  c - d);
	
	if (mostExperienced) {
		a = data[data.length - 1];
		b = data[data.length - 2];
	} else {
		a = data[0];
		b = data[1];
	}
	var indexa = experiences.findIndex(e => e == a);
	experiences.splice(indexa,1);
	var indexb = origin.findIndex(e => e == b);
	return [indexa,indexb].sort((c, d) =>  c - d);
}
