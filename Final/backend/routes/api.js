var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var nodemailer = require('nodemailer');

router.get('/novedades', async function (req, res, next) {
    let novedades = await novedadesModel.getNovedades();
    
    res.json(novedades);

}); /*termina novedades*/

/*inicio contacto*/

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'gabrielportabaldonedo@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contactó a traves de la web y quiere más información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }); //cierra transp

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });

}); //cierra post/api

module.exports = router;