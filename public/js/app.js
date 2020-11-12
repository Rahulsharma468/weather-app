//console.log('Client Site Info is here')

// fetch('http://puzzle.mead.io/puzzle').then ((response) => {
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })



// const search = document.querySelector('input')
// weatherform.addEventListener('submit' ,(e) =>{//e or any event
//     e.preventDefault()
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')
const message3 = document.querySelector('#message-3')
const message4 = document.querySelector('#message-4')
//message1.textContent = 'From Jvascript'
weatherform.addEventListener('submit' ,(e) =>{//e or any event
    e.preventDefault()
    const location = search.value
    
    message1.textContent = 'Loading....'
    message2.textContent = ''
    message3.textContent = ''
    message4.textContent = ''

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data) => {
        if(data.error){
            message1.textContent = data.error
        }else{
            message1.textContent = 'Weather Description:'+data.forecast[0].observation[0].description
            message2.textContent = 'Your Country is:'+data.forecast[0].observation[0].country
            message3.textContent = 'Use this site to get detailed info:'+data.forecast[0].observation[0].iconLink
            message4.textContent = 'Your State is:'+data.forecast[0].observation[0].state
        }
    })
})
})

// const address = document.querySelector('input')
// const url= 'http://localhost:4000/weather?address='+address
// if(!address){
//     console.log('Please provide address')
// }else{
//     fetch('url').then((response)=>{
//         response.json().then((data) => {
//             if(data.error){
//                 console.log(data.error)
//             }else{
//             console.log(data.forecast.observation)
//             console.log(data.forecast)
//             }
//         })
//     })
// }

