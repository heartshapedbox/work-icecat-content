import os
os.chdir("C:\\Users\\baben\\Documents\\GitHub\\work-icecat-content")
import requests
import json
import csv
from bs4 import BeautifulSoup

url = "https://bo.icecat.biz/index.cgi?sessid=6BgHpZT20VEan84znEuQvAa0kx15xnG2y42QHoseHX24EA0o;tmpl=feature_values.html;feature_id=14712;"
headers = {
    "Access-Control-Allow-Origin": "*",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"
}

requests = requests.get(url, headers = headers)
web_page = requests.text

with open("index.html", "w", encoding="utf-8") as file:
    file.write(web_page)
with open("index.html", encoding="utf-8") as file:
    web_page_data = file.read()

soup = BeautifulSoup("web_page_data", "lxml")
print(soup)
