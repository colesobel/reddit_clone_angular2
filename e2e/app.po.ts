export class RedditClonePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rc-root h1')).getText();
  }
}
