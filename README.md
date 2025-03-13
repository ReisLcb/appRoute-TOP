# Clonando repósitório em sua máquina
- Para clonar este repositório em sua máquina, utilize o seguinte comando:
   ```bash
   cd pasta-desejada 
   git clone https://github.com/ReisLcb/appRoute-TOP.git
   ```
  - Caso queira clonar a resolução do exercício ou alguma outra branch específica, execute:
    ```bash
    git clone -b <branch-name> https://github.com/ReisLcb/appRoute-TOP.git
    ## <branch-name> pode ser substituido por 'exercicio-cadastro'
    ```

- Para instalar as dependências, basta executar no terminal dentro da pasta local do projeto:
  ```bash
  npm install

- Ao final da instalação, execute o projeto:
  ```bash
  ionic serve
  ```

# Criando projeto Ionic
## Iniciando projeto
- Primeiro, devemos verificar se o ionic CLI está instalado verificando sua versão:
    ```bash
    ionic -v 
    ## Ultima versão: 8.4.x
- Caso não esteja instalado, instale o ionic CLI com o seguinte comando:
    ```bash
    sudo npm install -g @ionic/cli

- Para iniciar, iniciaremos o nosso terminal (pode ser **Linux**, **PowerShell** ou **WSL**):
    ```bash
    ionic start nome-do-seu-projeto
    ```
    
   - Para uma inicialização mais rápida, podemos preencher todos os argumentos com o seguinte comando:
        ```bash
        ionic start [nome] [template] [opções]
        ## [nome] será o nome do projeto desejado (ex. meuApp)
        ## [template] pode ser: 'blank', 'tabs', 'sidemenu', 'list' ou 'my-first-app' (depende do framework)
        ## [opções] podem ser: --list, --type=<tipo>, --cordova, --capacitor e --id=<id>
        ```
     
   - Como usaremos o angular standalone, podemos escrever:
       ```bash
       ionic start meuApp blank --type=angular-standalone
       ## Considerando que nosso projeto será Blank
       ```
    
- Navegue até a pasta do projeto:
    ```bash
    cd nome-do-seu-projeto
- Para executar seu projeto, execute:
    ```bash
    ionic serve
- E para abrir seu projeto no Visual Studio Code, execute:
    ```bash
    code .
# Definindo novas páginas e rotas
- Para definir uma nova página, basta executar:
    ```bash
    ionic generate
    ## Usar este comando sem argumentos te dará uma tela para escolher o que deseja gerar
    ```
    - Para usar esse comando de forma mais rápida, pode executar:
      ```Bash
      ionic generate [schematic] [name]
      ## [schematic] pode ser: 'page', 'directive', 'component' ou 'service' 
      ```

    - Neste caso, no lugar de ```[schematic]``` escrevemos ```page```, e para ```[name]``` escrevemos o nome da nossa nova página
## Arquivo de rotas
![image](https://github.com/user-attachments/assets/8fff08db-8500-45d5-9746-1ade71e08b02)

### Solução simples
- Caso a navegação seja entre páginas fixas, podemos usar:
  
  ![image](https://github.com/user-attachments/assets/c82b3523-60de-411a-8ffb-990b5fef3ba7)

### Solução programática
- Se precisar de mais controle, como redirecionamento condicional, podemos utilizar o Router no arquivo .ts
  
  1°: importamos o Router para o nosso projeto.
  
  ![image](https://github.com/user-attachments/assets/c57e8e06-7024-44d1-b629-f0feafcc2506)

  2°: Injetamos o Router na nossa página.
  
  ![image](https://github.com/user-attachments/assets/eb8b17f2-24ed-4c84-8f44-5358ee68d560)

  3° criamos um método para nos enviar para a página desejada.
  ![image](https://github.com/user-attachments/assets/58e92c59-bb1d-414c-a009-d2fc0716983f)

  4°: No arquivo .html de nossa página/componente, Chamamos nosso método abrirAbout() com a diretiva ```click```

  ![image](https://github.com/user-attachments/assets/fd4b7ed4-e315-4046-af8c-9042d25f6d0f)
\
\
\

#
**Mais informações podem ser obtidas no site __[Ionic Framework](https://ionicframework.com/docs/cli)__**
