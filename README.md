# 🚀 Estudo de Caso: Rotas em Aplicações Web e Mobile

## 📝 Descrição do Projeto

Este projeto é um **Estudo de Caso** que demonstra a implementação e o gerenciamento de rotas de navegação em dois ambientes de desenvolvimento distintos, que utilizam a mesma tecnologia principal (**React**):

1.  **Aplicação Web:** Implementada com **React + Vite** e roteamento via **React Router DOM**.
2.  **Aplicação Mobile:** Implementada com **React Native + Expo** e roteamento via **React Navigation**.

O objetivo funcional é simular um catálogo de produtos, navegando entre a **Lista de Produtos** e a **Tela de Detalhes** com estilização coesa no padrão **Dark Mode**.

---

## 💻 Tecnologias e Dependências

| Plataforma | Framework Base | Gerenciador de Rotas |
| :--- | :--- | :--- |
| **Web (`web/`)** | React (Vite) | **React Router DOM** |
| **Mobile (`mobile/`)** | React Native (Expo) | **React Navigation Native Stack** |

---

## 🗺️ Rotas Implementadas

### 🌐 Aplicação Web (React Router DOM)

| Rota | Componente |
| :--- | :--- |
| **`/`** | `ListaProd.jsx` |
| **`/produto/:id`** | `DetalheProd.jsx` |

### 📱 Aplicação Mobile (React Navigation)

| Nome da Rota | Componente |
| :--- | :--- |
| **`Home`** | `Home.js` |
| **`Detalhe`** | `DetalheProd.js` |

---

## 🔧 Instruções de Instalação e Execução

Certifique-se de ter o **Node.js** e o **npm** ou **yarn** instalados em sua máquina.

### 🌐 Parte 1: Aplicação Web (`web/`)

Os comandos abaixo criam o diretório `web/` e instalam tudo o que é necessário para a aplicação Web.

1.  **Criação do Projeto Web (Vite + React):**
    ```bash
    npm create vite@latest web -- --template react
    ```
2.  **Acessar a Pasta e Instalar o Núcleo:**
    ```bash
    cd web
    npm install
    ```
3.  **Instalar o Roteador:**
    ```bash
    npm install react-router-dom
    ```
4.  **Executar o Servidor:**
    ```bash
    npm run dev
    ```
    *A aplicação Web estará rodando em `http://localhost:5173/`.*

### 📱 Parte 2: Aplicação Mobile (`mobile/`)

Os comandos abaixo criam o diretório `mobile/` e instalam todas as dependências do React Navigation.

1.  **Criação do Projeto Mobile (Expo):**
    ```bash
    npx create-expo-app mobile
    # OU, se usar o comando mais antigo e seguir o roteiro: expo init mobile
    ```
2.  **Acessar a Pasta:**
    ```bash
    cd mobile
    ```
3.  **Instalar Dependências Base:**
    ```bash
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
