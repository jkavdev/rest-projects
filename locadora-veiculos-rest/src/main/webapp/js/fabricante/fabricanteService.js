App.factory('FabricanteService', function($http, API){
	return {
		list: function(){
			return $http.get(API+'fabricante');
		},
		create: function(item){
			return $http.post(API+'fabricante', item);
		},
		update: function(item, id){
			return $http.put(API+'fabricante/'+id, item);	
		},
		delete: function(id){
			return $http.delete(API+'fabricante/'+id);
		}
	}
})