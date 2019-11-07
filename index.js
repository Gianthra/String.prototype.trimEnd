if(!String.prototype.trimEnd){
	String.prototype.trimEnd 
		= String.prototype.trimRight 
		? String.prototype.trimRight
		: function() { return this.replace(/\s+$/); }
}
