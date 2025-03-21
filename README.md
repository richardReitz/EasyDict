# EasyDict App

## Descrição
Um aplicativo de dicionário de palavras em inglês, onde o usuário pode pesquisar palavras, visualizar detalhes, marcar como favorita, acessar o histórico de pesquisa.
Além disso o app conta com criação e gerenciamento de conta, afim de resguardar os dados do usuário.

## Tecnologias Utilizadas
- **Linguagem:** TypeScript
- **Framework:** React Native (Expo 52)
- **Bibliotecas:**
  - Axios
  - Expo-router
  - Zustand
  - NativeWindCSS
  - Firebase Auth (autenticação)
  - Firebase Firestore (banco de dados)
  - Axios Cache Interceptor (cache HTTP) 

## Instalação e Uso

### Passos
1. Clone o repositório:
   ```sh
   git clone https://github.com/richardReitz/EasyDict.git
   ```

2. Acesse a pasta do projeto:
   ```sh
   cd EasyDict
   ```

3. Instale as dependências:
   ```sh
     yarn
   ```
   
5. Execute o prebuild para gerar os arquivos nativos:
   ```sh
   npx expo prebuild
   ```

6. Compile o projeto para a plataforma desejada:
   - Android:
     ```sh
     npx expo run:android
     ```
   - iOS (necessário macOS e Xcode):
     ```sh
     npx expo run:ios
     ```

7. Inicie o aplicativo:
   ```sh
   npx expo start
   ```

8. Escaneie o QR Code com o aplicativo Expo Go ou execute no emulador.


