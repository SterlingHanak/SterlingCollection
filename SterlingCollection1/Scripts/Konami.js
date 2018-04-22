$('.side-nav-btn').click(function () {
    $('.side-nav').toggleClass('side-nav-activate');
    $('.side-nav-btn').toggleClass('side-nav-btn-active');
});

$('#close-side').click(function () {
    $('.side-nav').removeClass('side-nav-activate');
});

$('#remove-btn').click(function () {
    $('.game-name').removeClass('hidden-box');
    $('.game-name').removeClass('get-out');
    $('.filter-option').removeClass('highlight');
});

$('#NES').click(function () {
    $('#NES').toggleClass('highlight');
    $('.NES').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#SNES').click(function () {
    $('#SNES').toggleClass('highlight');
    $('.SNES').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#N64').click(function () {
    $('#N64').toggleClass('highlight');
    $('.N64').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#GameBoy').click(function () {
    $('#GameBoy').toggleClass('highlight');
    $('.GameBoy').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#Genesis').click(function () {
    $('#Genesis').toggleClass('highlight');
    $('.Genesis').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#PS1').click(function () {
    $('#PS1').toggleClass('highlight');
    $('.PS1').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#PS2').click(function () {
    $('#PS2').toggleClass('highlight');
    $('.PS2').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#PS3').click(function () {
    $('#PS3').toggleClass('highlight');
    $('.PS3').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#PS4').click(function () {
    $('#PS4').toggleClass('highlight');
    $('.PS4').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#GBA').click(function () {
    $('#GBA').toggleClass('highlight');
    $('.GBA').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#GameCube').click(function () {
    $('#GameCube').toggleClass('highlight');
    $('.GameCube').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#Xbox').click(function () {
    $('#Xbox').toggleClass('highlight');
    $('.Xbox').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#Dreamcast').click(function () {
    $('#Dreamcast').toggleClass('highlight');
    $('.Dreamcast').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#Wii').click(function () {
    $('#Wii').toggleClass('highlight');
    $('.Wii').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#DS').click(function () {
    $('#DS').toggleClass('highlight');
    $('.DS').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#3DS').click(function () {
    $('#3DS').toggleClass('highlight');
    $('.3DS').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#360').click(function () {
    $('#360').toggleClass('highlight');
    $('.360').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#Vita').click(function () {
    $('#Vita').toggleClass('highlight');
    $('.Vita').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#WiiU').click(function () {
    $('#WiiU').toggleClass('highlight');
    $('.WiiU').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});
$('#XBOne').click(function () {
    $('#XBOne').toggleClass('highlight');
    $('.XBOne').toggleClass('get-out');
    $('.game-name').addClass('hidden-box');
});

const pressed = [];
const secretCode = '3838404037393739666513';
var x = document.getElementById('secret-code');

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.keyCode);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        x.play();
    }
})