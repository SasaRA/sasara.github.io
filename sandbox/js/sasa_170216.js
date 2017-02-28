///////////////////////////
// GLOBAL VARIABLES START
//////////////////////////


var $debug = true,
    $firstTime = false;

var $defaultEase = "Expo.easeOut";

var $sasaMessageList = [
    'LOVE REIGNS SUPREME',
    // 'EVERY DAY IS A BLESSING',
    'LOVE GOD & LIVE',
    'SHINE BRIGHT',
    'HEARTCORE 4 LIFE',
    // 'LISTEN TO LIFE',
    'UNITY = STRENGTH',
    'KEEP SMILING',
    'YOU ARE LOVED'
];

var $jsLinks = [
    'js/TweenMax.min.js'
    // ,'js/scrollreveal.min.js'
    ,'js/twitterFetcher_min.js'
];

var $scPlayer = document.getElementById('scPlayer'),
    $scSwiper = document.getElementById('scSwiper'),
    $scSwiperWrapper = document.getElementById('scSwiperWrapper');

var $scTrackA = document.getElementById('scTrackA'),
    $scTrackB = document.getElementById('scTrackB'),
    $scExciteMoneyIframe = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/76063308&amp;color=0066cc&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>',
    $scWeBelieveIframe = '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/76020624&amp;color=0066cc&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>';

var $swiperContainer = document.getElementsByClassName('swiperContainer');

var $mainStage = document.getElementById('mainStage'),
    $AllGlories = document.getElementById('AllGlories'),
    $sasaLogo = document.getElementById('sasaLogo'),
    $socialLogos = document.getElementById('socialLogos'),
    $sasaMessage = document.getElementById('sasaMessage'),
    $sasaMsg = document.getElementById('sasaMsg'),
    $twitterFeed = document.getElementById('twitterFeed'),
    $instafeedSwiper = document.getElementById('instafeedSwiper'),
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

var $socialList = [
    'soundcloud'
    ,'reverbnation'
    ,'youtube'
    ,'twitter'
    ,'instagram'
    // ,'tumblr'
    ,'facebook'
    // ,'pinterest'
    ,'plus'
    ,'medium'
    ,'linkedin'
    ,'github'
    ,'codepen'
    // email link is added on load //
];

var $link = document.getElementsByClassName('link'),
    $link_soundcloud = document.getElementsByClassName('soundcloud'),
    $link_reverbnation = document.getElementsByClassName('reverbnation'),
    $link_youtube = document.getElementsByClassName('youtube'),
    $link_facebook = document.getElementsByClassName('facebook'),
    $link_twitter = document.getElementsByClassName('twitter'),
    $link_instagram = document.getElementsByClassName('instagram'),
    $link_plus = document.getElementsByClassName('plus'),
    $link_medium = document.getElementsByClassName('medium'),
    $link_linkedin = document.getElementsByClassName('linkedin'),
    $link_github = document.getElementsByClassName('github'),
    $link_codepen = document.getElementsByClassName('codepen'),
    $link_mail = document.getElementsByClassName('mail');

var $linkArray = ['soundcloud', 'reverbnation', 'youtube', 'facebook', 'twitter', 'instagram', 'plus', 'medium', 'linkedin', 'github', 'codepen', 'mail'];

var $sasaBgImage = document.getElementById("sasaBgImage");
var $BgImage1 = "images/bg/SasaRA_BG_Photo_1.png";
var $BgImage2 = "images/bg/SasaRA_BG_Photo_2.png";
var $BgImage3 = "images/bg/SasaRA_BG_Photo_3.png";
var $BgImage4 = "images/bg/SasaRA_BG_Photo_4.png";
var $BgImage5 = "images/bg/SasaRA_BG_Photo_5.png";
var $BgImage6 = "images/bg/SasaRA_BG_Photo_6.png";

var $docHeight,
    $docWidth,
    $docCenterH,
    $docCenterW;

var $instaSlides = 4;

var resizeTimer;

var mySwiper;

var $sc_ID = 1796918, //SASA HASID RA SOUNDCLOUD USER ID #
    $sc_NightPlaylist = '<iframe id="scPlaylist" width="100%" height="163" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3416309&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>';

var $sc_BabyBoy = 165546030,
    $sc_OneThing = 125842224,
    $sc_EveryBodyDies = 83457472,
    $sc_AngelChild = 77178318,
    $sc_ExciteMoney = 76063308,
    $sc_WeBelieve = 76020624,
    $sc_Nightmerikkkana = 76012806,
    $sc_FEAR = 75987437;

var $tfConfig = {
    "id": '464304692680335360',
    "domId": 'twitterFetcher_1',
    "maxTweets": 1,
    "enableLinks": true,
    "showPermalinks": false
};

var backstretchImages = [
    "images/bg/SasaRA_BG_Photo_1.png",
    "images/bg/SasaRA_BG_Photo_2.png",
    "images/bg/SasaRA_BG_Photo_3.png",
    "images/bg/SasaRA_BG_Photo_4.png"];

/////////////////////////
// GLOBAL VARIABLES END
/////////////////////////

window.onresize = function (event) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setDocSize(), 200);
};

// trace for consistent console logging
function trace(value) {
    if ($debug == true) {
        console.log('<<< ', value, ' >>>')
    }
}

function init() {
    trace('init');
    loadJS($jsLinks);
}

function start() {
    trace('start');
    // setDocSize();
    loadContent();
    // loadSasaMessage();
}

function loadSasaMessage() {
    trace('loadSasaMessage INIT');
    // $nimaiOverlay.classList.remove('hidden');

    msgNumber = Math.floor(Math.random() * $sasaMessageList.length); // Random Index position in the array
    GSAP.insertHTML($sasaMsg, $sasaMessageList[msgNumber]);
    GSAP.insertHTML($sasaMessage, $sasaMessageList[msgNumber]);
    // TweenMax.set($sasaMessage,{opacity:0});
    playSasaMessage(1);
    // loadContent();
}

function playSasaMessage(msgDuration) {
    trace('playSasaMessage INIT');

    $sasaMessage.classList.add('animate');
    $nimaiOverlay.classList.remove('hidden');
    $sasaMessage.classList.remove('hidden');

    duration = ('+=' + msgDuration);

    tl = new TimelineLite();

    tl
        .to($nimaiOverlay, 0.01, {zIndex: 5000, opacity: 1})
        .to($sasaMessage, 0.01, {zIndex: 5100})
        .to($sasaMessage, 0.01, {xPercent: -50, yPercent: -50})
        .to($sasaMessage, 0.01, {left: "50%", top: "50%"})
        .to($sasaMessage, 0.5, {opacity: 1, scale: 1.5})
        .to($nimaiOverlay, 3, {zIndex: 1, opacity: 0}, duration)
        .to($sasaMessage, 1.2, {
            opacity: 0, scale: 0.6, onComplete: function () {
                endSasaMessage();
            }
        }, '-=2')
        .to($sasaMessage, 4, {top: '30%'}, '-=2')
    ;
    // tl.kill(null,$sasaMessage);
}

function endSasaMessage() {
    trace('endSasaMessage INIT');

    TweenMax.set($sasaMessage, {clearProps: "all"});
    TweenMax.set($sasaMessage, {display: "none"});
    $nimaiOverlay.classList.add('hidden');
    // $sasaMessage.classList.add('hidden');
    // $sasaMessage.classList.remove('animate');

    // loadContent();
}

function loadContent() {
    trace('loadContent INIT');
    loadHeadFoot();
    // loadHeader();
    // loadFooter();
    // setMainStage();
    // loadMainStageContent();
}

function loadHeadFoot() {
    trace('loadHeadFoot INIT');

    TweenLite.set($AllGlories, {opacity: 0});
    TweenLite.set($sasaLogo, {opacity: 0});
    TweenLite.set($heartcoreLogo, {opacity: 0});
    TweenLite.set($nimaiFooterCredit, {opacity: 0});

    $nimaiHeader.classList.remove('hidden');
    $nimaiFooter.classList.remove('hidden');
    $sasaLogo.classList.remove('hidden');
    $heartcoreLogo.classList.remove('hidden');
    $nimaiFooterCredits.classList.remove('hidden');

    // $AllGlories.classList.remove('hidden');

    tl = new TimelineLite({paused:true});
    tl.to($AllGlories, 1, {opacity: 1})
        .add('start',0)
        .add('step2',0.1)
        .to($sasaLogo, 0.5, {
            opacity: 1, onComplete: function () {
                // loadTwitterFetcher($tfConfig);
                // $nimaiHeader.classList.remove('ani');
                // loadFooter();
            }
        }, 'start')
        .to($heartcoreLogo, 0.5, {
            opacity: 1, onComplete: function () {
                trace('BASIC SITE LOADED - READY FOR EXTRAS');
                loadSocial($socialList);
            }
        }, 'start')
        .from($sasaLogo, 0.5, {scale:0.8,y:-5},'step2')
        .from($heartcoreLogo, 0.5, {scale:0.8,y:5},'step2')
        .staggerFrom($nimaiFooterCredit,0.7,{y:-5,opacity: 0},0.2,'-=0.2')
    ;


    tl.play();
    // $sasaMessage.classList.remove('animate');
    // $sasaMessage.classList.remove('hidden');
    // loadSocial($socialList);
}

function loadHeader() {
    $nimaiHeader.classList.remove('hidden');
    TweenMax.set($AllGlories, {opacity: 0});
    TweenMax.set($sasaLogo, {opacity: 0});

    // $AllGlories.classList.remove('hidden');
    $sasaLogo.classList.remove('hidden');

    tl = new TimelineLite();
    tl.to($AllGlories, 1, {opacity: 1})

        .to($sasaLogo, 1, {
            opacity: 1, onComplete: function () {
                // loadTwitterFetcher($tfConfig);
                // $nimaiHeader.classList.remove('ani');
                // loadFooter();
            }
        }, '-=1.5')
        .from($sasaLogo, 1, {scale:0.9,y:-5},'-=1')
    ;
    // $sasaMessage.classList.remove('animate');
    // $sasaMessage.classList.remove('hidden');
    // loadSocial($socialList);
}

function loadFooter() {
    $nimaiFooter.classList.remove('hidden');
    TweenMax.set($heartcoreLogo, {opacity: 0});
    TweenMax.set($nimaiFooterCredit, {opacity: 0});

    $heartcoreLogo.classList.remove('hidden');
    // $nimaiFooterCredits.classList.remove('hidden');

    tl = new TimelineLite();
    tl
        .to($heartcoreLogo, 1, {
            opacity: 1, onComplete: function () {
                trace('BASIC SITE LOADED - READY FOR EXTRAS');
            }
        }, '-=1.0')
        .from($heartcoreLogo, 1, {scale:0.9,y:5},'-=1')
        .staggerFrom($nimaiFooterCredit,0.7,{y:-5,opacity: 0},0.2,'-=0.2')
    ;
    // loadMainStageContent();
    // loadTwitterFetcher($tfConfig);
}

function loadMainStageContent() {
    trace('loadMainStageContent INIT');
    $sasaMessage.classList.remove('animate');
    $sasaMessage.classList.remove('hidden');
    $mainStage.classList.remove('hidden');
    loadTwitterFetcher($tfConfig);
    scLoadPlaylist($sc_NightPlaylist);
    // loadStorePromo();
}

function loadSocial(s) {
    trace('loadSocial LOADED');
    str = '';
    for (i = 0; i < s.length; i++) {
        linkName = s[i];
        str += ('<a class="link ' + s[i] + '" title="' + s[i] + '" href="http://' + s[i] + '.sasara.me" target="_blank"></a>');
        // linkName.addEventListener("mouseover", socialLinkOver);
        // linkName.addEventListener("mouseout", socialLinkOut);
    }
    str += ('<a class="link mail" title="email" href="mailto:ra@souljah.com?subject=Mail from SasaRA.me" target="_blank"></a>');
    GSAP.insertHTML($socialLogos, str);
    loadSocialLogos();
}

function loadSocialLogos() {
    trace('loadSocialLogos INIT');
    // TweenMax.set($link, {opacity: 1});
    // TweenMax.set($socialLogos, {height: 0});
    // $socialLogos.classList.remove('hidden');

    tl = new TimelineLite();
    tl
        .set($link, {opacity: 1})
        .to($socialLogos,0.5,{height:44})
        .staggerFrom($link, 0.2, {y: +10, opacity: 0}, 0.035)
        .staggerTo($link,0.2,{scale:0.80}, -0.035)
    ;

    // $link.onmouseenter = function(){
    //     trace('$link onmouseenter');
    // };
    // $link.onmouseleave = function(){
    //     trace('$link onmouseleave');
    // };

    // $link.addEventListener("mouseover", socialLinkOver);
    //
    // $link.addEventListener("mouseout", socialLinkOut);

    // $link.onmouseenter = socialLinkOver();
    //
    // $link.onmouseleave = socialLinkOut();

    // loadTwitterFetcher($tfConfig);
}

function socialLinkOver() {
    trace('$link onmouseenter');
    TweenMax.to($link,0.1,{scale:1});
}

function socialLinkOut() {
    trace('$link onmouseleave');
    TweenMax.to($link,0.1,{scale:0.8});
}

function loadStorePromo() {
    trace('loadStorePromo INIT');
    $storePromo.classList.remove('hidden');
    GSAP.insertHTML($scTrackA, $scExciteMoneyIframe);
    GSAP.insertHTML($scTrackB, $scWeBelieveIframe);

}

function setBgImage(BgImageLink) {
    trace('setBGimage = ' + BgImageLink);
    $sasaBgImage.classList.remove('hidden');
    $sasaBgImage.src = BgImageLink
}

function scLoadPlaylist(playlist) {
    trace('scLoadPlaylist INIT');
    $scPlayer.classList.remove('hidden');
    GSAP.insertHTML($scPlayer, playlist);
    TweenMax.to(scPlaylist, 2, {height: 500});
}

function scPlaylistOpen() {
    if ($firstTime = true) {
        trace('scPlaylistOpen INIT');
        TweenMax.to(scPlaylist, 2, {height: 500})
        $firstTime = false;
    }
    trace('$firstTime = ' + $firstTime);
}

function scPlaylistClose() {
    trace('scPlaylistClose INIT');
    TweenMax.to(scPlaylist, 1, {height: 163});
}

function loadTwitterFetcher(config) {
    trace('loadTwitterFetcher INIT');
    $twitterFeed.classList.remove('hidden');
    TweenMax.to($twitterFeed, 2, {opacity: 1});
    twitterFetcher.fetch(config);
    // loadMainStageContent();
}

function setMainStage() {
    trace('setMainStage INIT');

    var nimaiHeaderH = Math.round($nimaiHeader.scrollHeight);
    var nimaiFooterH = Math.round($nimaiFooter.scrollHeight);
    var nimaiHeadFoot = Math.round(nimaiHeaderH + nimaiFooterH);
    var mainStageMinH = Math.round($docHeight - (nimaiHeadFoot + 25));

    TweenMax.to($mainStage, 1.2, {minHeight: mainStageMinH});

    // trace('nimaiHeadFoot = ' + nimaiHeadFoot);
    // trace('nimaiHeaderH = ' + nimaiHeaderH);
    // trace('nimaiFooterH = ' + nimaiFooterH);
    // trace('setMainStage mainStageMinH = ' + mainStageMinH);

}

function setDocSize() {
    $docWidth = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    $docHeight = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    $docCenterW = Math.round($docWidth / 2);

    $docCenterH = Math.round($docHeight / 2);
}

//======================================
//========= CUSTOM FUNCTIONS =============
//======================================

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



var GSAP = {

        gsapCenter: function (v, t) {
            //trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');
            TweenMax.set(v, t, {xPercent: -50, yPercent: -50});
            TweenMax.set(v, t, {left: "50%", top: "50%"});
        },

        itemCenterX: function (item) {
            var positionInfo = item.getBoundingClientRect();
            var itemCenterX = Math.round(positionInfo.width / 2);
            return itemCenterX;
        },

        itemCenterY: function (item) {
            var positionInfo = item.getBoundingClientRect();
            var itemCenterY = Math.round(positionInfo.height / 2);
            return itemCenterY;
        },

        hideItem: function (domID) {
            var item = domID.id;
            trace(item + ' hideItem CALLED');
            item.classList.add('hidden');
            //document.getElementById('instafeedSwiper')
        },

        showItem: function (domID) {
            var item = domID.id;
            trace(item + ' showItem CALLED');
            item.classList.remove('hidden');
        },

        insertHTML: function (domID, htmlStr) {
            domID.insertAdjacentHTML('beforeend', htmlStr);
            // trace(htmlStr + ' LOADED into DOM ID : ' + domID.id);
        },

        gsapScale: function (v, t, a) {
            TweenMax.to(v, t, {scale: a});
        },

        gsapPosR: function (v, t, xPos, yPos) {
            TweenMax.to(v, t, {x: xPos, y: yPos});
        },

        gsapPosA: function (v, t, xPos, yPos) {
            var xPosA = ($docCenterW - xPos);
            var yPosA = ($docCenterH - yPos);

            TweenMax.to(v, t, {x: xPosA, y: yPosA});
        },

        gsapHeightWidth: function (v, t, h, w) {
            TweenMax.to(v, t, {height: h, width: w});
        },

        gsapHeight: function (v, t, h) {
            TweenMax.to(v, t, {height: h});
        },

        gsapMinHeight: function (v, t, h) {
            TweenMax.to(v, t, {minHeight: h});
        },

        gsapWidth: function (v, t, w) {
            TweenMax.to(v, t, {width: w});
        },

        gsapMove: function (v, t, x, y) {
            TweenMax.to(v, t, {left: x, top: y});
        },

        gsapCenterH: function (v, t) {
            //trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');
            TweenMax.to(v, t, {xPercent: -50});
            TweenMax.to(v, t, {left: "50%"});
        },

        gsapCenterV: function (v, t) {
            //trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');
            TweenMax.to(v, t, {yPercent: -50});
            TweenMax.to(v, t, {top: "50%"});
        }
    }
    ;

window.addEventListener('load', init);

