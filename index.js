const importSVG = (image) => {
    fetch(image.src)
        .then((response) => response.text())
        .then((response) => {
            const div = document.createElement('div')
            div.innerHTML = response
            const inlineSVG = div.getElementsByTagName('svg')[0]
            image.parentNode.replaceChild(inlineSVG, image)
            return true
            })
}