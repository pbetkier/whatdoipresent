from bs4 import BeautifulSoup
import requests
import json
import time

confName = "QCon, London 2015"
fileName = "qcon-lon-15.json"
baseUrl = "https://qconlondon.com/london-2015/" 
homeUrl = "schedule.html#day-5"
finalJSON = []

print ("WebScrap Started :: " + time.strftime('%H:%M:%S'))
data = requests.get(baseUrl+homeUrl).text

soup = BeautifulSoup(data, "html.parser")

for link in soup.find_all('a', {'class' : 'presentation-title'}):
    pageUrl = baseUrl + link['href']
    absData = requests.get(pageUrl).text
    absSoup = BeautifulSoup(absData, "html.parser")
    tempData = {}
    for abs in absSoup.find_all('div', {'class' : 'field field-name-field-abstract field-type-text-long field-label-hidden'}):
        tempData["abstract"] = abs.text.strip() 
        tempData["url"] = pageUrl
        tempData["title"] = absSoup.find_all('h1')[0].text[13:].strip()
        tempData["confName"] = confName
    finalJSON.append(tempData)

with open(fileName, 'w+') as outfile:
    json.dump(finalJSON, outfile)
print ("WebScrap Ended :: " + time.strftime('%H:%M:%S'))
print ("JSON generated @ " + fileName)
