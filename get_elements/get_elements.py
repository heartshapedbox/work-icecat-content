import urllib
import urllib.request
from bs4 import BeautifulSoup as BS

html = urllib.request.urlopen("https://bo.icecat.biz/index.cgi?sessid=6BgHpZT20VEan84znEuQvAa0kx15xnG2y42QHoseHX24EA0o;tmpl=feature_values.html;feature_id=14712;").read()

soup = BS(html)
print(soup)





# with urllib.request.urlopen("http://www.python.org") as url:
#     s = url.read()
#     # I'm guessing this would output the html source code ?
#     print(s)
