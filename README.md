# TestCafe Practice/Example using Todoist
This is a small example done to practice the testcafe framework using page objects model over the Todoist page. Two basic tests are present in this code:

1. Create, edit and delete a task
2. Create a series of tasks

The description and number of tasks parameters are configurable in a separate data file

# Code style
JS Standard was used as coding style

# Tech/framework used
- TestCafe
- dotenv-safe

# Installation
- `npm install`
- `npx eslint --init` (optional)
- user credentials and URL for Todoist need to be configured on an .env file, an .env.example file has been provided to use as a template, copy it and remove the .example extension to begin using it with your credentials and the Todoist URL

# Tests
A few testing scripts are included in the package.json for right away use, you can also create a local testCafe config file and just call the "npm test" script to use it instead, please refer to the testcafe documentation for instructions on how to create a local config file

- Defaults to local config file: `npm run test`
- Test with Edge Browser: `npm run test:edge`
- Test with Chrome Browser: `npm run test:chrome`
- Test with Headless Edge Browser: `npm run test:edge:headless`
- Test with Headless Chrome Browser: `npm run test:chrome:headless`

# How to use?
- Copy the ".env.example" and save it as just ".env", fill it with the Todoist URL and your credentials (a valid account is needed), all required information provided in the .env.example should be filled as dotenv-safe was used as a dependency, if all the information is not provided an execution error will be displayed.
- Choose and run any of the test scripts
- (Optional) Modify the task descriptions and number of tasks for the multiple tasks scenario

# Credits
Guillermo Pasos for giving the instructions for this exercise :+1:

Jorge Carrillo
