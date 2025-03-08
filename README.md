# Criando projeto Ionic
## Iniciando projeto
- Para iniciar, iniciaremos o terminal nosso terminal (pode ser **Linux**, **PowerShell** ou **WSL**):
    ````bash
    ionic start nome-do-seu-projeto
- Agora, devemos verificar se o ionic CLI está instalado verificando sua versão:
    ```bash
    ionic -v 
    ## Ultima versão: 8.4.x
- Caso não esteja instalado, instale o ionic CLI com o seguinte comando:
    ```bash
  sudo npm install -g @ionic/cli
- Navegue até a pasta do projeto:
    ```bash
    cd nome-do-seu-projeto
- Para executar seu projeto, execute:
    ```bash
    ionic serve
- E para abrir seu projeto no Visual Studio Code, execute:
    ```bash
    code .
## Definindo novas páginas e rotas
- Para definir uma nova pagina, basta executar:
    ```bash
    ionic generate <type> <name> --options
    ```

    -- No lugar de ```<type>``` escrevemos ```page```, e para ```<name>``` escrevemos o nome da nossa nova página
## Arquivo de rotas
![image](https://github.com/user-attachments/assets/8fff08db-8500-45d5-9746-1ade71e08b02)

### Solução simples
- Caso a navegação seja entre páginas fíxas, podemos usar:
  ![image](https://github.com/user-attachments/assets/4bc45883-2440-4cca-8f57-eb075c444417)

### Solução programática
- Se precisar de mais controle, como redirecionamento condicional, podemos utilizar o Router no arquivo .ts
  1°: importamos o Router para o nosso projeto.
  ![image](https://github.com/user-attachments/assets/c57e8e06-7024-44d1-b629-f0feafcc2506)

  2°: Injetamos o Router na nossa página.
  ![image](https://github.com/user-attachments/assets/eb8b17f2-24ed-4c84-8f44-5358ee68d560)

  3° criamos um método para nos enviar para a página desejada.
  ![image](https://github.com/user-attachments/assets/58e92c59-bb1d-414c-a009-d2fc0716983f)







