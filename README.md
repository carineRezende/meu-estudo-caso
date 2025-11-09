# 🚀 Estudo de Caso: Rotas em Aplicações Web e Mobile

## 📝 Descrição do Projeto

Este projeto é um **Estudo de Caso** que visa demonstrar a implementação e o gerenciamento de rotas de navegação em dois ambientes de desenvolvimento distintos, mas que utilizam a mesma tecnologia principal (**React**):

1.  **Aplicação Web:** Implementada com **React + Vite**.
2.  **Aplicação Mobile:** Implementada com **React Native + Expo**.

O objetivo funcional é simular um catálogo de produtos simples, permitindo a navegação clara entre a **Lista de Produtos** e a **Tela de Detalhes** de um produto específico. O projeto também consolida a organização do código e a estilização das interfaces (Web e Mobile) utilizando um tema coeso no padrão **Dark Mode**.

---

## 💻 Tecnologias e Dependências

| Plataforma | Framework Base | Gerenciador de Rotas | Linguagem |
| :--- | :--- | :--- | :--- |
| **Web (`web/`)** | React (Vite) | **React Router DOM** | JavaScript/JSX |
| **Mobile (`mobile/`)** | React Native (Expo) | **React Navigation Native Stack** | JavaScript |

---

## 🗺️ Rotas Implementadas

### 🌐 Aplicação Web (React Router DOM)

As rotas são definidas com base na URL do navegador:

| Rota | Componente | Descrição |
| :--- | :--- | :--- |
| **`/`** | `ListaProd.jsx` | Página inicial que exibe a lista completa de 20 produtos. |
| **`/produto/:id`** | `DetalheProd.jsx` | Página de detalhes que carrega e exibe informações específicas do produto, usando o `:id` passado na URL. |

### 📱 Aplicação Mobile (React Navigation)

As rotas são definidas pelo nome interno do *Stack Navigator*:

| Nome da Rota | Componente | Descrição |
| :--- | :--- | :--- |
| **`Home`** | `Home.js` | Tela inicial que exibe a lista de produtos (implementada com `FlatList`). |
| **`Detalhe`** | `DetalheProd.js` | Tela de detalhes que recebe o `itemId` via `route.params` para exibir as informações do produto, com estilização customizada (botão e card). |

---

## 🗂️ Estrutura de Pastas

```bash
meu-estudo-caso/
├── web/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── mobile/
    ├── App.js
    ├── screens/
    │   ├── Home.js
    │   └── DetalheProd.js
    ├── package.json
    └── app.json
```
---

## 🔧 Instruções de Instalação e Execução (Passo a Passo)

Certifique-se de ter o **Node.js** e o **npm** ou **yarn** instalados em sua máquina.

### 1. 📦 Configuração Inicial (Criação da Pasta Raiz)

1.  **Crie a pasta principal** do projeto e acesse-a:
    ```bash
    mkdir meu-estudo-caso
    cd meu-estudo-caso
    ```
    *Todos os comandos seguintes devem ser executados dentro deste diretório.*

### 2. 🌐 Parte Web (`web/`)

Os comandos abaixo criam o diretório `web/` e instalam tudo o que é necessário para a aplicação Web.

1.  **Criação do Projeto Web (Vite + React):**
    ```bash
    npm create vite@latest web -- --template react
    ```
2.  **Acessar a Pasta Web e Instalar o Núcleo:**
    ```bash
    cd web
    npm install
    ```
3.  **Instalar o Roteador (`react-router-dom`):**
    ```bash
    npm install react-router-dom
    ```
4.  **Executar o Servidor:**
    ```bash
    npm run dev
    ```
    *A aplicação Web estará rodando em `http://localhost:5173/`.*

### 3. 📱 Parte Mobile (`mobile/`)

Os comandos abaixo criam o diretório `mobile/` e instalam todas as dependências do React Navigation.

1.  **Voltar para a Pasta Raiz** (`meu-estudo-caso`):
    ```bash
    cd ..
    ```
2.  **Criação do Projeto Mobile (Expo):**
    ```bash
    npx create-expo-app mobile
    # OU: expo init mobile (Se estiver seguindo o roteiro original e já tiver o expo-cli instalado)
    ```
3.  **Acessar a Pasta Mobile e Instalar Dependências Base:**
    ```bash
    cd mobile
    npm install
    ```
4.  **Instalar Core do React Navigation:**
    ```bash
    npm install @react-navigation/native
    ```
5.  **Instalar Dependências Nativas Obrigatórias:**
    ```bash
    npx expo install react-native-screens react-native-safe-area-context
    ```
6.  **Instalar o Native Stack Navigator:**
    ```bash
    npm install @react-navigation/native-stack
    ```
7.  **Executar o Projeto:**
    ```bash
    npx expo start
    ```
    *Use o app **Expo Go** no celular ou um emulador para escanear o QR Code e rodar a aplicação Mobile.*

---

## 📚 Créditos e Referências

* **Roteiro de Atividade:** Prática 08 - Estudo de Caso com Rotas.
* **React Router DOM:** Documentação oficial.
* **React Navigation:** Documentação oficial.
