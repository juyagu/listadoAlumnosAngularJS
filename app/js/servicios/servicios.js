angular
  .module('appClase4')
  .factory('servicios',function($http,$log){
    return{
      obtenerAlumnos: function(){
        var promesa = $http.get('js/json/listaAlumnosJSON.json').then(response =>{
          $log.log(response);
          return response.data.alumnos;
        });
        return promesa;
      },
      obtenerMaestros: function(){
        var promesa = $http.get('js/json/listaMaestrosJSON.json').then(function(response){
          return response.data.maestros;
        });
        return promesa;
      }
    }
  })