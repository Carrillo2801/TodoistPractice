import { Selector, t } from 'testcafe'

class MainPage {
  constructor () {
    this.settingsAvatar = Selector('.user_avatar.big.settings_avatar')
    this.logoutButton = Selector('.user_menu_label').withText('Cerrar sesión')
    this.plusAddButton = Selector('.plus_add_button')
    this.taskTextInput = Selector('.notranslate.public-DraftEditor-content')
    this.addTaskButton = Selector('.ist_button.ist_button_red')
    this.taskDescription = Selector('.markdown_content.task_content')
    this.cancelButton = Selector('.cancel')
    this.closeTaskCheckbox = Selector('.task_checkbox__circle')
  }

  async logout () {
    await t
      .wait(2500)
      .click(this.settingsAvatar)
      .click(this.logoutButton)
  }

  async addTask (text) {
    await t
      .click(this.plusAddButton)
      .click(this.taskTextInput)
      .typeText(this.taskTextInput, text, { paste: true })
      .click(this.addTaskButton)
  }

  async addMultipleTasks (text, numberOfTasks) {
    for (let i = 0; i < numberOfTasks; i++) {
      await this.addTask(text + (i + 1))
      await t.click(this.cancelButton)
    }
  }

  async validateMultipleTasks (text) {
    let flag = false
    for (let i = 0; i < await this.taskDescription.count; i++) {
      if (await this.taskDescription.nth(i).innerText === (text + (i + 1))) {
        flag = false
      } else {
        flag = true
        break
      }
    }
    return flag
  }

  async closeTasks () {
    const count = await this.closeTaskCheckbox.count
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        await t
          .click(this.closeTaskCheckbox)
          .wait(500)
      }
    }
  }
}

export default new MainPage()
