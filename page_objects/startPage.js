import { Selector, t } from 'testcafe'

class StartPage {
  constructor () {
    this.showLogin = Selector('._2q_cf[href="/users/showlogin"]')
    this.email = Selector('#email')
    this.password = Selector('#password')
    this.submit = Selector('.submit_btn.ist_button.ist_button_red.sel_login')
  }

  async login (email, password) {
    await t
      .click(this.showLogin)
      .typeText(this.email, email, { paste: true })
      .typeText(this.password, password, { paste: true })
      .click(this.submit)
  }
}

export default new StartPage()
