var fs = require('fs');

function segurityFiltrate(data){

    //replace "" with ''

}
//funcion llamada segurityFiltrateMetadsate que solo deje pasar letras, numeros, espacios y comas
function segurityFiltrateMetadsate(data){

    //replace "" with ''
     data = data.replace(/[^a-zA-Z0-9, ]/g, "");

    return data;

}

function EngineRender(name,options,callback){
   
    

    fs.readFile("./views/"+name, (err, content) => {


        var keys = Object.keys(options);

        for (var i = 0; i < keys.length; i++) {

            var key = keys[i];

            var value = options[key];

            //remplace ${key} with value

            var re = new RegExp(`\$\{${key}\}`, 'g'); //conver prinmitive to string

            re = re.toString().replace("/","");

            re = re.toString().replace("/g","");

            //conver prinmitive to string
            //const sanitizedSearch = escape(value)

            if(key.search("MetaDescription") != -1 || key.search("Metakeywords") != -1){

                content = content.toString().replace(re,segurityFiltrateMetadsate(value));

            }else{

                content = content.toString().replace(re,value);

            }

        }

        

        callback(content.toString());

    });
    
    
}


module.exports = EngineRender;