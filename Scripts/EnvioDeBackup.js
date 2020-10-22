window.onload = function(){

    var isSafe = false;
    var database = new SaveFirebase("PruebaBackups");

    function GuardadoDeBackup(){
        if (isSafe == false) {
            database.save();
            isSafe = true;
        }
    }
    
    setInterval(GuardadoDeBackup, 20);

    };