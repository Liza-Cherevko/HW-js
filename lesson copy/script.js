const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')

btn.addEventListener('click', (e) => { 
    // console.log(input.value)
    if(input.value==='') return
    createDeleteElement(input.value)
    input.value = ''
})

function createDeleteElement(value) { 
    const li = document.createElement('li')
    const btn = document.createElement('button')
    li.className = 'li'
    li.textContent = value
    btn.className = 'btn'
    btn.textContent = 'add'
    li.appendChild(btn)
        
    btn.addEventListener('click', (e) => { 
        console.log(li)
        result.remove('li')
    })

  
    result.appendChild(li)
}