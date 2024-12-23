const express = require('express')
const axios = require('axios')

const PORT = 4000

const TELEGRAM_TOKEN = require("../config.json")
const CHAT_ID = require("../config.json")

//https://api.telegram.org/bot/sendMessage?chat_id=&text='ISP 1 is Online, Menaksopal Link Nusantara

const app = express()

app.get("/", async(req,res)=>{
    res.status(200).json({
        "status" : "ok"
    })
})

app.get("/sendMessage/routestatus/:id", async(req,res)=>{
    let id = req.params.id
    if (id == "up") {
        axios.get(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=[Menaksopal-Link-Nusantara][✅ Up] Running - OK`)
        axios.get(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=[By.U GSM][0️⃣ Standby] Stanby - OK`)
        res.status(200).json({
            "sendMessage": "Done"
        })
    } else if (id == 'down'){
        axios.get(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=[Menaksopal-Link-Nusantara][🔴 Down] Request Time Out - Down`)
        axios.get(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=[By.U GSM][✅ Up] Running - OK`)
        res.status(200).json({
            "sendMessage": "Done"
        })
    } else {
        res.status(300)
    }

})

app.listen(PORT, async()=>{
    console.log("ready")
})