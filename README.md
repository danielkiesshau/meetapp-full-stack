## Para usar seguir os seguintes passos

1. Criar um container **postgres**, um **redis** e usar o [mailtrap](https://mailtrap.io/) para a função de envio de emails do site.
2. Criar um novo arquivo **.env** baseado no **.env.example**
3. Preencher as constantes abaixo do **#Database** com os dados do container de **postgres**.
4. Preencher as constantes abaixo do **#Redis** com os dados do container de **redis**.
5. Preencher as constantes abaixo do **#Mail** com os dados informados no site do mailtrap.
6. `yarn`
7. `yarn start`

### Para rodar o mobile e o site

1. `yarn`
2. `yarn start`
3. `yarn (android|ios)` (**só para o mobile**)
