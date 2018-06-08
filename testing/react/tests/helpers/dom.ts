export const find = async (selector: string): Promise<HTMLElement> => {
  return await this.page.evaluate(() => document.querySelector(selector));
}

export const findAll = async (selector: string): Promise<HTMLElement[]> => {
  return await this.page.evaluate(() => document.querySelectorAll(selector));
}
