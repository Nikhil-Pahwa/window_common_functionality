var tabChangeEventDetect = (function () {
    var counter = 0;
    return {
        initialize: function () {
            window.onblur = function () {
                console.log('One way to detect the blur event');
            };

            window.addEventListener('blur', function () {
                var intervalInSec = 0;
                var countDown = 5;
                if (counter === 0) {
                    document.body.style.backgroundColor = 'orange';
                    document.getElementById('emoji_type').src = './assets/images/emoji-confused.png';
                    document.getElementById('message').innerHTML = 'You switched to other window';
                } else {
                    document.body.style.backgroundColor = 'red';
                    document.getElementById('emoji_type').src = './assets/images/very_angry_emoji.png';
                    document.getElementById('message').innerHTML = 'Again !! You switched to other window. I am closing now in';
                    setInterval(function () {
                        document.getElementById('countDown').innerHTML = countDown + ' sec';
                        if (intervalInSec === 5) window.close();
                        intervalInSec++;
                        if (countDown > 0) countDown--;
                    }, 1000)
                }
                counter++;
            })
        }
    }
})();