let loading =  new Promise((resolve, reject)=>{
    const text = document.getElementById('loading-text')
    let time = 0
    let dotNum = 0
    let loadingFnC = setInterval(()=>{
        if(time == 8){
            resolve(loadingFnC)
        }
        if(dotNum == 4){
            text.textContent = 'loading'
            dotNum = 0
        }
        else{
            text.textContent += '.'
            dotNum++
            time++
        }
    }, 800)
})

let stop = () =>{
    let page = document.getElementById('loading-page')
    let opacity =10
    let time =  setInterval(()=>{
        if(opacity == -1){
            clearInterval(time)
            page.style.display = 'none'
        }
        else{
            page.style.opacity = opacity*0.1;
            opacity--
        }
    },250)
}