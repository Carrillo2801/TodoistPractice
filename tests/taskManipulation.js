/* eslint-disable no-undef */
import startPage from '../page_objects/startPage'
import mainPage from '../page_objects/mainPage'
require('dotenv').config()
const dataSet = require('../test_data/data.json')

fixture`Create, edit and delete tasks`
  .page`${process.env.URL}`
  .beforeEach(async t => {
    await t.maximizeWindow()
    await startPage.login(process.env.EMAIL, process.env.PASSWORD)
  })

test('Creation, Edition and Deletion task validation', async t => {
  await mainPage.addTask(dataSet.baseTextDescription)
  await t
    .expect(mainPage.taskDescription.innerText).eql(dataSet.baseTextDescription)
  await mainPage.editTask(dataSet.editedTextDescription)
  await t
    .expect(mainPage.taskDescription.innerText).eql(dataSet.editedTextDescription)
  await mainPage.deleteTask()
  await t
    .expect(mainPage.createdTasks.exists).notOk()
})

test('Multiple tasks creation', async t => {
  await mainPage.addMultipleTasks(dataSet.baseTextDescription, dataSet.numberOfTasks)
  for (let i = 0; i < dataSet.numberOfTasks; i++) {
    await t
      .expect((mainPage.createdTasks.nth(i).find('div.markdown_content.task_content')).innerText).eql(dataSet.baseTextDescription + (i + 1))
  }
})
