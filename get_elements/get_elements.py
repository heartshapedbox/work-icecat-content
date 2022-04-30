import urllib
import urllib.request
from bs4 import BeautifulSoup as BS

html = urllib.request.urlopen("").read()

soup = BS(html)
print(soup)
