//phonecatApp.directive() //   return library.json.prettyPrint(planet);
//return JSON.stringify(planet);

if (!library)
   var library = {};

library.json = {
   replacer: function(match, pIndent, pKey, pVal, pEnd) {
      var key = '<span class=json-key>';
      var val = '<span class=json-value>';
      var str = '<span class=json-string>';
      var r = pIndent || '';
      if (pKey)
         r = r + key + pKey.replace(/[": ]/g, '') + '</span>: ';
      if (pVal)
         r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>';
      return r + (pEnd || '');
      },
      
   prettyPrint: function(obj) {
      var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
      return JSON.stringify(obj, null, 3)
         .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
         .replace(/</g, '&lt;').replace(/>/g, '&gt;')
         .replace(jsonLine, library.json.replacer);
      }
   };


asteroidsApp.directive('myNav', function(){
  // was $resource('planets/:planetID.json', {}, {
    function link(scope, element, attrs) {
        
          element.find('a').on('click', function() {
            var self = $(this);
            element.children().removeClass('active');
            self.parent().addClass('active');
          });
    }

    return {
      link: link
    };
});

asteroidsApp.directive('myPlanet', function(){
  // was $resource('planets/:planetID.json', {}, {
    function link(scope, element, attrs) {
        
         // var stuff = JSON.parse(element.text());
        //  element.html(library.json.prettyPrint(stuff));
    }

    return {
      link: link
    };
});


// asteroidsApp.directive('prettyJson', function(){
//   
//    
//   // was $resource('planets/:planetID.json', {}, {
//     function link(scope, element, attrs) {
//           var jsontext = element.text();
//           
//           element.html(library.json.prettyPrint(account));
//           
//           element.find('a').on('click', function() {
//             var self = $(this);
//             element.children().removeClass('active');
//             self.parent().addClass('active');
//           });
//     }
// 
//     return {
//       link: link
//     };
// });