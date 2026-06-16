///////////////////////////
// GLOBAL VARIABLES START
//////////////////////////

var $debug = false,
    $firstTime = true,
    $playIntro = true;

var $anim = {}; // Global holder for all timing/scaling data from JSON

var $defaultEase = "Expo.easeOut";

var $sc_NightPlaylist = '<iframe id="scPlaylist" width="90%" height="300px" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3416309&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>';

var $sc_Contract = '<iframe id="scPlaylist" width="90%" height="100px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/572970957&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';

var $sc_focus = '<iframe style="border: 0; width: 70%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=960090985/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://sasara.bandcamp.com/track/luv-rap">Luv Rap by Sasa Hasid RA</a></iframe>';
//var $sc_focus = '<iframe id="scPlaylist" width="90%" height="100px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1238406343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';

var $sasaMessageList = [];

var $jsLinks = [
    'js/TweenMax.min.js'
];

var $mainTL;
var $socialTL;
var $linkTL;

var $mainStage = document.getElementById('mainStage'),
    $mainContainer = document.getElementById('mainContainer'),
    $AllGlories = document.getElementById('AllGlories'),
    $sasaLogo = document.getElementById('sasaLogo'),
    $socialLogos = document.getElementById('socialLogos'),
    $sasaMessage = document.getElementById('sasaMessage'),
    $sasaMsg = document.getElementById('sasaMsg'),
    $scPlayer = document.getElementById('scPlayer'),
    $soundcloudPlayer = document.getElementsByClassName('soundcloudPlayer'),
    $heartcoreLogo = document.getElementById('heartcoreLogo');
$nimaiFooterCredit = document.getElementsByClassName('nimaiFooterCredit');

var $nimaiOverlay = document.getElementById('nimaiOverlay'),
    $storePromo = document.getElementById('storePromo'),
    $nimaiHeader = document.getElementById('nimaiHeader'),
    $nimaiFooter = document.getElementById('nimaiFooter'),
    $nimaiFooterCredits = document.getElementById('nimaiFooterCredits'),
    $sasaFooterCredit = document.getElementsByClassName('sasaFooterCredit'),
    $nimEye = document.getElementById('nimEye');

var $socialList = [];
var $socialArray = [];

var $link = document.getElementsByClassName('link');

var $sasaBgImage = document.getElementById("sasaBgImage");

var $docHeight,
    $docWidth,
    $docCenterH,
    $docCenterW;

var backstretchImages = [
    "images/bg/SasaRA_BG_Photo_1.png",
    "images/bg/SasaRA_BG_Photo_2.png",
    "images/bg/SasaRA_BG_Photo_3.png",
    "images/bg/SasaRA_BG_Photo_4.png"];

/////////////////////////
// GLOBAL VARIABLES END
/////////////////////////

function trace(value) {
    if ($debug === true) {
        console.log('<<< ', value, ' >>>')
    }
}

function init() {
    trace('init - fetching config');

    fetch('config.json')
        .then(function(response) { return response.json(); })
        .then(function(data) {
            $debug = data.settings.debug;
            $playIntro = data.settings.playIntro;
            $sasaMessageList = data.messages;
            $socialList = data.social;

            // MAP ANIMATION DATA
            $anim = data.animation;

            loadJS($jsLinks);
            loadSasaMessage();
            loadSocial($socialList);
        })
        .catch(function(err) {
            console.error("Error loading config.json: ", err);
        });
}

function start() {
    trace('start');
    buildMainTL($anim.global.delay, $anim.global.timeScale);
    loadListeners();
}

function buildMainTL(d,t) {
    TweenLite.defaultEase = Sine.easeOut;
    $mainTL = new TimelineLite({paused:true});

    $mainTL
        .delay(d)
        .timeScale(t)
        .add(loadSasaMsgTL(), 'sasaMsg')
        .add(loadHeadFootTL(), 'headFoot')
        .add(loadSocialTL($anim.social.delay), 'social')
        .call(mainStagerize,[],this,'+=2')
    ;

    if ($playIntro === true) {
        $mainTL.play();
    } else {
        $mainTL.play('headFoot');
    }
}

function loadSasaMessage() {
    trace('loadSasaMessage INIT');
    msgNumber = Math.floor(Math.random() * $sasaMessageList.length);
    GSAP.insertHTML($sasaMsg, $sasaMessageList[msgNumber]);
    GSAP.insertHTML($sasaMessage, $sasaMessageList[msgNumber]);
}

function loadListeners() {
    $sasaLogo.addEventListener("click", mainStagerize);
}

function loadSasaMsgTL() {
    trace('loadSasaMsgTL INIT');
    tl = new TimelineLite();
    tl
        .set($sasaMessage, {className: '+=animate'})
        .set($nimaiOverlay, {className: '-=hidden'})
        .set($sasaMessage, {className: '-=hidden'})
        .to($sasaMessage, 0.01, {zIndex: 5100})
        .to($sasaMessage, 0.01, {xPercent: -50, yPercent: -50})
        .to($sasaMessage, 0.01, {left: "50%", top: "50%"})
        .to($sasaMessage, $anim.introMessage.fadeIn, {opacity: 1, scale: $anim.introMessage.scaleIn})
        .to($sasaMessage, $anim.introMessage.fadeOut, {opacity: 0, scale: $anim.introMessage.scaleOut}, '+=' + $anim.introMessage.hold)
        .to($sasaMessage, 2, {top: '30%'}, '-=' + $anim.introMessage.fadeOut)
        .to($nimaiOverlay, 1, {zIndex: 1, opacity: 0, onComplete: function() {
                TweenMax.set($sasaMessage, {clearProps: "all"});
                $nimaiOverlay.classList.add('hidden');
                $sasaMessage.classList.add('hidden');
            }}, '-=' + $anim.introMessage.fadeOut)
    ;
    return tl;
}

function loadHeadFootTL() {
    trace('loadHeadFootTL INIT');
    time = $anim.logos.duration;
    tl = new TimelineLite();
    tl
        .set($nimaiOverlay, {className: '+=hidden'})
        .set($sasaMessage, {className: '+=hidden'})
        .set($sasaMessage, {className: '-=animate'})
        .set($nimaiHeader, {className: '-=hidden'})
        .set($nimaiFooter, {className: '-=hidden'})
        .set($sasaLogo, {className: '-=sasaLogo'})
        .set($sasaLogo, {className: '+=sasaLogoIntro'})
        .set($sasaLogo, {className: '-=hidden'})
        .set($heartcoreLogo, {className: '-=hidden'})
        .set($sasaLogo,{opacity:0})
        .set($heartcoreLogo,{opacity:0})
        .add('hf_0',0)
        .add('hf_1',0.05)
        .to($sasaLogo, time, {opacity: 1}, 'hf_0')
        .to($heartcoreLogo, time, {opacity: 1}, 'hf_0')
        .from($sasaLogo, time, {scale: $anim.logos.scale, y: -$anim.logos.yOffset},'hf_1')
        .from($heartcoreLogo, time, {scale: $anim.logos.scale, y: $anim.logos.yOffset},'hf_1')
        .addPause(2)
    ;
    return tl;
}

function loadSocialTL(d) {
    trace('loadSocialTL INIT');
    $socialTL = new TimelineLite();
    $socialTL
        .delay(d)
        .set($socialLogos, {className: '-=hidden'})
        .set($link, {opacity: 1})
        .set($socialLogos,{height:0})
        .set($socialLogos,{height:'auto'})
        .from($socialLogos, $anim.social.duration, {height:0})
        .staggerFrom($link, $anim.social.duration, {y: $anim.social.yOffset, opacity: 0}, $anim.social.stagger)
        .staggerTo($link, $anim.social.duration, {scale:1.00}, -$anim.social.stagger)
        .addPause(2)
    ;
    return $socialTL;
}

function showAllGlories() {
    tl = new TimelineLite({paused:true});
    tl.from($AllGlories,1,{y:5},'+=0.25');
    $AllGlories.classList.remove('hidden');
    tl.play();
}

function showNimaiCredits() {
    tl = new TimelineLite({paused:true});
    tl.staggerFrom($nimaiFooterCredit,1,{y:-5,opacity: 0},0.2,'-=0.5');
    $nimaiFooterCredits.classList.remove('hidden');
    tl.play();
}

var mainStagerize = once(function() {
    loadMainStageContent();
});

function loadSocial(s) {
    trace('loadSocial LOADED');
    var tip = false;
    var toolTip = '';
    var str = '';

    for (var i = 0; i < s.length; i++) {
        var item = s[i];
        toolTip = (tip === true) ? '<span class="tooltiptext">' + item.id + '</span>' : '';

        str += '<a id="link_' + item.id + '" ' +
            'class="link link_' + i + ' ' + item.id + ' tooltip" ' +
            'title="' + item.id + '" ' +
            'href="http://' + item.id + '.sasara.me" target="_blank">' +
            '<i class="' + item.icon + '"></i>' +
            toolTip +
            '</a>';
    }

    var mailIcon = '<i class="fa-regular fa-envelope"></i>';
    str += '<a id="link_mail" class="link mail tooltip" title="email" href="mailto:ra@souljah.com?subject=Mail from SasaRA.me" target="_blank">' + mailIcon + (tip === true ? '<span class="tooltiptext">email</span>' : '') + '</a>';

    GSAP.insertHTML($socialLogos, str);

    var aTags = document.getElementsByClassName('link');
    for (var j = 0; j < aTags.length; j++){
        aTags[j].addEventListener('mouseover', socialLinkOver);
        aTags[j].addEventListener('mouseout', socialLinkOut);
    }
}

function socialLinkOver() { TweenMax.to(this, $anim.hover.speedIn, {scale: $anim.hover.scale}); }
function socialLinkOut() { TweenMax.to(this, $anim.hover.speedOut, {scale: 1.00}); }

function loadBgImg() {
    trace('loadBgImg INIT');
    tl = new TimelineLite({paused:true});
    tl
        .set($sasaBgImage,{scale: $anim.background.scale, opacity:0})
        .to($sasaBgImage, $anim.background.duration, {scale:1, opacity:1})
    ;
    $sasaBgImage.classList.remove('hidden');
    tl.play();
}

function loadMainStageContent() {
    trace('loadMainStageContent INIT');
    showAllGlories();
    showNimaiCredits();

    $sasaLogo.classList.remove("sasaLogoIntro");
    $sasaLogo.classList.add("sasaLogo");
    $sasaMessage.classList.remove('hidden');
    $mainStage.classList.remove('hidden');
    $mainContainer.classList.remove('centered');

    scLoadPlaylist($sc_focus);
}

function scLoadPlaylist(playlist) {
    trace('scLoadPlaylist INIT');
    $scPlayer.classList.remove('hidden');
    GSAP.insertHTML($scPlayer, playlist);
    TweenMax.to(scPlaylist, 0.5, {height: 300});
}

function loadJS(link) {
    loadScripts(link,function(){
        trace('Scripts loaded');
        start();
    });
}

function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
            script.onreadystatechange = script.onload = null;
            handler();
        }
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild( script );
    };
    (function run(){
        if(array.length!=0){
            loader(array.shift(), run);
        }else{
            callback && callback();
        }
    })();
}

function once(fn, context) {
    var result;
    return function() {
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
}

var GSAP = {
    insertHTML: function (domID, htmlStr) {
        domID.insertAdjacentHTML('beforeend', htmlStr);
    }
};

window.addEventListener('load', init);
