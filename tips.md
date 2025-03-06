## quantifiers

| Quantificador |	Descrição |	Exemplo |
| ------------- | --------- | ------- |
| * | Coincide com 0 ou mais ocorrências do elemento anterior. | a* corresponde a "", "a", "aa", "aaa", etc. |
| + | Coincide com 1 ou mais ocorrências do elemento anterior. | a+ corresponde a "a", "aa", "aaa", etc., mas não a "". |
| ? | Coincide com 0 ou 1 ocorrência do elemento anterior. | a? corresponde a "" ou "a". |
| {n} | Coincide exatamente com “n” ocorrências do elemento anterior. | a{3} corresponde a "aaa", mas não a "aa" ou "a". |
| {n,} | Coincide com pelo menos “n” ocorrências do elemento anterior. | a{2,} corresponde a "aa", "aaa", "aaaa", etc. |
| {n,m} | Coincide com pelo menos “n” e no máximo “m” ocorrências do elemento anterior. | a{2,4} corresponde a "aa", "aaa" ou "aaaa", mas não a "a" ou "aaaaa". |

## Mas quando utilizar o Greedy ou Lazy?
- Greediness para Correspondências Longas : O comportamento ganancioso é útil quando você deseja encontrar a correspondência mais longa possível em uma sequência. Por exemplo, ao extrair conteúdo entre tags HTML, você pode usar <.*> para corresponder a todo o conteúdo entre a primeira tag < e a última tag >, mesmo que haja várias tags no meio.

- Laziness para Correspondências Curtas: O comportamento não ganancioso é útil quando você deseja encontrar correspondências mais curtas em uma sequência. Isso é especialmente útil ao extrair conteúdo entre tags HTML individualmente. Usando <.*?>, você corresponderá ao conteúdo entre a primeira tag < e a primeira tag >, e depois entre a segunda tag < e a segunda tag >, e assim por diante.

## Como utilizar os quantificadores greedy e lazy?

Para facilitar, vamos disponibilizar uma tabela com a combinação entre Quantificadores para transformá-los em greedy(gananciosos) e lazy (não-gananciosos):

| Quantificador |	Descrição |	Exemplo |
| ------------- | --------- | ------- |
| * (greedy) |	Corresponde a 0 ou mais ocorrências (ganancioso). |	a.*b corresponde a "aabab" em "aabab" (correspondência mais longa possível). |
| *? (lazy) |	Corresponde a 0 ou mais ocorrências (não ganancioso). |	a.*?b corresponde a "aab" em "aabab" (correspondência mais curta possível). |
| + (greedy) | Corresponde a 1 ou mais ocorrências (ganancioso). | a.+b corresponde a "aabab" em "aabab" (correspondência mais longa possível). |
| +? (lazy) |	Corresponde a 1 ou mais ocorrências (não ganancioso).	| a.+?b corresponde a "aab" em "aabab" (correspondência mais curta possível). |
| ? (greedy) | Corresponde a 0 ou 1 ocorrência (ganancioso). | a.?b corresponde a "ab" em "aab" (correspondência mais longa possível). |
| ?? (lazy) | Corresponde a 0 ou 1 ocorrência (não ganancioso). | a.??b corresponde a "ab" em "aab" (correspondência mais curta possível). |
| {n,m} (greedy) | Corresponde a pelo menos n e no máximo m ocorrências (ganancioso). | a{2,3} corresponde a "aaa" em "aaaa" (correspondência mais longa possível). |
| {n,m}? (lazy) | Corresponde a pelo menos n e no máximo m ocorrências (não ganancioso). | a{2,3}? corresponde a "aa" em "aaaa" (correspondência mais curta possível). |

