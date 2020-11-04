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

	# print(len(table_rows))

	# for tr in table_rows:
	#     td = tr.find_all('td')
	#     row = [i.text for i in td]
	#     print(row)

	# Remove header element
	table_rows.pop(0)

	json_data = []
	for tr in table_rows:
	    jsonObj = {}

	    nameCell = tr.find("td", {"class": "boonTableName"})
	    name = nameCell.find("b").find(text=True);
	    jsonObj["name"] = name

	    json_data.append(jsonObj)

	print(json_data)