document.addEventListener("DOMContentLoaded", function(){

 $.select("#teacher").addEventListener('click', function(e){
   e.preventDefault();
   var url = this.href
   $.ajax({
     type: "GET",
     url: url
   }).then(function(response){
     var data = {teacher: JSON.parse(response)};
     var template = $.select('#teacher-template').innerHTML;
     var compileTemplate = Handlebars.compile(template);
     var compiler = compileTemplate(data);

     $.select('#content').innerHTML = compiler;

   })
 });

