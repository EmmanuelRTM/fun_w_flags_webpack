import './styles/main.scss';
import Game from './Game';
import axios from 'axios';//axios es similar a request(callbacks) pero mas exqusita al usar promesas axios (promesas)

function init (){
    // aqui voy a hacer la llamda de la api por los datos
    axios.get('https://restcountries.eu/rest/v2/all')
        .then((response) => {//aqui se pasa la ifno de los paises
            console.log(response.status);//status code de la peticion
            console.log(response.data);//data es donde tiene la info que busco
            const game = new Game (response.data);
            game.start();
        })
        .catch( (err) =>{
//aqui se pasa el error
//console.log("aca el error", error.response.status)
        })
}
init();