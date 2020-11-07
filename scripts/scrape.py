import re
import json
import requests
from bs4 import BeautifulSoup

godList = ["Artemis", "Ares"]

for godName in godList:
	URL = 'https://hades.gamepedia.com/' + godName
	page = requests.get(URL)

	soup = BeautifulSoup(page.content, 'html.parser')

	table = soup.find("table", {"class": "boonTableSB"})

	table_rows = table.tbody.find_all('tr', recursive=False)

	# Remove header element
	table_rows.pop(0)

	json_data = []
	for tr in table_rows:
	    jsonObj = {}

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

	    json_data.append(jsonObj)

	print(json_data)