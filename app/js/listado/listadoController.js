angular.module('listadoModule')
  .controller('listadoCtrl',listadoFunction)

function listadoFunction($scope,$q,servicios){
  let me = this;
  onInit();

  function onInit(){
    let defered = $q.defer();
    let promesa = defered.promise;
    var promesas = [
      obtenerListaMaestros(),
      obtenerListaAlumnos()
    ];
    $q.all(promesas).then(promesasRes => {
      let arrResponse = promesasRes;
      if((arrResponse[0].length > 0) && (arrResponse[1].length > 0)){
        me.listaMaestros = arrResponse[0];
        me.listaAlumnos = arrResponse[1];
      }
    });
  }

  function obtenerListaMaestros(){
    let defered = $q.defer();
    var promesa = defered.promise;
    servicios
      .obtenerMaestros().then(response => defered.resolve(response))
      .catch(data => defered.resolve([]));
    return promesa;
  }

  function obtenerListaAlumnos(){
    let defered = $q.defer();
    var promesa = defered.promise;
    servicios
      .obtenerAlumnos().then(response => defered.resolve(response))
      .catch(data => defered.resolve([]));
    return promesa;
  }


}