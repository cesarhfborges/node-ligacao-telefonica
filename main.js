require('dotenv').config();
const Zenvia = require('./zenvia');
const client = new Zenvia(process.env.API_KEY);

const audioFlavinha = "https://protettordelinks.com/wp-content/audiosparazap/trote_da_flavinha.mp3";
const audioTatiana = "http://eybmzq.blu.livefilestore.com/y1p3KV7MDf_9hjLP-LXXvJVuaJx5GYES2KM2UO3sFn4mudQhIG_heRDI79Y9c8BaiFbRpOgISoIO-FCfv5tddTzLw/tatiana.mp3";

client.audio.enviar("61991508973", audioFlavinha)
    .then((data) => {
        console.log('sucesso: ', data);
    })
    .catch((error) => {
        console.log('Erro: ', error);
    });
