import requests
import re

url = "https://monicahillman.github.io/monibank/"
response = requests.get(url)

if response.status_code == 200:
    pagina = response.text

    padrao = r'\bbank\b'

    linhas = pagina.split('\n')

    for indice, linha in enumerate(linhas, start=1):
        if re.search(padrao, linha, re.IGNORECASE):
            print(f"Linha {indice}: {linha}")
else:
    print(f"A requisição GET para {url} falhou com o código {response.status_code}")