🐣 Chocadeira Automática — App de Monitoramento

Aplicativo desenvolvido com Expo, React Native e TypeScript, para monitorar e controlar uma chocadeira automática.
O app se comunica diretamente com o Arduino responsável pelo controle de temperatura, umidade e viragem dos ovos.


---

🚀 Funcionalidades

📊 Monitoramento em tempo real da temperatura e umidade interna da chocadeira

🔧 Ajuste remoto de parâmetros, como temperatura-alvo e intervalo de viragem

🔔 Alertas visuais quando os valores estão fora do ideal

🔄 Sincronização direta com o Arduino via conexão serial/bluetooth

💾 (Opcional) Registro histórico dos dados coletados



---

🧩 Tecnologias utilizadas

Categoria	Tecnologia

Framework	Expo
Linguagem	TypeScript
Interface	React Native (com Hooks e Styled Components / Tailwind, se usado)
Comunicação	Serial / Bluetooth (via biblioteca react-native-ble-plx ou react-native-serialport)
Estado Global	Context API / Zustand / Redux (dependendo da sua escolha)



---

⚙️ Instalação e execução

1️⃣ Pré-requisitos

Node.js v18+

Expo CLI instalado globalmente

Arduino configurado e conectado ao dispositivo (via Bluetooth ou USB OTG)


2️⃣ Clonar o repositório

git clone https://github.com/seu-usuario/chocadeira-app.git
cd chocadeira-app

3️⃣ Instalar dependências

npm install
# ou
yarn install

4️⃣ Executar o app

npx expo start

Abra o app com o Expo Go no celular ou rode no emulador Android/iOS.


---

🔌 Conexão com o Arduino

O app se conecta diretamente ao Arduino que controla a chocadeira.

Exemplo de fluxo de dados:

Arduino envia:

TEMP:37.6;HUM:55.2

App interpreta e exibe na tela principal.


Exemplo de comandos que o app pode enviar:

SET_TEMP:37.5
SET_HUM:55
TURN:ON

(Esses comandos podem ser personalizados conforme o firmware do Arduino.)
