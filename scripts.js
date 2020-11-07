$( document ).ready(function() {

// === SETUP ===
var options = {
  valueNames: [ 'name', 'description', 'god', { attr: 'src', name: 'thumbnail'} ],
  item: 'list-item'
};

var selectedBoonsList = new List('selected-boons-list', options);

var boonsList = new List('all-boons-list', options, boonsData);

// === INTERACTIONS ===
$('.filter-god').click(function() {
   var godName = $(this).text();
   console.log(godName);
  boonsList.filter(function(item) {
    if (item.values().god == godName ) {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#all-boons-list .boon').click(function() {

  var boonName = $(this).find(".name").text();

  var selectedItem = selectedBoonsList.get('name', boonName);


  if (selectedItem.length == 0){
    var boonItem = boonsList.get('name', boonName);
    selectedBoonsList.add(boonItem[0].values());
  }

});

$('.filter-god-none').click(function() {
  boonsList.filter();
  return false;
});
});