/*
combined files : 

h5-test/train/index

*/
/**
 * @fileoverview H5Test - Train.
 * @author 
 */
/**
 * KISSY.use('h5-test/train/index',function(S,Train){
 *		new Train();
 * });
 */
KISSY.add('h5-test/train/index',function(S,Base) {

	var Train = Base.extend({
		initializer:function(){
			var self = this;

			// Your Code
			alert('ok');
		}
	},{
		ATTRS: {
			A:{
				value:'abc'
			}
		}
	});

	return Train;
	
},{
	requires:['base']	
});

