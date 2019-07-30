var SPARQL_ENDPOINT = 'http://training.fairdata.solutions/sparql?query='

var TEMPLATE_QUERIES = {
  1 : {
    text : 'A user of the virtual platform (VP) wants to discover all patient registries for a particular country',
    variables : [ 'country', 'registryType'],
    query : readFile('sparqlQueries/template1.sparql', 'text')

  },
  2 : {
    text : 'A user of the virtual platform (VP) wants to discover all patient registries that deal with specific disease',
    variables : [ 'disease', 'registryType'],
    query : readFile('sparqlQueries/template2.sparql', 'text')
  },

  3 : {
    text : 'A user of the virtual platform (VP) wants to discover all patient registries for a particular disease in their country',
    variables : [ 'disease', 'country', 'registryType'],
    query : readFile('sparqlQueries/template1.sparql', 'text')

  },
};

var VARIABLE_QUERIES = {
  country : readFile('sparqlQueries/getCountries.sparql', 'text'),
  disease : readFile('sparqlQueries/getDiseases.sparql', 'text'),
  registryType : readFile('sparqlQueries/getRegistryType.sparql', 'text')

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
