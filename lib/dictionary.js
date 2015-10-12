var Dictionary = Dictionary || {};

Dictionary.check = function(word, callback){
  $.ajax({
    url: "https://api.pearson.com:443/v2/dictionaries/ldoce5/entries?headword="+word,
  }).done(function(data, response){
    var result;
    if (data.results.length > 0) {
      result = true;
    } else {
      result = false;
    }

    callback(result);
  })
}

window.dictionary = Dictionary;