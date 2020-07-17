# Dados do Arduino com NodeJS
 Página da web que recebe dados do monitor serial de um Arduino. O sensor LDR foi utilizado neste projeto para demonstração.

 ## Requisitos
    Instalar o Git
    https://git-scm.com/downloads

    Instalar IDE do Arduino
    https://www.arduino.cc/en/Main/Software

    Instalar o NodeJs
    https://nodejs.org/en/

## Primeiro passo - baixar projeto
Acesse e clone o repositório do projeto ou use o comando abaixo na pasta onde deseja baixar o projeto:
- git clone https://github.com/AloisioFernandes/arduinoWeb.git

## Segundo passo - fazer upload do arquivo para arduino
Abra a pasta arduino-ldr e faça upload do arquivo arduinoLDR.ino para sua placa arduino. A porta analógica utilizada é A2, se estiver utilizando uma porta diferente, altere a linha 1 do código.

## Terceiro passo - instalar dependências
Dentro da pasta arduino-web e digite o comando:
- npm install

## Quarto passo - verificar USB 
Abra o arquivo app.js e verifique a linha 15 do código. Se necessário, altere '/dev/ttyACM0' para a porta USB em que sua placa arduino está conectada.

## Quinto passo - iniciar o app
No diretório arduino-web, digite o comando:
- node app.js

A aplicação estará funcionando em: http://localhost:3000 