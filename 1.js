function isValidHtml(html) {
	var tr = [];
	var isValid = true;
	var htmlSpecificCharRemove = html.replace(/[^a-zA-Z ]/g, " ").substring(1).split(' ').filter(e => e != '');
	for (let i = 0; i < htmlSpecificCharRemove.length; i++) {
		const char = htmlSpecificCharRemove[i];
		if (!tr.includes(char)) {
			tr.push(char);
		}else{
			console.log(char);
			if (htmlSpecificCharRemove[i-1] != char  && !isOccuranrePair(tr, htmlSpecificCharRemove[i-1])) {
				isValid = false
			}			
		}
		
	}
	return isValid
}
function isOccuranrePair(data, el) {
	var count = 0;
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		if(element == el){
			count += 1 
		}
	}
	return count%2 == 0 ? true : false
}




