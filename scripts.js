$( document ).ready(function() {

var options = {
  valueNames: [ 'name', 'description', 'god', { attr: 'src', name: 'thumbnail'} ],
  item: 'list-item'
};

var featureList = new List('hades-boons-list', options, boonsData);

$('.filter-god').click(function() {
   var godName = $(this).text();
   console.log(godName );
  featureList.filter(function(item) {
    if (item.values().god == godName ) {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-god-none').click(function() {
  featureList.filter();
  return false;
});
});