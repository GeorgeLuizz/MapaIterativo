const map = document.getElementById('svg-map')

const buttonInfoAM = { html: '<g id="amazonas"><path d="M120.003 157C132.705 157 143.003 146.703 143.003 134C143.003 121.297 132.705 111 120.003 111C107.3 111 97.0029 121.297 97.0029 134C97.0029 146.703 107.3 157 120.003 157Z" fill="white" /><path id="amazonas-button-container" d="M120.003 156C132.153 156 142.003 146.15 142.003 134C142.003 121.85 132.153 112 120.003 112C107.853 112 98.0029 121.85 98.0029 134C98.0029 146.15 107.853 156 120.003 156Z" stroke="white" stroke-width="2"/><path d="M124.23 122.669C124.23 120.521 122.489 118.779 120.34 118.779C118.192 118.779 116.451 120.521 116.451 122.669V146.006C116.451 148.154 118.192 149.896 120.34 149.896C122.489 149.896 124.23 148.154 124.23 146.006V122.669Z" fill="white"/><path d="M108.672 130.448C106.524 130.448 104.782 132.189 104.782 134.338C104.782 136.486 106.524 138.227 108.672 138.227H132.009C134.157 138.227 135.899 136.486 135.899 134.338C135.899 132.189 134.157 130.448 132.009 130.448H108.672Z" fill="white"/></g>', id: "amazonas", content: '<div class="tooltip-state"> <h1>Amazonas </h1> <p>Maior estado do país em extensão territorial./p> </div>'}

const buttonInfoMG = { html: '<g id="minas-gerais"><path d="M 407 349 C 419.703 349 430 338.703 430 326 C 430 313.297 419.703 303 407 303 C 394.297 303 384 313.297 384 326 C 384 338.703 394.297 349 407 349 Z" fill="white" /><path id="minas-gerais-button-container" d="M 407 348 C 419.15 348 429 338.15 429 326 C 429 313.85 419.15 304 407 304 C 394.85 304 385 313.85 385 326 C 385 338.15 394.85 348 407 348 Z" stroke="white" stroke-width="2"/><path d="M 411.227 314.669 C 411.227 312.521 409.486 310.779 407.337 310.779 C 405.189 310.779 403.448 312.521 403.448 314.669 V 338.006 C 403.448 340.154 405.189 341.896 407.337 341.896 C 409.486 341.896 411.227 340.154 411.227 338.006 V 314.669 Z" fill="white"/><path d="M 395.669 322.448 C 393.521 322.448 391.779 324.189 391.779 326.337 C 391.779 328.486 393.521 330.227 395.669 330.227 H 419.006 C 421.154 330.227 422.896 328.486 422.896 326.337 C 422.896 324.189 421.154 322.448 419.006 322.448 H 395.669 Z" fill="white"/></g>', id: "minas-gerais", content: '<div class="tooltip-state"> <h1>Minas Gerais </h1> <p>É o segundo estado com maior quantidade populacional.</p> </div>'}

const buttonInfoBA = {html: '<g id="bahia"><path d="M 432 266 C 444.703 266 455 255.703 455 243 C 455 230.297 444.703 220 432 220 C 419.297 220 409 230.297 409 243 C 409 255.703 419.297 266 432 266 Z" fill="white" /><path id="bahia-button-container" d="M 432 265 C 444.15 265 454 255.15 454 243 C 454 230.85 444.15 221 432 221 C 419.85 221 410 230.85 410 243 C 410 255.15 419.85 265 432 265 Z" stroke="white" stroke-width="2"/><path d="M 436.227 231.669 C 436.227 229.521 434.486 227.779 432.337 227.779 C 430.189 227.779 428.448 229.521 428.448 231.669 V 255.006 C 428.448 257.154 430.189 258.896 432.337 258.896 C 434.486 258.896 436.227 257.154 436.227 255.006 V 231.669 Z" fill="white"/><path d="M 420.669 239.448 C 418.521 239.448 416.779 241.189 416.779 243.337 C 416.779 245.486 418.521 247.227 420.669 247.227 H 444.006 C 446.154 247.227 447.896 245.486 447.896 243.337 C 447.896 241.189 446.154 239.448 444.006 239.448 H 420.669 Z" fill="white"/></g>', id: "bahia", content: '<div class="tooltip-state"> <h1>Bahia  </h1> <p>A capital, Salvador, é conhecida por seu centro histórico.</p> </div>'}

const buttonInfoRS = { html: '<g id="rio-grande-do-sul"><path d="M 281 503 C 293.703 503 304 492.703 304 480 C 304 467.297 293.703 457 281 457 C 268.297 457 258 467.297 258 480 C 258 492.703 268.297 503 281 503 Z" fill="white" /><path id="rio-grande-do-sul-button-container" d="M 281 502 C 293.15 502 303 492.15 303 480 C 303 467.85 293.15 458 281 458 C 268.85 458 259 467.85 259 480 C 259 492.15 268.85 502 281 502 Z" stroke="white" stroke-width="2"/><path d="M 285.227 468.669 C 285.227 466.521 283.486 464.779 281.337 464.779 C 279.189 464.779 277.448 466.521 277.448 468.669 V 492.006 C 277.448 494.154 279.189 495.896 281.337 495.896 C 283.486 495.896 285.227 494.154 285.227 492.006 V 468.669 Z" fill="white"/><path d="M 269.669 476.448 C 267.521 476.448 265.779 478.189 265.779 480.337 C 265.779 482.486 267.521 484.227 269.669 484.227 H 293.006 C 295.154 484.227 296.896 482.486 296.896 480.337 C 296.896 478.189 295.154 476.448 293.006 476.448 H 269.669 Z" fill="white"/></g>', id: "rio-grande-do-sul", content: '<div class="tooltip-state"> <h1>Rio Grande do Sul </h1> <p>O estado possui 497 municípios, sendo a capital Porto Alegre.</p> </div>'}

const buttonInfoMT = { html: '<g id="mato-grosso"><path d="M 243 273 C 255.703 273 266 262.703 266 250 C 266 237.297 255.703 227 243 227 C 230.297 227 220 237.297 220 250 C 220 262.703 230.297 273 243 273 Z" fill="white" /><path id="mato-grosso-button-container" d="M 243 272 C 255.15 272 265 262.15 265 250 C 265 237.85 255.15 228 243 228 C 230.85 228 221 237.85 221 250 C 221 262.15 230.85 272 243 272 Z" stroke="white" stroke-width="2"/><path d="M 247.227 238.669 C 247.227 236.521 245.486 234.779 243.337 234.779 C 241.189 234.779 239.448 236.521 239.448 238.669 V 262.006 C 239.448 264.154 241.189 265.896 243.337 265.896 C 245.486 265.896 247.227 264.154 247.227 262.006 V 238.669 Z" fill="white"/><path d="M 231.669 246.448 C 229.521 246.448 227.779 248.189 227.779 250.337 C 227.779 252.486 229.521 254.227 231.669 254.227 H 255.006 C 257.154 254.227 258.896 252.486 258.896 250.337 C 258.896 248.189 257.154 246.448 255.006 246.448 H 231.669 Z" fill="white"/></g>', id: "mato-grosso", content: '<div class="tooltip-state"> <h1>Mato Grosso</h1> <p>A parte norte de seu território é ocupada pela Amazônia.</p> </div>'}

const buttonInfoPA = { html: '<g id="para" ><path d="M278.003 150C290.705 150 301.003 139.703 301.003 127C301.003 114.297 290.705 104 278.003 104C265.3 104 255.003 114.297 255.003 127C255.003 139.703 265.3 150 278.003 150Z" fill="white"/><path id="para-button-container" d="M278.003 149C290.153 149 300.003 139.15 300.003 127C300.003 114.85 290.153 105 278.003 105C265.853 105 256.003 114.85 256.003 127C256.003 139.15 265.853 149 278.003 149Z" stroke="white" stroke-width="2"/><path d="M282.23 115.669C282.23 113.521 280.489 111.779 278.34 111.779C276.192 111.779 274.451 113.521 274.451 115.669V139.006C274.451 141.154 276.192 142.896 278.34 142.896C280.489 142.896 282.23 141.154 282.23 139.006V115.669Z" fill="white"/><path d="M266.672 123.448C264.524 123.448 262.782 125.189 262.782 127.338C262.782 129.486 264.524 131.227 266.672 131.227H290.009C292.157 131.227 293.899 129.486 293.899 127.338C293.899 125.189 292.157 123.448 290.009 123.448H266.672Z" fill="white"/>', id: "para", content: '<div class="tooltip-state"> <h1>Pará</h1> <p>Segundo maior estado do país em extensão territorial.</p> </div>'}

const buttonsState = [buttonInfoMT, buttonInfoPA, buttonInfoRS, buttonInfoBA, buttonInfoMG, buttonInfoAM]

buttonsState.forEach(buttonState => {
    map.innerHTML += buttonState.html
})

const buttons = document.querySelectorAll('g')

buttons.forEach(button => {
    const idButton = button.id
    const buttonContainer = document.getElementById(idButton + '-button-container')
    tippy(button, {
        onShow: () => {
            buttonContainer.setAttribute('fill', '#598FFC')
        },
        onHide: () => {
            buttonContainer.setAttribute('fill', '#000000')
        },
        
        content: 'info info',
        trigger: 'click',
        placement: 'left-start',
        allowHTML: true,
        theme: 'light'
})
})  

    /*


    */


/*
const amazonas = document.getElementById("Caminho_6175")
const para =  document.getElementById('Caminho_6152')
const bahia =  document.getElementById('Caminho_6167')
const matoGrosso =  document.getElementById('Caminho_6172')
const minas =  document.getElementById('Caminho_6156')
const rioGrandeSul =  document.getElementById('Caminho_6174')



statesForInfo.forEach(state => {
    const image = document.createElement('img');
    image.setAttribute('src', '/images/info.png');
    image.style.position = 'absolute';
    image.style.left = '0';
    image.style.top = '0';
    image.style.width = '46px';
    image.style.height = '46px';
    state.appendChild(image);
}); 
*/