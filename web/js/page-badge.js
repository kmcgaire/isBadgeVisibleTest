/**
 * Created by kevin on 3/21/2014.
 */
App.populator('badge', function ($page) {
    var $badgeButton = $page.querySelector('.isBadge-execute-button'),
        $trueButton = $page.querySelector('.true-execute-button'),
        $falseButton = $page.querySelector('.false-execute-button'),
        $backButton = $page.querySelector('.app-button.back.left'),
        $syncOutput    = $page.querySelector('.sync-result');


    $badgeButton.addEventListener('click', function () {
        $syncOutput.innerText = JSON.stringify(cards._.bridge('Push').isBadgeVisible());
    });

    $trueButton.addEventListener('click', function () {
        $syncOutput.innerText = JSON.stringify(cards._.bridge('Push').setBadgeVisibility({'visible':true}));
    });

    $falseButton.addEventListener('click', function () {
        $syncOutput.innerText = JSON.stringify(cards._.bridge('Push').setBadgeVisibility({'visible':false}));
    });

    $backButton.addEventListener('click', function() {
        App.load('home', 'slide-right');
    })

});

