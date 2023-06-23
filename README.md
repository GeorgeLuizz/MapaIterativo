# Territórios Brasileiros
Para abrir a aplicação, abra o diretorio e o arquivo index.html no navegador.

A pagina index.html foi construida usando somente HTML e CSS e todas as imagens e botões foram importadas do arquivo prototipo disponivel no adobeXD.

A pagima map.html foi construida utilizando HTML, CSS e Javascript nativo.<br>
Para o desenvolvimento  do mapa, optei por construir em .svg por conseguir manipular os elementos.<br>
Nos botões de informação, utilizei a biblioteca tippy.js para gerar os tooltips através de iterações.<br>
<br>
Os botões de informação dos estados, optei tratar como um objeto, contendo como chave: html, id e content.<br>
Na chave html coloquei como valor um codigo html que contem o poligono svg e a posição respectiva do estado que que ele precisa estar em cima.<br>
A chave id usei para iterar com a biblioteca Tippy.JS para colocar os tooltips em seus determinado lugar.<br>
A chave content foi usada para armazenar o conteudo do toolkit.
<br>
Obs: Optei por contruir o projeto com Javascript nativo por se tratar de paginas e eventos mais simples.
