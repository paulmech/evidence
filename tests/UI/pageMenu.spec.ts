import { test, expect, Locator } from '@playwright/test';
import { supportLocalDev } from './local'

test.beforeEach(async({page})=>{
  await page.goto('/queries/writing-queries', supportLocalDev())
  await page.waitForTimeout(500)
})


test.describe('Page Elements: Page Menu', () => {

    test ('should be able click page menu to open, and click again to close', async ({ page }) => {

      const pageMenuButton : Locator = await page.getByRole('banner').getByRole('button', { name: 'page menu button' });
      const exportPDFButton : Locator = await page.getByRole('button', { name: 'Export PDF' })
      const settingsLink : Locator = await page.getByRole('link', { name: 'Project Settings' })

      // click on the page menu button
      await pageMenuButton.click()

      // should see the export PDF button and settings link
      expect(await exportPDFButton.isVisible()).toEqual(true)
      expect(await settingsLink.isVisible()).toEqual(true)

      // click on the page menu button again
      await pageMenuButton.click()

      // should not see the export PDF button and settings link
      expect(await exportPDFButton.isVisible()).toEqual(false)
      expect(await settingsLink.isVisible()).toEqual(false)
    })

    test('should be able to click on the page menu and navigate to settings page', async ({ page }) => {
        
      const pageMenuButton : Locator = await page.getByRole('banner').getByRole('button', { name: 'page menu button' });
        const settingsLink : Locator = await page.getByRole('link', { name: 'Project Settings' })
    
        // click on the page menu button
        await pageMenuButton.click()

        // click on the settings button
        await settingsLink.click()
        // wait for navigation
        await page.waitForTimeout(100)
        // should be on the settings page
        expect(await page.url()).toContain('/settings')
    });

});