import startPage from '../page_objects/startPage'
import mainPage from '../page_objects/mainPage'
require('dotenv').config()
const dataSet = require('../test_data/data.json')

fixture`Task validation`
  .page`${process.env.URL}`
  .beforeEach(async t => {
    await t.maximizeWindow()
    await startPage.login(process.env.EMAIL, process.env.PASSWORD)
  })
  .afterEach(async t => {
    await mainPage.closeTasks()
    await mainPage.logout()
  })

test('Create and validate task', async t => {
  await mainPage.addTask(dataSet.baseTextDescription)
  await t
    .expect(mainPage.taskDescription.innerText).eql(dataSet.baseTextDescription)
})

test('Multiple tasks creation', async t => {
  await mainPage.addMultipleTasks(dataSet.baseTextDescription, dataSet.numberOfTasks)
  await t.expect(await mainPage.validateMultipleTasks(dataSet.baseTextDescription)).notOk()
})
