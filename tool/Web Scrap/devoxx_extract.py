from bs4 import BeautifulSoup
import requests
import json
import time

# Devoxx US 2017
# confName = "Devoxx, US 2017"
# fileName = "devoxx-us-17.json"
# baseUrl = "https://cfp.devoxx.us" 
# homeUrl = "/2017/byday/tue"

# Devox Poland 2017
# confName = "Devoxx, Poland 2017"
# fileName = "devoxx-pl-17.json"
# baseUrl = "http://cfp.devoxx.pl" 
# homeUrl = "/2017/byday/wed"

# Devox Poland 2016
# confName = "Devoxx, Poland 2016"
# fileName = "devoxx-pl-16.json"
# baseUrl = "http://cfp.2016.devoxx.pl/2016/" 
# homeUrl = "byday/wednesday.html"

# Devox Poland 2015
# confName = "Devoxx, Poland 2015"
# fileName = "devoxx-pl-15.json"
# baseUrl = "http://cfp.2015.devoxx.pl/2015/" 
# homeUrl = "byday/monday.html"

# Devox Belgium 2017
# confName = "Devoxx, Belgium 2017"
# fileName = "devoxx-bl-17.json"
# baseUrl = "https://cfp.devoxx.be" 
# homeUrl = "/2017/byday/mon"

# Devox Belgium 2016
# confName = "Devoxx, Belgium 2016"
# fileName = "devoxx-bl-16.json"
# baseUrl = "https://cfp.devoxx.be/2016/" 
# homeUrl = "byday/mon.html"

# Devox Belgium 2015
confName = "Devoxx, Belgium 2015"
fileName = "devoxx-bl-15.json"
baseUrl = "https://cfp.devoxx.be" 
homeUrl = "/2017/byday/mon"

finalJSON = []

print ("WebScrap Started :: " + time.strftime('%H:%M:%S'))
data = requests.get(baseUrl+homeUrl).text

soup = BeautifulSoup(data, "html.parser")

for link in soup.find_all('span', {'class' : 'title'}):
    tempData = {}
    pageUrl = baseUrl + link.a['href']
    tempData["title"] = link.a.text
    absData = requests.get(pageUrl).text
    absSoup = BeautifulSoup(absData, "html.parser")
    for abs in absSoup.find_all('div', {'class' : 'columns large-offset-1 large-6'}):
        tempData["abstract"] = abs.table.tbody.find_all('tr')[2:3][0].td.text.strip()
        tempData["url"] = pageUrl
        tempData["confName"] = confName
        print(tempData)
    finalJSON.append(tempData)

with open(fileName, 'w+') as outfile:
    json.dump(finalJSON, outfile)
print ("WebScrap Ended :: " + time.strftime('%H:%M:%S'))
print ("JSON generated @ " + fileName)
