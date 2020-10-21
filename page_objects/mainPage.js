import { Selector, t } from 'testcafe'

class MainPage {
  constructor () {
    this.leftMenu = Selector('div#left_menu')
    this.editor = Selector('div#editor')
    this.settingsGear = Selector('svg.gear_normal')
    this.logoutButton = Selector('div.usermenu__row-label').withText('Cerrar sesión')
    this.plusAddButton = Selector('button.plus_add_button')
    this.taskTextInput = Selector('div.notranslate.public-DraftEditor-content')
    this.addTaskButton = Selector('button.ist_button.ist_button_red')
    this.createdTasks = Selector('ul.items.root_item_list li').withAttribute('class', 'task_list_item')
    this.taskDescription = this.createdTasks.find('div.markdown_content.task_content')
    this.offlineConfirmation = Selector('alert_holder delete_confirmation')
    this.offlineLogoutButton = Selector('button.ist_button.ist_button_red')
    this.editTaskButton = this.createdTasks.find('button[data-action-hint="task-edit"]')
    this.moreActionsButton = this.createdTasks.find('button.more_actions_button')
    this.deleteButton = Selector('div.icon_menu_item__content').withText('Eliminar tarea')
    this.deletionConfirmButton = Selector('footer.reactist_modal_box__actions.confirm_dialog__actions button.ist_button.ist_button_red')
    this.cancelButton = Selector('button.cancel')
  }

  async logout () {
    await t
      .click(this.settingsGear)
      .click(this.logoutButton)
    if (this.offlineConfirmation.exists) {
      await t
        .click(this.offlineLogoutButton)
        .click(this.logoutButton)
    }
  }

  async addTask (text) {
    await t
      .click(this.plusAddButton)
      .click(this.taskTextInput)
      .typeText(this.taskTextInput, text, { replace: true })
      .click(this.addTaskButton)
  }

  async addMultipleTasks (text, numberOfTasks) {
    for (let i = 0; i < numberOfTasks; i++) {
      await this.addTask(text + (i + 1))
      await t.click(this.cancelButton)
    }
  }

  async editTask (text) {
    await t
      .hover(this.taskDescription)
      .click(this.editTaskButton)
      .typeText(this.taskTextInput, text, { replace: true })
      .click(this.addTaskButton)
  }

  async deleteTask () {
    await t
      .hover(this.taskDescription)
      .click(this.moreActionsButton)
      .click(this.deleteButton)
      .click(this.deletionConfirmButton)
  }
}

export default new MainPage()
