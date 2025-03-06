import requests
import re

url = "https://monicahillman.github.io/monibank/"
response = requests.get(url)
html_content = response.text

# pattern = r'<(h[1-2])[^>]*>(.*?)<\/(h[1-2])>'
pattern = r'<(h[1|2])[^>]*>(.*?)<\/\1>'

headings = re.findall(pattern, html_content, re.DOTALL)
for heading in headings:
  print(heading)