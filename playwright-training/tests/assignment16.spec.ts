import { test, expect } from '@playwright/test';

test('assignment16', async({page}) => {
    // 1. Enter URL and Launch the application (https://demoqa.com/alerts)
    await page.goto('https://demoqa.com/alerts');
    console.log("Launched Alerts page");

    // 2. Locate Alert buttons to trigger the alerts
    const alertButton = page.locator('//button[@id="alertButton"]');
    console.log("Alert button located");

    const timerAlertButton = page.locator('//button[@id="timerAlertButton"]');
    console.log("Time alert button located");
    
    const confirmButton = page.locator('//button[@id="confirmButton"]');
    console.log("Confirm button located");
    
    const promptButton = page.locator('//button[@id="promtButton"]');
    console.log("Prompt button located");

    // 3. Click on the information alert and copy the alert message and then select OK button
    page.once('dialog', async dialog => {
        console.log(await dialog.message());
        await dialog.accept();
        // await dialog.dismiss();
    })

    await timerAlertButton.click();

    // 4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
    page.once('dialog', async dialog => {
        console.log(await dialog.message());
        await dialog.dismiss();
    })

    await confirmButton.click();
    console.log("Clicked on Confirm alert button");

    // 5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
    page.once('dialog', async dialog => {
        console.log(await dialog.message());
        await dialog.dismiss();
    })

    await promptButton.click();
})