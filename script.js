const countriesAPI = 'https://restcountries.com/v2/all'
const container = document.getElementById('countries')
const displayer = document.getElementById('displayer')
const close = document.querySelector('#close')
const spans = document.querySelectorAll('span')
let infos  = new Array
close.onclick = () =>{
    spans[0].innerText= 'Langue officielle:'
    spans[1].innerText= 'Population:'
    spans[2].innerText= 'Capital:'
    spans[3].innerText= 'Region:'
    displayer.style.position = 'absolute'
    displayer.style.display = 'none'
    displayer.removeChild('#flag')
}
let getInfos = (API) =>{
    API.forEach((country)=>{
        infos.push([
            country.languages.map((x)=>{
                return x.name
            }), 
            country.population,
            country.capital,
            country.region,
            country.flag
        ])
    })
}
let display = (a) =>{

    spans[0].innerText+= infos[a][0]
    spans[1].innerText+= infos[a][1]
    spans[2].innerText+= infos[a][2]
    spans[3].innerText+= infos[a][3]
    let flag = document.createElement('img');
    flag.id = 'flag'
    flag.src = infos[a][4]
    flag.style.position = 'absolute'
    flag.style.right = '5%'
    flag.style.top = '2%'
    flag.style.width = '26%'
    flag.style.height = '17%'
    displayer.appendChild(flag)
    displayer.style.position = 'fixed'
    displayer.style.display = 'block'
}

let addCountries = (API) =>{
    API.forEach((country, index)=>{
        let element = document.createElement('div')
        element.setAttribute('onclick', `display(${index})`)
        element.id = `${country.name}`
        element.innerText = `${country.name}`
        element.style.display = 'flex'
        element.style.flexDirection = 'columns'
        element.style.alignItems = 'center'
        element.style.width = '120px'
        element.style.height = '120px'
        element.style.border = 'solid 1px black'

        container.appendChild(element)
    })
}

fetch(countriesAPI).then((fetchedData)=>{
    return fetchedData
}).then((response)=>{
    return response.json()
}).then((arr)=>{
    addCountries(arr)
    getInfos(arr)
    stop()
}).catch((err)=>{
    console.error(err)
    location.reload()
})
