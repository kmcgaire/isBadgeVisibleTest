/**
 * Created by kevin on 3/21/2014.
 */

App.populator('popup', function($page){
    var $webpageButton = $page.querySelector('.webpage-button'),
        $backButton = $page.querySelector('.app-button.back.left'),
        $textBox       = $page.querySelector('.input-box');

    $webpageButton.addEventListener('click', function() {
        console.log($textBox.value);
        kik.open($textBox.value, true);
    });

    $backButton.addEventListener('click', function() {
        App.load('home', 'slide-right');
    })

});
