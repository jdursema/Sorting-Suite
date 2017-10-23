function mergeSort(array){
	if(array.length <=1){
		return array;
	}
	const midpoint = Math.floor(array.length/2);
	const a = array.slice(0,midpoint);
	const b = array.slice(midpoint, array.length);
	//console.log(a)
	//console.log(b)
	return merge (mergeSort(a), mergeSort(b));
}

function merge(a,b){
	let results = [];
	//console.log('merge happening')
	while(a.length && b.length){
		if(a[0]<=b[0]){
			results.push(a.shift());
		}else{
			results.push(b.shift());
		}
	}
		while(a.length){
			results.push(a.shift());
		}
		while(b.length){
			results.push(b.shift());
		}
		return results;
}


module.exports = mergeSort;