// https://www.emag.ro/laptopuri/c?ref=hp_menu_quick-nav_1_1&type=category

var paragrafePreturi = document.querySelectorAll('p.product-new-price');  // NodeList(70) [p.product-new-price, p.product-new-price, p.product-n

// map, filter, reduce
paragrafePreturi[0].childNodes[0] // ---> "1.499"
paragrafePreturi[1].childNodes[0] // ---> "3.599"
// ...

var preturi = [];
for(var i=0; i<paragrafePreturi.length; i++){
	preturi.push(paragrafePreturi[i].childNodes[0]);
}



var preturi = paragrafePreturi.map(x => x.childNodes[0]);

// nu putem apela paragrafePreturi.map pentru ca paragrafePreturi NU e un array
// array.slice() obtii un array
// nu putem apela paragrafePreturi.slice

var paragrafePreturiArray = [].slice.apply(paragrafePreturi);  /// NodeList ---transformare---> array (ca sa putem apela map, reduce, filter etc.)

paragrafePreturiArray.map(x => { if(x.childNodes[0]) return x.childNodes[0].nodeValue})
	// !!!!!
	// array.filter(FUNCTIE)
	// array.map(FUNCTIE)


	// NodeList.filter XXXXX
	// NodeList.map   XXXXX


		// !!!!
[].slice.apply(document.querySelectorAll('p.product-new-price')).map(x => { if(x.childNodes[0]) return x.childNodes[0].nodeValue})