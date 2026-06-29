import {test, expect} from '@playwright/test';

test('assignment15', async({page}) => {

// 1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form)
await page.goto('https://demoqa.com/automation-practice-form');
console.log("Launched demoqa application");

// 2. Wait for Page-load
const pageHeader = page.locator('h1[class = "text-center"]');
await expect(pageHeader).toHaveText("Practice Form");
console.log("Page loaded fully");

// 3. Enter First name and Last name 
// 4. Enter Email
// 6. Enter mobile number
await enterDetails(page, "Nirupama", "Imandi", "nirupama@test.com", "8978675867", 'files/DP.png');

// 5. Select Gender (Male)
await selectGender(page, "Male")

// // 7.Select DOB (1-Feb-1991)
await selectDOB(page, 1991, "February", "001");

// 8.Search and Select Computer Science and English
await selectSubjects(page, ["English", "Computer Science"]);

// 9.Select Hobbies as Sports and Reading
await selectHobbies(page, ["Sports", "Reading"]);

// 10.Upload photo
// await uploadPicture(page, 'files\DP.png');

// 11.Submit Details
const button = page.getByRole('button', {name: 'Submit'});
await button.click();
console.log("Submitted");
})

async function enterDetails(page: any, first: string, last : string, email : string, phone : string, path: string, date ?: string) : Promise<void> {
    const firstName = page.locator('//input[@id= "firstName"]');
    const lastName = page.locator('//input[@id= "lastName"]');
    const mail = page.locator('//input[@id= "userEmail"]');
    const mobileNumber = page.locator('//input[@id= "userNumber"]');
    const DOB = page.locator('//input[@id= "dateOfBirthInput"]');

    await expect(firstName).toBeVisible({ timeout : 10000});
    await firstName.fill(first);
    console.log(`First Name entered: ${first}`);

    await expect(lastName).toBeVisible({ timeout : 10000});
    await lastName.fill(last);
    console.log(`Last Name entered: ${last}`);

    await expect(mail).toBeVisible({ timeout : 10000});
    await mail.fill(email);
    console.log(`Email entered: ${email}`);

    await expect(mobileNumber).toBeVisible({ timeout : 10000});
    await mobileNumber.fill(phone);
    console.log(`Mobile number entered: ${phone}`);

    /* await expect(DOB).toBeVisible({ timeout : 10000});
    await DOB.fill(date);
    await expect(DOB).toHaveValue(date);
    await DOB.press('Enter');
    console.log(`DOB selected: ${date}`); */

    const upload = page.locator('#uploadPicture');
    await expect(upload).toBeVisible({ timeout : 5000});
    await upload.setInputFiles(path);
    console.log("Picture uploaded");

}

async function selectGender(page: any, g: string) : Promise<void> {
    const gender = page.locator(`//input[@value = "${g}"]`);
    await expect(gender).toBeVisible({ timeout : 5000});
    await gender.check();
    console.log(`Gender selected: ${g}`);
}

async function selectDOB(page: any, year: number, month: string, date: string) : Promise<void> {
    const DOB = page.locator('//input[@id= "dateOfBirthInput"]');
    await DOB.click();
    console.log("Calendar opened");

    const yearSelector = page.locator('select[class = "react-datepicker__year-select"]');
    await yearSelector.selectOption({ label : `${year}`});
    console.log(`Year selected: ${year}`);

    const monthSelector = page.locator('select[class = "react-datepicker__month-select"]');
    await monthSelector.selectOption({ label : `${month}`});
    console.log(`Month selected: ${month}`);

    const daySelector = page.locator(`//div[contains(@aria-label, '${month}')][text() ='1']`);
    await expect(daySelector).toBeVisible({ timeout: 10000 });
    await daySelector.click();
    console.log(`Day selected: ${date}`);
}

async function selectSubjects(page: any, subjects: string[]) : Promise<void> {
    const subject = page.locator('//input[@class="subjects-auto-complete__input"]');

    for(let sub of subjects){
        await expect(subject).toBeVisible( { timeout : 10000});
        await subject.fill(sub);
        await subject.press('Enter');
        // await expect(page.locator('.subjects-auto-complete__multi-value')).toContainText(sub);
        // console.log(`Subject entered: ${sub}`);
    }

    console.log(`Subjects entered: ${subjects.join(', ')}`);
}

async function selectHobbies(page: any, hobbies: string[]) : Promise<void> {
    for(let hobby of hobbies){
        const checkboxOf = page.getByLabel(hobby);
        await expect(checkboxOf).toBeVisible({ timeout : 5000});
        await checkboxOf.click();
    }

    console.log(`Hobbies selected: ${hobbies.join(', ')}`);
}

/* async function uploadPicture(page: any, filePath: string) : Promise<void> {
    const upload = page.locator('//input[@id = "uploadPicture"]');
    await upload.toBeVisbile({ timeout : 5000});
    await upload.setInputFiles(filePath);
    console.log("Picture uploaded");
} */
