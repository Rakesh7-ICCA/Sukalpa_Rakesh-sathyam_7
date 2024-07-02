const exp = require('express')
const bp = require('body-parser')
const sql = require('mssql')
const app = exp()


app.set('view engine', 'ejs')
app.use(exp.static('./public'))


  

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

const opt = {
    user: "ICCA", 
    password : "ICCA",
    database: "sukalpa",
    server: "ROCY",
    port: 1433,
    options:{
        encrypt: true,
        trustServerCertificate: true
    }   
}

// app.use(exp.static())

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.get('/signup', (req, res)=>{
    
    res.render('signUp.ejs') 
})

app.post('/signup/sent', async(req, res)=>{

    const k = req.body
    console.log(req.body)
    const db = await sql.connect(opt)
    
    try
    {
        console.log(`insert into Final values('${k.fullName}', '${k.User}', '${k.Bussiness}', '${k.password}')`)
        db.query(`insert into Final values('${k.fullName}', '${k.User}', '${k.Bussiness}', '${k.password}')`)
        .then(re =>{
            console.log(re);
            res.send({msg: "Inserted successfully...!"})
            db.close()
        })
    }
    catch(er){
        console.log(er);
    }

    })


app.get('/login', (req, res)=>{
    res.render('login.ejs')
})

app.post('/login/verify', async(req, res)=>{
    
    const k = req.body
    console.log(req.body);
    console.log(`select top 1 name from Final where user='${k.User}' and password='${k.password}'`)
    const db = await sql.connect(opt)
    const r = await db.query(`select top 1 name from Final where userName='${k.User}' and password='${k.password}'`)
    .then(rs =>{
        if(rs.recordset.length <=0)
            res.status(500).send({msg : "Give Valid credentials"})
        else
            res.send({attr : 'href = "/verified"'})

    })

})

app.get('/verified', (req, res)=>{
    res.render('indexVerified.ejs')
})

app.get('/otp', (req, res)=>{
    res.render('otp.ejs')
})

app.listen(3000, ()=>{
    console.log('http://localhost:3000/')
})