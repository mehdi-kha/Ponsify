(function() {

    function ponsify(x, y, z) {
    	//Rule out the case where x>y
    	if (x>y){
    		return 0;
    	}
    	var pos = x;
    	var sol = pos;
    	while (y-pos>=z){
    		pos+=z; //Move the cursor
    		sol += pos
    	}
        console.log(sol);
        return sol;
    }
    
    // required to export for tests
    // DO NOT TOUCH
    var exports = module.exports;
    module.exports = ponsify;
})();
