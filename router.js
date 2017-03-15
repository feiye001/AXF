define("router",["backbone"],function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			"":"index",
			"index":"index",
			"market":"market",
			"cat":"cat",
			"mine":"mine"
		},
		index: function(){
			require(["index"],function(index){
				index.init();
			});
		},
		market: function(){
			require(["market"],function(market){
				market.init();
			});
		},
		mine: function(){
			require(["mine"],function(mine){
				mine.init();
			})
		},
		cat: function(){
			require(["cat"],function(cat){
				cat.init();
			})
		}
	});
	return new Router();
});