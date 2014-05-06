//phonecatApp.directive()
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