# API Chamada de voz


## Documentação oficial
[voice-app.zenvia.com]('https://voice-app.zenvia.com/doc/#/').


## Cliente em NodeJS para API da Totalvoice

> ### Funcionalidades

- [X] Gerenciamento das chamadas
- [X] Consulta e envio de SMS
- [X] Consulta e envio de TTS
- [X] Consulta e envio de Audio
- [X] Gerenciamento da Conta
- [X] Gerenciamento da Central

> ### Requisitos

- NodeJS 6 ou superior

> ### Instalação

```bash
git clone
npm install
```

> ### Utilização

Para utilizar esta biblioteca, primeiramente você deverá realizar o cadastro no site da [Zenvia]('https://voice-app.zenvia.com/').
Após a criação do cadastro será disponibilizado um AccessToken para acesso a API.

Os métodos da API que poderão ser invocados:
- audio
- central
- chamada
- composto
- conferencia
- conta
- perfil
- sms
- tts

A seguir exemplos de metodos e requisições.

> ##### Realiza uma chamada telefônica entre dois números: A e B

```javascript

const Zenvia = require('./zenvia');
const client = new Zenvia("access-token");

client.chamada.ligar("4832830151", "4811111111")
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });

```

> ##### Consulta de chamada pelo ID

```javascript

const Zenvia = require('./zenvia');
const client = new Zenvia("access-token");

client.chamada.buscar(123) // ID da chamada
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });

```


> ##### Encerra uma chamada ativa

```javascript

const Zenvia = require('./zenvia');
const client = new Zenvia("access-token");

client.chamada.encerrar(123) // ID da chamada
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });

```

> ##### Envio de SMS

```javascript

const Zenvia = require('./zenvia');
const client = new Zenvia("access-token");

var resposta_usuario = false;
var multi_sms = false;
var data_criacao = '';
client.sms.enviar("4811111111", "Mensagem SMS", resposta_usuario, multi_sms, data_criacao)
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });

```

> ##### Envio de TTS

```javascript

const Zenvia = require('./zenvia');
const client = new Zenvia("access-token");

var opcoes = {velocidade: 2, tipo_voz: "br-Vitoria", bina: "bina_cadastrada"};
client.tts.enviar("4811111111", "Mensagem TTS", opcoes)
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });

```

> ##### Envio de Audio

```javascript

const Zenvia = require('./zenvia');
const client = new Zenvia("access-token");

client.audio.enviar("4811111111", "https://foo.bar/audio.mp3")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });

```

> ##### Configurações de central telefonica

```javascript

const Zenvia = require('./zenvia');
const client = new Zenvia("access-token");

client.central.buscaRamal(123546) // ID do Ramal
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });

```

> ##### Gerenciamento dos dados da Conta

```javascript

const Zenvia = require('./zenvia');
const client = new Zenvia("access-token");

client.conta.buscar(123546) // ID da Conta
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });

```

> ##### Consulta saldo da Minha Conta

```javascript

const Zenvia = require('./zenvia');
const client = new Zenvia("access-token");

client.perfil.consultaSaldo()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log('Erro: ', error)
    });

```

> ##### Caso você necessite utilizar seu próprio endereço configurado na Zenvia

```javascript

const Zenvia = require('./zenvia');
const client = new Zenvia("access-token", "https://seu-dominio.com.br");
...

```

> ##### Caso você necessite utilizar com Proxy

```javascript

const Zenvia = require('./zenvia');
let options = {
    proxy: {
        host: 'proxy.com',
        port: 8888,
        auth: {
            username: 'XXXX',
            password: 'XXXX'
        }
    }
};
const client = new Zenvia("access-token", "https://seu-dominio.com.br", options);
...

```
