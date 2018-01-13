var windowClosePrompt = (function () {
    return {
        initialize: function () {
            window.onbeforeunload = function (e) {
                var dialogText = 'Custom message';
                e.returnValue = dialogText;
                return dialogText;
            }
        }
    }
})();