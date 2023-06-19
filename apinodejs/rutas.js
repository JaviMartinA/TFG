const rutas=require('express').Router();
const conexion=require('./config/conexion');
rutas.get('/discotecas',(req,res)=>{
    let sql='SELECT * FROM discoteca';
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.get('/discotecas/:id_disco',(req,res)=>{
    const{id_disco}=req.params;
    let sql=`SELECT * FROM discoteca WHERE id_disco='${id_disco}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.get('/discotecas/nombre/:d_nombre', (req, res) => {
  const { d_nombre } = req.params;
  let sql = `SELECT * FROM discoteca WHERE d_nombre LIKE '%${d_nombre}%'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw new Error("No se ha podido realizar la consulta");
    else
      res.json(rows);
  });
});
rutas.get('/usuarios',(req,res)=>{
    let sql='SELECT * FROM usuario';
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.get('/usuarios/:id_usuario',(req,res)=>{
    const{id_usuario}=req.params;
    let sql=`SELECT * FROM usuario WHERE id_usuario='${id_usuario}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.post('/usuarios',(req,res)=>{
    const{u_nombre,password,edad,foto,localidad}=req.body;
    let sql=`INSERT INTO usuario(u_nombre,password,edad,foto,localidad) VALUES('${u_nombre}','${password}','${edad}','${foto}','${localidad}')`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.put('/usuarios/:id_usuario',(req,res)=>{
    const{id_usuario}=req.params;
    const{u_nombre,password,edad,foto,localidad}=req.body;
    let sql=`UPDATE usuario SET u_nombre='${u_nombre}',password='${password}',edad='${edad}',foto='${foto}',localidad='${localidad}' WHERE id_usuario='${id_usuario}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.delete('/usuarios/:id_usuario',(req,res)=>{
    const{id_usuario}=req.params;
    let sql=`DELETE FROM usuario WHERE id_usuario=${id_usuario}`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.get('/favoritos/:id_usuario',(req,res)=>{
    const{id_usuario}=req.params;
    let sql=`SELECT * FROM favorito WHERE id_usuario='${id_usuario}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.get('/favoritos/:id_usuario/:id_disco',(req,res)=>{
    const{id_usuario,id_disco}=req.params;
    let sql=`SELECT * FROM favorito WHERE id_usuario='${id_usuario}' AND id_disco='${id_disco}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.post('/favoritos',(req,res)=>{
    const{id_usuario,id_disco,d_nombre,maps,web}=req.body;
    let sql=`INSERT INTO favorito(id_usuario,id_disco,d_nombre,maps,web) VALUES('${id_usuario}','${id_disco}','${d_nombre}','${maps}','${web}')`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.delete('/favoritos/:id_usuario/:id_disco',(req,res)=>{
    const{id_usuario,id_disco}=req.params;
    let sql=`DELETE FROM favorito WHERE id_usuario='${id_usuario}' AND id_disco='${id_disco}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else
        res.json(rows);
    });
});
rutas.get('/reviews/discoteca/:id_disco',(req,res)=>{
    const{id_disco}=req.params;
    let sql=`SELECT * FROM review WHERE id_disco='${id_disco}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else{
            res.json(rows);
        }
    });
});
rutas.get('/reviews/usuario/:id_usuario',(req,res)=>{
    const{id_usuario}=req.params;
    let sql=`SELECT * FROM review WHERE id_usuario='${id_usuario}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else{
            res.json(rows);
        }
    });
});
rutas.get('/reviews/:id_usuario/:id_disco',(req,res)=>{
    const{id_usuario,id_disco}=req.params;
    let sql=`SELECT * FROM review WHERE id_usuario='${id_usuario}' AND id_disco='${id_disco}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else{
            res.json(rows);
        }
    });
});
rutas.post('/reviews',(req,res)=>{
    const{id_usuario,id_disco,d_nombre,u_nombre,contenido,localidad}=req.body;
    let sql=`INSERT INTO review(id_usuario,id_disco,d_nombre,u_nombre,contenido,localidad) VALUES('${id_usuario}','${id_disco}','${d_nombre}','${u_nombre}','${contenido}','${localidad}')`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else{
            res.json(rows);
        }
    });
}
);
rutas.delete('/reviews/:id_usuario/:id_disco',(req,res)=>{
    const{id_usuario,id_disco}=req.params;
    let sql=`DELETE FROM review WHERE id_usuario='${id_usuario}' AND id_disco='${id_disco}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else{
            res.json(rows);
        }
    });
}
);
rutas.put('/reviews/:id_usuario/:id_disco',(req,res)=>{
    const{id_usuario,id_disco}=req.params;
    const{contenido,u_nombre}=req.body;
    let sql=`UPDATE review SET contenido='${contenido}',u_nombre='${u_nombre}' WHERE id_usuario='${id_usuario}' AND id_disco='${id_disco}'`;
    conexion.query(sql,(err,rows,fields)=>{
        if(err) throw "No se ha podido realizar la consulta";
        else{
            res.json(rows);
        }
    });
});
module.exports=rutas;