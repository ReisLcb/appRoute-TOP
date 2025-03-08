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


