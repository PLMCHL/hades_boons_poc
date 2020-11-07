$( document ).ready(function() {

// === SETUP ===
var options = {
  valueNames: [ 'name', 'description', 'god', { attr: 'src', name: 'thumbnail'}, { data: ['tier'] },],
  item: 'list-item'
};

var selectedBoonsList = new List('selected-boons-list', options);

var boonsList = new List('all-boons-list', options, boonsData);

// === LOAD BUILD ===
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const build = urlParams.get('build')

if (build != null){
  var loadedBoonList;

  try {
    loadedBoonList = JSON.parse(decompress(build));
  }
  catch(err) {
    console.log("Could not parse build input: " +  err.message);
  }

  if (loadedBoonList != null){
    for(i = 0; i < loadedBoonList.length; i++){
      var boonName = loadedBoonList[i];
      selectBoon(boonName)
    }
  }
}

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


$('#all-boons-list').on('click', '.boon', function() {
  var boonName = $(this).find(".name").text();
  selectBoon(boonName);
  updateUrl();
  return false;
});

$('#selected-boons-list').on('click', '.boon', function() {
  var boonName = $(this).find(".name").text();
  var selectedItem = selectedBoonsList.remove('name', boonName);
  updateUrl();
  return false;
});

$('.filter-god-none').click(function() {
  boonsList.filter();
  return false;
});     

// === FUNCTIONS ===
function selectBoon(boonName) {
  var selectedItem = selectedBoonsList.get('name', boonName);

  if (selectedItem.length == 0){
    var boonItem = boonsList.get('name', boonName);
    selectedBoonsList.add(boonItem[0].values());
  }
}

function updateUrl() {
   var compressedBuild = compress(getBuildString());
  var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?build=' + compressedBuild;
  window.history.pushState({path:newurl},'',newurl);
}

function compress(string) {
  return LZUTF8.compress(string, {outputEncoding: "StorageBinaryString"});
}

function decompress(string) {
  return LZUTF8.decompress(string, {inputEncoding: "StorageBinaryString"});
}

function getBuildString() {
  var selectedItems = selectedBoonsList.items;
  var nameList = [];

  for(i = 0; i < selectedItems.length; i++){
    var name = selectedItems[i].values().name;
    nameList.push(name);
  }

  return  JSON.stringify(nameList);
}

});

