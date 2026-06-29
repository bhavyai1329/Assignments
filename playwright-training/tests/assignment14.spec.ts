import { test, expect } from '@playwright/test';

test('assignment14', async({page}) =>{
 
    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    console.log("Application launched successfully");

    //2.verify application logo is displayed
    const logo = page.locator('img[class="logo"]');
    await expect(logo).toBeVisible();
    console.log("Application logo is displayed");
   
    //3.Verify application caption displayed as "Experience the difference"
    const caption = page.locator('p[class="caption"]');
    await expect(caption).toHaveText('Experience the difference');
    console.log("Application caption is displayed as 'Experience the difference'");

    //4.Enter invalid username
    const username = page.locator('input[name="username"]');
    await username.clear();
    await username.fill('testuser');
    console.log("Entered invalid username");

    //5.Enter empty Password
    const password = page.locator('input[name="password"]');
    await password.clear();
    await password.fill('');
    console.log("Entered empty Password");

    // 6.Click on login button
    const loginButton = page.locator('input[value="Log In"]');
    await loginButton.click();
    console.log("Clicked on login button");

   // 7.Verify the error message "Please enter a username and password."
   const errormessage = page.locator('p[class = "error"]');
   await expect(errormessage).toHaveText("Please enter a username and password.");
   console.log("Error message is: 'Please enter a username and password.'");

   // 8.Click on admin page link
   const adminPageLink = page.locator('//a[text()="Admin Page"]');
   await adminPageLink.click();
   console.log("Admin page link is clicked");
      
   // 9.select the option "soap" from dba mode radio button
   await selectDataAccessMode(page, "soap");

   // 10.Scroll to Loan Provider dropdown dropdown
   const dropdown = page.locator('select[id="loanProvider"]');
   await dropdown.scrollIntoViewIfNeeded();
   console.log("Scrolled down to Loan Provider dropdown");

   // 11.Select the option web service from the dropdown
   await dropdown.selectOption({label : 'Web Service'});
   console.log("Option web service is selected from the dropdown");

   // 12.click on submit button
   await page.getByRole('button', {name : 'Submit'}).click();
   console.log('Submit button is clicked');

   // 13.verify submission is successful by validating success message
   // await page.getByText("Settings saved successfully.");
   const successMessage = page.locator('//b[text() = "Settings saved successfully."]');
   await expect(successMessage).toHaveText("Settings saved successfully.");
   console.log("Submission is successfull");

   // 14.Click on services page link
   const newPage = page.locator('//ul[@class = "leftmenu"]//a[@href = "services.htm"]');
   await newPage.click();
   console.log("Clicked on services page link");

   // 15.wait for service page
   const table = page.locator('//span[text() = "Bookstore services:"]');
   await expect(table).toBeVisible();
   console.log("Services page fully loaded");

   // 16.Scroll down till bookstore services table
   await table.scrollIntoViewIfNeeded();
   console.log("Scrolled down till bookstore services table");
   
   // 17.get total rows of books store services table
   const bookServicesTableRows = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr');
   const totalRows = await bookServicesTableRows.count();
   console.log(`total rows of books store services table : ${totalRows}`);

   // 18.get total columns of books store services table
   const bookServicesTableColumns = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[1]//td');
   const totalColumns = await bookServicesTableColumns.count();
   console.log(`total columns of books store services table : ${totalColumns}`);

   // 19.Print table data (row wise and column wise data)
   for(let r:number = 1; r<=totalRows ;r++){
        for(let c:number=1; c<=totalColumns ;c++){
            const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[${r}]//td[${c}]`);
            const cellData = await cell.textContent();
            console.log(`Row ${r} Column ${c} data is : ${cellData}`);
        }
    }

})

async function selectDataAccessMode( page : any, option : string) {
    const accessMode = page.locator(`input[value= "${option}"]`);
    await accessMode.click();
    console.log(`Data access mode selected: ${option}`);
}