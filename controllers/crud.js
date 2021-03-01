const conexion= require('../database/db');


exports.login = ( req,res)=>{
    try {
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;
    if(usuario && contraseña == contraseña){
        res.redirect('/index');
    } else {
             res.send("Contraseña incorrecta");
     } 
 } catch(error){
      res.send("Creedenciales inválidas")
 }          
 };


// REGISTRO
exports.registro = (req,res) => {
    try {
        const usuario =req.body.usuario;
        const contraseña = req.body.contraseña;
        const rol = req.body.rol;
        if (!usuario || !contraseña || !rol) {
            console.log('Ingrese Datos') ;  
            return res.render('registro.ejs',{
                 message: 'Llene todos los campos' 
            });
        }
        conexion.query('SELECT * FROM usuario WHERE usuario = ?', [usuario, contraseña], (error, result) => {

            if (result == 0) {
                conexion.query('INSERT INTO usuario SET ?', { usuario:usuario,contraseña:contraseña, rol:rol },(error, results) => {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log(results);   
                        res.redirect('/proveedorlista');
                    }
                });
            } else {
                console.log('Usuario ya existe');
                return  res.render('registro.ejs', {
                    message: 'Usuario ya existe'
                });
            }
        })
    } catch (error) {
        console.log(error);
    }
};

 

exports.proveedoringreso = ( req,res)=>{
   const proveedorreferencia = req.body.proveedorreferencia;
   const proveedornombre = req.body.proveedornombre;
   const proveedorruc = req.body.proveedorruc;
   const proveedorprovincia = req.body.proveedorprovincia;
   const proveedorciudad = req.body.proveedorciudad;
   const proveedordireccion = req.body.proveedordireccion;
   const proveedortelefono = req.body.proveedortelefono;
   const proveedorcorreo = req.body.proveedorcorreo;
   const proveedorweb = req.body.proveedorweb;
   conexion.query('INSERT INTO proveedor SET ?', {proveedorreferencia:proveedorreferencia, proveedornombre:proveedornombre, proveedorruc:proveedorruc, proveedorprovincia:proveedorprovincia, proveedorciudad:proveedorciudad, proveedordireccion:proveedordireccion, proveedortelefono:proveedortelefono, proveedorcorreo:proveedorcorreo, proveedorweb:proveedorweb}, (error, results)=>{
       if(error){
           console.log(error);
       }else {
            res.redirect('/proveedorlista');
       }
   })
};

exports.proveedoreditar = ( req,res)=>{
    const proveedorreferencia = req.body.proveedorreferencia;
    const proveedornombre = req.body.proveedornombre;
    const proveedorruc = req.body.proveedorruc;
    const proveedorprovincia = req.body.proveedorprovincia;
    const proveedorciudad = req.body.proveedorciudad;
    const proveedordireccion = req.body.proveedordireccion;
    const proveedortelefono = req.body.proveedortelefono;
    const proveedorcorreo = req.body.proveedorcorreo;
    const proveedorweb = req.body.proveedorweb;
    conexion.query('UPDATE proveedor SET ? WHERE proveedorreferencia = ?',[{ proveedornombre:proveedornombre, proveedorruc:proveedorruc, proveedorprovincia:proveedorprovincia, proveedorciudad:proveedorciudad, proveedordireccion:proveedordireccion, proveedortelefono:proveedortelefono, proveedorcorreo:proveedorcorreo, proveedorweb:proveedorweb}, proveedorreferencia],(error, results)=>{
        if(error){
            console.log(error);
        }else {
             res.redirect('/proveedorlista');
            }
        })
 };