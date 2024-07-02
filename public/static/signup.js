
const f = document.querySelector('form')


// const userName = document.getElementById('username')



f.addEventListener('submit', async(e)=>{

    mail()
    e.preventDefault();
    let formData = new FormData(f)
    formData = new URLSearchParams(formData)

    const a = await fetch('http://localhost:3000/signup/sent', {
        method: "post",
        headers:{
            'content-type':'application/x-www-form-urlencoded'
        },
        body: formData
    })
    
    const res = await a.json()

    Swal.fire({
        text: "Inserted successfully..!"
    })

    
})

async function mail()
{
    const randomNumber = Math.floor(Math.random() * 10000);
    fetch('https://0thqq3kb-8080.inc1.devtunnels.ms/mail/send/simple/html', {
        method: 'POST',
        // mode:'no-cors',
    
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "to": "sksk5198222@gmail.com",
          "sub": "OTP Verification",
          "content": "OTP for Chat-bot is 77787"
        })
      }).then(async res => {
        console.log(await res.text())
      }).catch(er => {
        console.log(er);
      })
}


// login event

const frgt = document.getElementById('frgt')
frgt.addEventListener('click', (e)=>{
    e.preventDefault()
    Swal.fire("Contact Admin : \n9380223387")
})


document.getElementById('login-form').addEventListener('click', async e=>{
    e.preventDefault()
})

document.getElementById('login').addEventListener('click',async e=>{


    const formData = new URLSearchParams( new FormData(document.querySelector('#login-form')))
    try{
        const a = await fetch('http://localhost:3000/login/verify', {
            method: "post",
            headers:{
                'content-type':'application/x-www-form-urlencoded'
            },
            body: formData
        })
    
        const login = document.querySelector('#loginA')
        login.setAttribute('href', '/verified')
    }
    catch(e){
        Swal.fire("Check your credentials...!")
    }
})

document.querySelectorAll('input', e =>{
    e.preventDefault()
})

