class SaveFirebase {

    constructor() {
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
          console.log(firebase);
          this.database = firebase.database();
          this.ref = this.database.ref('pruebas');
          
    }

   save(resultado){
        var data = {
            nombre: "Jose",
            secuencia : resultado
        }
        this.ref.push(data);
    }

}