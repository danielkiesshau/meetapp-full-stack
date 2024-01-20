[RocketSeat Certificate](https://xesque.rocketseat.dev/certificates/3c95614b-e05b-4348-b477-5bfcd532caf9.pdf)

## To configure the project, follow these steps

1. Create a **postgres** container, a **redis** and use [mailtrap](https://mailtrap.io/) for the function of sending emails from the site when an event is canceled.
2. Create a new **.env** file based on **.env.example**.
3. Fill in the constants below the **#Database** with the data from the **postgres** container.
4. Fill in the constants below **#Redis** with the data from the **redis** container.
5. Fill in the constants below **#Mail** with the data provided on the mailtrap website.
6. `yarn`
7. `yarn start`

### To run the mobile and the website
1. go to the respective folders (mobile or web)
2. `yarn`
3. `yarn start`
4. `yarn (android|ios)` (**only for mobile**)
