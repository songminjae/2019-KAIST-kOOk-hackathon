from urllib.request import urlopen
from bs4 import BeautifulSoup

import mongo_connection
import pymongo
from pymongo import MongoClient


#html = urlopen('http://www.kyobobook.co.kr/bestSellerNew/bestseller.laf')
#html = urlopen('https://www.kaggle.com/datasnaek/youtube-new')
html = urlopen('http://www.kyobobook.co.kr/bestSellerNew/bestseller.laf?mallGb=KOR&linkClass=C&range=1&kind=0&orderClick=DAb')
bsObject = BeautifulSoup(html, "html.parser")

book_page_urls = []
for cover in bsObject.find_all('div', {'class':'detail'}):
    link = cover.select('a')[0].get('href')
    book_page_urls.append(link)

for index, book_page_url in enumerate(book_page_urls):
    html = urlopen(book_page_url)
    bsObject = BeautifulSoup(html, "html.parser")
    title = bsObject.find('meta', {'property':'rb:itemName'}).get('content')
    author = bsObject.select('span.name a')[0].text
    #image = bsObject.find('meta', {'property':'rb:itemImage'}).get('content')
    #url = bsObject.find('meta', {'property':'rb:itemUrl'}).get('content')
    #originalPrice = bsObject.find('meta', {'property': 'rb:originalPrice'}).get('content')
    #salePrice = bsObject.find('meta', {'property':'rb:salePrice'}).get('content')

    print(index+1, title, author)
    mongo_connection.save(title, author)
    #print(index+1, title, author, image, url, originalPrice, salePrice)
