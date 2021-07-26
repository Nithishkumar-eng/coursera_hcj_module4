var names=["Yaakov","Naruto","Jiraya","Madaraa","Itachi","Sasuke","Jigen","Jinchuriki"];
        names.forEach(name=>{
            var fl=name.charAt(0).toLowerCase();
            if(fl=='j'){
                console.log("Goodbye " + name);
            }
            else{
                console.log("Hello "+name);
            }
        })