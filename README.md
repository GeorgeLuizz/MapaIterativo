# Territórios Brasileiros
Para visualizar abra a pagina index.html em um navegador

A pagina index.html foi construida usando somente HTML e CSS, importando a imagem da documentação proposta.

Ja a pagima map.html foi construida utilizando HTML, CSS e Javascript nativo.<br>
Para o desenvolvimento  do mapa, optei por construir em .svg por se melhor para manipular.<br>
Nos botões de informação, utilizei a biblioteca tippy.js para gerar os tooltips.

No arquivo map.js eu declaro as const dos estados que irão receber o botão de informação e o mapa por completo. Para os estados, optei por gerar um objeto contendo o codigo do svg(html), 
o id, e o content que irá ser iterado na biblioteca tippy.js.<br>
Os botões optei por distribuir usando o laço forEach, onde itero sobre uma array com os paths dos estados.
