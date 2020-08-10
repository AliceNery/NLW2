//Servidor
const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache:true,//desativo o cache
})
server
//receber os dados pelo body
.use(express.urlencoded({ extended: true }))
.use(express.static("public")) 
//rotas da aplicação
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-classes",saveClasses)
.listen(5500)
//express.static faz com que a raiz dos arquivos estaticos seja a public e nao mais a raiz do projeto
//a setinha (arrow function) é uma forma simplicifada de escrever uma função anonima