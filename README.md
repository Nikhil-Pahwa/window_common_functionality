# About
Window common functionality such as confirmation before closing window, notify when switching window.

## Confirmation before closing of tab/browser

### Browser Support
* IE: It shows custom message.
* Chrome: It ignores the custom message instead chrome shows default message which cannot be overridden.
* Firefox: It simply ignores the event. To address this, the browser needs to set the setting using command `about:config` and enabling the `browser.showQuitWarning`. With this it will pop up the confirmation box but without custom message.
* Safari: Not tested.
* Opera: Not tested.

PS: Several browsers are not tested. Need to check the support for other browser including mobile browser as well.

## Notify when switching window
Very common scenario in quiz type application.

### Browser Support
* IE: Works
* Chrome: Sometimes it does not work.
* Firefox: Works but the window is not getting closed. Firefox doesnot support closing of tabs/window through JS untill the window is not opened using JS.
* Safari: Not tested.
* Opera: Not tested.


