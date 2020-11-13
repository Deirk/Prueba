class SaveFirebase {

    constructor(referencia) {
        this.firebaseConfig = {
            apiKey: "AIzaSyCLXFTnjqw6KhJhYEHu0l0c4b2bFIzI-LU",
            authDomain: "recoleccion-de-datos-para-pdg.firebaseapp.com",
            databaseURL: "https://recoleccion-de-datos-para-pdg.firebaseio.com",
            projectId: "recoleccion-de-datos-para-pdg",
            storageBucket: "recoleccion-de-datos-para-pdg.appspot.com",
            messagingSenderId: "922042252952",
            appId: "1:922042252952:web:d7860ffcf9dec30a1f1aed",
            measurementId: "G-LYEB1MJG97"
          };
          // Initialize Firebase
          firebase.initializeApp(this.firebaseConfig);
          firebase.analytics();
          this.referencia = referencia;
          this.database = firebase.firestore();
          console.log("EntroAlFirestore");
          console.log(this.database);
    }

   save(){
        var data = {
            iniciales: sessionStorage.getItem("nombre"),
            edad: sessionStorage.getItem("edad"),
            universidad: sessionStorage.getItem("universidad"),
            carrera: sessionStorage.getItem("carrera"),
            semestre: sessionStorage.getItem("semestre"),
            HaceCuantoPrograma: sessionStorage.getItem("tiempoProgramando"),
            DiasProgramando: sessionStorage.getItem("diasProgramando"),
            ComoSeConsideraProgramando: sessionStorage.getItem("consideraProgramando"),
            respuestaDescomposicion: sessionStorage.getItem("RespuestaDescomposicion"),
            tiempoDescomposicion: sessionStorage.getItem("tiempoDescomposicion"),
            erroresDescomposicion: sessionStorage.getItem("ErroresDescomposicion"),
            respuestaEjercicio1Abstraccion: sessionStorage.getItem("RespuestaEjercicio1Abstraccion"),
            respuestaEjercicio2Abstraccion: sessionStorage.getItem("RespuestaEjercicio2Abstraccion"),
            respuestaEjercicio3Abstraccion: sessionStorage.getItem("RespuestaEjercicio3Abstraccion"),
            respuestaEjercicio4Abstraccion: sessionStorage.getItem("RespuestaEjercicio4Abstraccion"),
            tiempoAbstraccion: sessionStorage.getItem("tiempoAbstraccion"),
            respuestaGeneralizacion: sessionStorage.getItem("respuestaGeneralizacion"),
            tiempoGeneralizacion: sessionStorage.getItem("tiempoGeneralizacion"),
            erroresE1Depuracion: sessionStorage.getItem("erroresEvaluacion1"),
            erroresE2Depuracion: sessionStorage.getItem("erroresEvaluacion2"),
            tiempoDepuracion: sessionStorage.getItem("tiempoEvaluacion") ,
            ExperienciaEjercicio1: sessionStorage.getItem("ExperienciaEjecicio1"),
            ExperienciaEjercicio2: sessionStorage.getItem("ExperienciaEjecicio2"),
            ExperienciaEjercicio3: sessionStorage.getItem("ExperienciaEjecicio3"),
            ExperienciaEjercicio4: sessionStorage.getItem("ExperienciaEjecicio4"),
            loQueLeGusto: sessionStorage.getItem("LoQueMasLeGusto"),
            loQueNoLeGusto: sessionStorage.getItem("LoQueMenosLeGusto")

        }
        //this.ref.push(data);
        this.database.collection(this.referencia).add(data);
    }

}