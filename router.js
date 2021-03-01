const express = require('express');
const router =  express();


//invoncando el archivo de conexión de la BD

const conexion = require('./database/db');


//PARTE DEL LOGIN
router.get('/index' ,(req, res)=>{
    res.render('index');
});


//PARTE DEL LOGIN
router.get('/login' ,(req, res)=>{
    res.render('login');
});


//PARTE DEL REGISTRO
router.get('/registro' ,(req, res)=>{
             res.render('registro');
});





/*MOSTRAR PROVEEDOR DEL NEGOCIO ASADERO DE POLLO*/
router.get('/proveedorlista' ,(req, res)=>{
     conexion.query('SELECT * FROM proveedor', (error, results)=>{
        if(error){
            throw error;
        } else{
             res.render('proveedorlista', {results:results});
        }
    }) 
});

/*CREAR PROVEEDOR DEL NEGOCIO ASADERO DE POLLO*/

router.get('/proveedoringreso' , (req, res)=>{
            res.render('proveedoringreso');
}) ;



/* EDITAR REGISTRO DE PROVEEDOR*/

router.get('/proveedoreditar/:proveedorreferencia', (req, res)=>{
    const proveedorreferencia= req.params.proveedorreferencia;
    conexion.query('SELECT * FROM proveedor WHERE proveedorreferencia=?',[proveedorreferencia], (error, results)=>{
        if(error){
            throw error;
        } else{
             res.render('proveedoreditar', {proveedornombre:results[0]});
       
        }
    }) 
});


/*formulario de ingreso de usuario*/


/* ELIMINAR REGISTRO DE PROVEEDOR*/
router.get('/proveedoreliminar/:proveedorreferencia', (req, res)=>{
    const proveedorreferencia= req.params.proveedorreferencia;
    conexion.query('DELETE FROM proveedor WHERE proveedorreferencia = ?',[proveedorreferencia], (error, results)=>{
        if(error){
            throw error;
        } else{
             res.redirect('/proveedorlista');
        }
    }) 
})


const crud = require('./controllers/crud');
router.post('/proveedoringreso', crud.proveedoringreso);
router.post('/proveedoreditar', crud.proveedoreditar);
router.post('/registro', crud.registro);
 router.post('/login', crud.login);


module.exports = router;