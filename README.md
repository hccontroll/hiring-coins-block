<h1 align="center">
    Hiring Coins - Bloco Customizado
</h1>

## 🛠 Etapas:
- [x] Identificar se o usuário está logado;
- [x] Buscar pontos do usuário, utilizando seu e-mail como identificador;
- [x] Atualizar o front com a quantidade de pontos que o usuário tem acumulados.

## 📋 Documentações Utilizadas:

### Blocos Customizados:
https://learn.vtex.com/docs/course-store-block-lang-pt

## Uso: 

### Instalação: 

**1. Adicione o app Hiring Coins no seu arquivo `manifest.json`:**

`````
 "dependencies": {
+   "controll.hiringcoins": "0.x"
  }
`````

**2. Insira o bloco no seu tema**
``````
 "flex-layout.col#login-container": {
    "props": {
      "blockClass": [
        "login-container"
      ]
    },
    "children": [
      "login", 
      "hiringcoins"
    ]
  },
``````

**3. Testando no Front**

![image](https://user-images.githubusercontent.com/14075748/180101726-fb54b7c5-0741-4675-87e2-bba4a6cf344a.png)



| CSS Handles |
| ----------- |
| Container |
| Icon |
| Text |

## Desenvolvedor
- [Allysson Guedes](https://www.linkedin.com/in/allyssonalmeida/).



