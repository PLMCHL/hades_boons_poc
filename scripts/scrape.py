import re
import json
import requests
from bs4 import BeautifulSoup

godList = ["Aphrodite", "Ares", "Artemis", "Athena", "Demeter", "Dionysus", "Hermes", "Poseidon", "Zeus"]
json_data = []

for godName in godList:
	URL = 'https://hades.gamepedia.com/' + godName
	page = requests.get(URL)

	soup = BeautifulSoup(page.content, 'html.parser')

	table = soup.find("table", {"class": "boonTableSB"})

	table_rows = table.tbody.find_all('tr', recursive=False)

	# Remove header element
	table_rows.pop(0)

	for tr in table_rows:
	    jsonObj = {}

	    # Skip Duo Boons, they will be taken care of later
	    rarityCell =  tr.findAll("td")[2::3]
	    tier = re.findall(r"Duo", rarityCell[0].text);
	    if len(tier) > 0:
	    	print("Skipping Duo Boon")
	    	continue;

	    # Name
	    nameCell = tr.find("td", {"class": "boonTableName"})
	    name = nameCell.find("b").find(text=True);
	    jsonObj["name"] = name

	    # Thumbnail
	    fullThumbnailUrl = nameCell.find("img")['src'];
	    thumbnailMatch = re.findall(r"^.*\.png", fullThumbnailUrl);
	    jsonObj["thumbnail"] = thumbnailMatch[0];

	    # Description
	    descriptionCell = tr.find("td", {"class": "boonTableDescription"})
	    description = descriptionCell.text;
	    jsonObj["description"] = description

	    # Notes
	    notesCell = tr.find("td", {"class": "boonTableNotes"})
	    notes = notesCell.text;
	    jsonObj["notes"] = notes

	   	# Tier
	    tier = re.findall(r"Tier (\d)", notes);
	    if len(tier) > 0:
	    	jsonObj["tier"] = tier[0]
	    else:
	    	print("Missing tier - " + name)

	    # God
	    jsonObj["god"] = godName

	    json_data.append(jsonObj)

# TODO Crawl Duo boons
# https://hades.gamepedia.com/Duo_Boons

# TODO Crawl Chaos boons
# https://hades.gamepedia.com/Chaos

# Construct data and write to file
file_data = "// This is not ideal, but want to keep being able to run this locally without a server, so no loading json directly yet.\nvar boonsData = " + json.dumps(json_data, indent=2) + ";"

f = open("../data.js", "w")
f.write(file_data)
f.close()