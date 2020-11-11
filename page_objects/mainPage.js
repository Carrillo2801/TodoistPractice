import { Selector, t } from 'testcafe'

class MainPage {
  constructor () {
    this.settingsGear = Selector('.gear_normal')
    this.logoutButton = Selector('.usermenu__row-label').withText('Cerrar sesión')
    this.plusAddButton = Selector('.plus_add_button')
    this.taskTextInput = Selector('.notranslate.public-DraftEditor-content')
    this.addTaskButton = Selector('.ist_button.ist_button_red')
    this.taskDescription = Selector('.items.root_item_list li div div div div')
    this.cancelButton = Selector('.cancel')
    this.closeTaskCheckbox = Selector('.items.root_item_list li div button div.task_checkbox__circle')
  }

  async logout () {
    await t
      .wait(2500)
      .click(this.settingsGear)
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
