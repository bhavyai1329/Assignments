import {test, expect} from '@playwright/test';

test('practise2', async({page}) => {

// Launch the application: https://demoqa.com/webtables
await page.goto('https://demoqa.com/webtables');
console.log("Launched the URL: https://demoqa.com/webtables");

// Wait for page load and verify the header text is Web Tables
const header = page.locator('//h1[@class="text-center"]');
const headerText = await expect(header).toHaveText("Web Tables");
console.log(`Header Verified. Header Text: ${headerText}`);
 
// Add a new record with:
// First Name: Ananya Last Name: Rao Email: ananya.rao@test.com Age: 28 Salary: 55000 Department: QA
const expectedRecord = await addNewRecord(page, "Ananya", "Rao", "ananya.rao@test.com", "28", "55000", "QA");
console.log(`New record entered with details: ${expectedRecord}`);

// Verify the new record appears in the table
const tableRow = page.locator('//div[@class="web-tables-wrapper"]/table/tbody/tr');
const totalRows = await tableRow.count();

const tableColumn = tableRow.last().locator('td');
const totalColumns = await tableColumn.count();

console.log("Entered Value : Actual Value");

for(let i = 0; i < totalColumns-1; i++){
    const cellText = (await tableColumn.nth(i).textContent())?.trim() || '';
    console.log(`${expectedRecord[i]} : ${cellText}`);
    expect(cellText).toBe(expectedRecord[i]);
}

console.log("New record appears in table");

// Edit the record to change Salary → 60000

const actionColumn = tableColumn.last();
const editButton = actionColumn.locator('span[title = "Edit"]');
await editButton.click();
await updateSalary(page, "60000");

// Delete the record

const deleteButton = actionColumn.locator('span[title = "Delete"]');
await deleteButton.click();
console.log("Clicked on Delete icon of new record");

// Assert that the record no longer exists in the table

const cell = page.locator('//div[@class="web-tables-wrapper"]/table/tbody/tr/td');
const cellData = await cell.allTextContents();

const newRecordFName = expectedRecord[0];

expect(cellData).not.toContain(newRecordFName);

console.log("Newly added record was deleted successfully");

})

async function addNewRecord(page: any, fName: string, lName: string, mail: string, age: string, salary: string, dep: string) : Promise<string[]> {
    const addButton = page.locator('//button[@id="addNewRecordButton"]');
    await addButton.click();
    console.log("Clicked on Add button");

    const firstName = page.locator('//input[@id="firstName"]');
    await firstName.fill(`${fName}`);
    console.log(`First Name entered: ${fName}`);

    const lastName = page.locator('//input[@id="lastName"]');
    await lastName.fill(`${lName}`);
    console.log(`Last Name entered: ${lName}`);

    const email = page.locator('//input[@id="userEmail"]');
    await email.fill(`${mail}`);
    console.log(`Email entered: ${mail}`);

    const Age = page.locator('//input[@id="age"]');
    await Age.fill(`${age}`);
    console.log(`Age entered: ${age}`);

    const Salary = page.locator('//input[@id="salary"]');
    await Salary.fill(`${salary}`);
    console.log(`Salary entered: ${salary}`);

    const department = page.locator('//input[@id="department"]');
    await department.fill(`${dep}`);
    console.log(`Department entered: ${dep}`);

    const submitButton = page.locator('//button[@id="submit"]');
    await submitButton.click();
    console.log("Clicked on Submit button");

    return [fName, lName, age, mail, salary, dep];

}

async function updateSalary(page: any, newSalary: string) : Promise<void> {
    const Salary = page.locator('//input[@id="salary"]');
    await Salary.clear();
    await Salary.fill(`${newSalary}`);

    const submitButton = page.locator('//button[@id="submit"]');
    await submitButton.click();

    console.log(`Salary entered: ${newSalary}`);
}