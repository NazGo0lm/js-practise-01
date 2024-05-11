/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
// const client = new Client("mango", "mango@gmail.com");

class Client{
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
        
    }

    get loginName() {
        return this.#login
    }

    set loginName(loginNewName) {
        return this.#login = loginNewName
    }

    get emailName() {
        return this.#email
    }
    set emailName(emailNewName) {
        return this.#email = emailNewName
    }

}


const client = new Client("mango", "mango@gmail.com");
console.log(client)
console.log(client.loginName="banana")
console.log(client.emailName="banana@gmail.com")