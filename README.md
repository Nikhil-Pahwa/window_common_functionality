# About
Window common functionality such as confirmation before closing window, notify when switching window.

## Confirming before closing window

### Browser Support
IE: It shows custom message
Chrome: It ignores the custom message instead chrome shows default message which cannot be overridden
Firefox: It simply ignores the event. To address the browser needs to set the setting using command `about:config` and enabling the `browser.showQuitWarning`. With this it will pop up the confirmation box but custom message will not be shown.
Safari: Not checked

PS: Need to do the extensive testing for the support in different browser.



