$( document ).ready(function() {var listItems = [
     { 
       name: 'Deadly Strike', 
       description:'Your Attack is stronger, with +15% chance to deal Critical damage.', 
       god: 'Artemis',
       thumb: 'https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/2a/Deadly_Strike.png',
     },
     { 
       name: 'Hunter Instinct', 
       description:'Your God Gauge charges faster when you deal Critical damage.', 
       god: 'Artemis',
       thumb: 'https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/76/Hunter_Instinct.png',
     },
  { 
       name: 'Electric Shot', 
       description:'Your Cast is a burst of chain-lightning that bounces between foes.', 
       god: 'Zeus',
       thumb: 'https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/01/Electric_Shot.png',
     }
];

var options = {
  valueNames: [ 'name', 'description', 'god', { attr: 'src', name: 'thumb'} ],
  item: 'list-item'
};

var featureList = new List('hades-boons-list', options, listItems);

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