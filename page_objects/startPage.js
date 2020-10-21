import { Selector, t } from 'testcafe'

class StartPage {
    constructor() {
        this.showLogin = Selector('a._2q_cf[href="/users/showlogin"]')
        this.email = Selector('input#email')
        this.password = Selector('input#password')
        this.submit = Selector('button.submit_btn.ist_button.ist_button_red.sel_login')
    }

    async login(email, password) {
        await t
            .click(this.showLogin)
            .typeText(this.email, email)
            .typeText(this.password, password)
            .click(this.submit)
    }
}

export default new StartPage