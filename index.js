const directionPointers = document.querySelectorAll('#SVG')
lottie.loadAnimation({
    container: directionPointers[0],
    render: 'svg',
    loop:true,
    autoplay:true,
    path: 'asset/arrow/data.json'
})


