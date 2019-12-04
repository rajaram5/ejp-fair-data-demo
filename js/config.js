var SPARQL_ENDPOINT = 'http://ejprd.fair-dtls.surf-hosted.nl:8890/sparql?query='

var TEMPLATE_QUERIES = {
  1 : {
    text : 'Find patient registries or biobanks located in a particular country',
    variables : [ 'country', 'registryType'],
    query : readFile('sparqlQueries/template1.rq', 'text')

  },
  2 : {
    text : 'Find patient registries or biobanks linked to a specific disease',
    variables : [ 'disease', 'registryType'],
    query : readFile('sparqlQueries/template2.rq', 'text')
  },

  3 : {
    text : 'Find patient registries or biobanks located in a particular country and linked to a specific disease',
    variables : [ 'disease', 'country', 'registryType'],
    query : readFile('sparqlQueries/template1.rq', 'text')

  },
};

var VARIABLE_QUERIES = {
  country : readFile('sparqlQueries/getCountries.rq', 'text'),
  disease : readFile('sparqlQueries/getDiseases.rq', 'text'),
  registryType : readFile('sparqlQueries/getRegistryType.rq', 'text')

}

function readFile(url, dataType) {
  var content = null;
  $
      .ajax({
        url : url,
        async : false,
        cache : false,
        dataType : dataType,
        success : function(response) {
          content = response;
          console.log("Content of the file < " + url + "> is read successful")
        },
        error : function(xhr) {
          var errorMsg = ("An error reading file : " + xhr.status + " " + xhr.statusText);
          alert(errorMsg);
          console.log(errorMsg)
        }
      });
  return content;
}
