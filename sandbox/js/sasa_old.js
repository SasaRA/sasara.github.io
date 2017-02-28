///////////////////////////
// GLOBAL VARIABLES START
//////////////////////////


var $debug = true,
    $firstTime = false;

TweenLite.defaultEase = Expo.easeOut;

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
]

var $scPlayer = document.getElementById('scPlayer'),
    $scSwiper = document.getElementById('scSwiper'),
    $scSwiperWrapper = document.getElementById('scSwiperWrapper');

var $swiperContainer = document.getElementsByClassName('swiperContainer');

var $mainStage = document.getElementById('mainStage'),
    $AllGlories = document.getElementById('AllGlories'),
    $sasaLogo = document.getElementById('sasaLogo'),
    $socialLogos = document.getElementById('socialLogos'),
    $sasaMessage = document.getElementById('sasaMessage'),
    $twitterFeed = document.getElementById('twitterFeed'),
    $instafeedSwiper = document.getElementById('instafeedSwiper'),
    $soundcloudPlayer = document.getElementsByClassName('soundcloudPlayer'),
    $heartcoreLogo = document.getElementById('heartcoreLogo');
    $nimaiFooterCredit = document.getElementsByClassName('nimaiFooterCredit');

var $nimaiOverlay = document.getElementById('nimaiOverlay'),
    $nimaiHeader = document.getElementById('nimaiHeader'),
    $nimaiFooter = document.getElementById('nimaiFooter'),
    $nimaiFooterCredits = document.getElementById('nimaiFooterCredits'),
    $sasaFooterCredit = document.getElementsByClassName('sasaFooterCredit'),
    $nimEye = document.getElementById('nimEye');


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


/////////////////////////
// GLOBAL VARIABLES END
/////////////////////////

window.onresize = function (event) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(SASA.setDocSize(), 200);
};

var SASA = {

        backstretchImages: ["images/bg/SasaRA_BG_Photo_1.png", "images/bg/SasaRA_BG_Photo_2.png", "images/bg/SasaRA_BG_Photo_3.png", "images/bg/SasaRA_BG_Photo_4.png"],

        init: function () {
            SASA.trace('sasa.js INIT');
            // SASA.setScrollReveal();
            SASA.setDocSize();
            // SASA.loadContent();
            SASA.loadSasaMessage();
        },

        loadSasaMessage: function () {
            SASA.trace('loadSasaMessage INIT');
            $nimaiOverlay.classList.remove('hidden');

            msgNumber = Math.floor(Math.random() * $sasaMessageList.length); // Random Index position in the array
            SASA.insertHTML($sasaMessage, $sasaMessageList[msgNumber]);
            // TweenMax.set($sasaMessage,{opacity:0});
            SASA.playSasaMessage(1);
        },

        playSasaMessage: function (msgDuration) {

            $sasaMessage.classList.add('animate');
            $nimaiOverlay.classList.remove('hidden');
            $sasaMessage.classList.remove('hidden');

            duration = ('+=' + msgDuration);

            tl = new TimelineLite();

            tl
                .to($nimaiOverlay, 0.01, {zIndex: 5000,opacity:1})
                .to($sasaMessage, 0.01, {xPercent: -50, yPercent: -50})
                .to($sasaMessage, 0.01, {left: "50%", top: "50%"})
                .to($sasaMessage, 1, {opacity: 1, scale: 1.5})
                .to($nimaiOverlay, 2, {zIndex: 1, opacity: 0}, duration)
                .to($sasaMessage,1.2, {opacity: 0,scale:0.6,onComplete:function () {
                    TweenMax.set($sasaMessage, {clearProps:"all"});
                    $nimaiOverlay.classList.add('hidden');
                    $sasaMessage.classList.remove('animate');
                    $sasaMessage.classList.add('hidden');
                    SASA.loadContent();
                }}, '-=2').
                to($sasaMessage,9,{top: 30},'-=2')
            ;


        },

        playMessage: function (v,msgDuration) {

            item = v;
            item.classList.add('animate');
            $nimaiOverlay.classList.remove('hidden');
            item.classList.remove('hidden');


            duration = ('+=' + msgDuration);

            tl = new TimelineLite();

            tl
                .to($nimaiOverlay, 0.01, {zIndex: 5000, opacity:1})
                .to(item, 0.01, {zIndex: 5100, xPercent: -50, yPercent: -50, left: "50%", top: "50%"})
                .to(item, 1, {opacity: 1, scale: 1.5})
                .to($nimaiOverlay, 2, {zIndex: 1, opacity: 0}, duration)
                .to(item,1.2, {opacity: 0,scale:0.6,onComplete:function () {
                    TweenMax.set(item, {clearProps:"all"});
                    $nimaiOverlay.classList.add('hidden');
                    item.classList.remove('animate');
                    item.classList.add('hidden');
                    SASA.loadContent();
                }}, '-=2').
            to(item,9,{top: 40},'-=2')
            ;


        },

        loadContent: function () {
            SASA.trace('loadContent INIT');

            SASA.loadHeader();
            SASA.loadFooter();
            // SASA.setMainStage();
            // SASA.loadMainStageContent();
        },

        loadHeader: function () {
            $nimaiHeader.classList.remove('hidden');
            TweenMax.set($AllGlories,{opacity:0});
            TweenMax.set($sasaLogo,{opacity:0});
            TweenMax.set($link,{opacity:1});

            $AllGlories.classList.remove('hidden');
            $sasaLogo.classList.remove('hidden');

            tl = new TimelineLite();
            tl.to($AllGlories, 1, {opacity: 1})
                .staggerFrom($link,0.5,{y:+10,opacity:0},0.05)
                .to($sasaLogo, 1.5, {opacity: 1,onComplete:function() {
                    SASA.loadTwitterFetcher($tfConfig);
                }},'-=1.5')
                ;
            // SASA.loadSasaMessage();
            // SASA.loadSocialLogos();
            // SASA.loadTwitterFetcher($tfConfig);
            // SASA.loadInstafeed();
            // $sasaLogo.addEventListener("click", SASA.loadMainStageContent);
        },

        loadFooter: function () {
            $nimaiFooter.classList.remove('hidden');
            TweenMax.set($heartcoreLogo,{opacity:0});
            TweenMax.set($nimaiFooterCredit,{opacity:1});

            $heartcoreLogo.classList.remove('hidden');
            $nimaiFooterCredits.classList.remove('hidden');

            tl = new TimelineLite();
            tl.staggerFrom($nimaiFooterCredit,0.3,{x:0,opacity:0},0.05)
                .to($heartcoreLogo, 1, {opacity: 1,onComplete:function() {
                    SASA.trace('BASIC SITE LOADED - READY FOR EXTRAS');
                // SASA.loadMainStageContent($sc_NightPlaylist);
                    $sasaLogo.addEventListener("click", SASA.loadMainStageContent);
            }});

        },

        loadMainStageContent: function () {
            SASA.trace('loadMainStageContent INIT');
            $mainStage.classList.remove('hidden');
            // SASA.scLoadPlaylist($sc_NightPlaylist);
        },

        loadSocialFrame: function (link) {

            $mainStage.classList.remove('hidden');

            sLink = ('<iframe src="' + link + '"></iframe>');

            $mainStage.innerHTML = sLink;

            // <iframe src="http://www.w3schools.com"></iframe>
        },

        setBgImage: function (BgImageLink) {
            SASA.trace('setBGimage = ' + BgImageLink);
            $sasaBgImage.classList.remove('hidden');
            $sasaBgImage.src = BgImageLink
        },

        loadSocialLogos: function () {
            SASA.trace('loadSocialLogos INIT');
            // $socialLogos.classList.remove('hidden');

            tl = new TimelineLite();
            tl
                .set($link,{opacity:1})
                .staggerFrom($link,0.3,{x:-10,opacity:0},0.25);

            $link.addEventListener('mouseover', SASA.gsapScale(this,1,1.5));
            $link.addEventListener('mouseout', SASA.gsapScale(this,1,1));
        },


        scLoadPlaylist: function (playlist) {
            SASA.trace('scLoadPlaylist INIT');
            $scPlayer.classList.remove('hidden');
            SASA.insertHTML($scPlayer, playlist);
            TweenMax.to(scPlaylist, 2, {height: 500});
            // $scPlayer.addEventListener("mouseover", SASA.scPlaylistOpen);
            // $scPlayer.addEventListener("mouseout", SASA.scPlaylistClose);
        },

        scPlaylistOpen: function () {
            if ($firstTime = true) {
                SASA.trace('scPlaylistOpen INIT');
                TweenMax.to(scPlaylist, 2, {height: 500})
                $firstTime = false;
            }
            SASA.trace('$firstTime = ' + $firstTime);
        },

        scPlaylistClose: function () {
            SASA.trace('scPlaylistClose INIT');
            TweenMax.to(scPlaylist, 1, {height: 163});
        },

        loadTwitterFetcher: function (config) {
            SASA.trace('loadTwitterFetcher INIT');
            $twitterFeed.classList.remove('hidden');
            TweenMax.from($twitterFeed, 4, {opacity:0});
            twitterFetcher.fetch(config);
        },

        loadInstafeed: function () {
            SASA.trace('INSTAFEED STARTED');
            $instafeedSwiper.classList.remove('hidden');

            //if($docWidth < 1000) {
            //	$instaSlides = Math.ceil($docWidth/200);
            //} else {
            //	$instaSlides = 5;
            //};

            var feed = new Instafeed({
                get: 'user',
                userId: 30738449,
                accessToken: '30738449.467ede5.9f7b8c291e3d4d2d9c88eb9c1415e3aa',
                resolution: 'standard_resolution',
                sortBy: 'most-liked',
                //tagName : 'MeRightNow',
                clientId: '3cedb472ef9f4429a926145dd9c3f98d',
                //template : '<a class="swiper-slide"><img class="jslghtbx-thmb" src="{{image}}" alt="" data-jslghtbx-caption="{{caption}}" height="150" width="150"  data-jslghtbx="{{image}}" ></a>',
                template: '<a href="{{image}}" class="swiper-slide" data-lightbox="instagrammy" data-title="{{caption}}"><img src="{{image}}" alt="{{caption}}" height="150" width="150"/></a>',
                // links: true,
                after: function () {
                    //SASA.trace('INSTAFEED LOADED');
                    SASA.buildSwiper($instafeedSwiper, $instaSlides, 4000, 4000);
                }
            });

            feed.run();

        },

        buildSwiper: function (swiperName, slidesPerView, speed, autoPlay) {
            //var name = String(swiperName);
            SASA.trace(swiperName.id + ' SWIPER STARTED');
            var newSwiper = new Swiper(swiperName, {
                speed: speed,
                mode: 'horizontal',
                loop: true,
                grabCursor: true,
                initialSlide: 0,
                slidesPerView: slidesPerView,
                spaceBetween: 10,
                preventLinks: true,
                preventClicks: true,
                preventClicksPropagation: true,
                centeredSlides: true,
                autoplay: autoPlay,
                autoplayDisableOnInteraction: false
            });

        },

        loadBackstretch: function () {
            console.log("BACKSTRETCH STARTED");
            $.backstretch(SASA.backstretchImages, {
                duration: 10000,
                fade: 750
            });
            // $.backstretch('images/bg/SasaRA_BG_Photo_1.jpg');

        },

        setScrollReveal: function () {
            // Initialize and Configure Scroll Reveal Animation
            window.sr = ScrollReveal();
            sr.reveal('.sr_header', {
                duration: 600,
                scale: 0.9,
                distance: '0px'
            }, 200);
            sr.reveal('.link', {
                duration: 50,
                scale: 0.9,
                distance: '0px'
            }, 20);
            sr.reveal('.sr_footer', {
                duration: 600,
                scale: 0.8,
                distance: '0px'
            }, 200);

        },

        setMainStage: function () {
            SASA.trace('setMainStage INIT');

            var nimaiHeaderH = Math.round($nimaiHeader.scrollHeight);
            var nimaiFooterH = Math.round($nimaiFooter.scrollHeight);
            var nimaiHeadFoot = Math.round(nimaiHeaderH + nimaiFooterH);
            var mainStageMinH = Math.round($docHeight - (nimaiHeadFoot + 25));

            TweenMax.to($mainStage, 1.2, {minHeight: mainStageMinH});

            SASA.trace('nimaiHeadFoot = ' + nimaiHeadFoot);
            SASA.trace('nimaiHeaderH = ' + nimaiHeaderH);
            SASA.trace('nimaiFooterH = ' + nimaiFooterH);
            SASA.trace('setMainStage mainStageMinH = ' + mainStageMinH);

        },

        setDocSize: function () {
            $docWidth = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

            $docHeight = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;

            $docCenterW = Math.round($docWidth / 2);

            $docCenterH = Math.round($docHeight / 2);

            // SASA.trace('Height = ' + $docHeight + 'px & Width = ' + $docWidth + 'px');
            // SASA.trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');

            // SASA.loadDocSizeChange();
        },

        //======================================
        //========= CUSTOM FUNCTIONS =============
        //======================================

        gsapCenter: function (v, t) {
            //SASA.trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');
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
            SASA.trace(item + ' hideItem CALLED');
            item.classList.add('hidden');
            //document.getElementById('instafeedSwiper')
        },

        showItem: function (domID) {
            var item = domID.id;
            SASA.trace(item + ' showItem CALLED');
            item.classList.remove('hidden');
        },

        insertHTML: function (domID, htmlStr) {
            domID.insertAdjacentHTML('beforeend', htmlStr);
            //SASA.trace(htmlStr + ' LOADED into DOM ID : ' + domID.id);
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
            //SASA.trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');
            TweenMax.to(v, t, {xPercent: -50});
            TweenMax.to(v, t, {left: "50%"});
        },

        gsapCenterV: function (v, t) {
            //SASA.trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');
            TweenMax.to(v, t, {yPercent: -50});
            TweenMax.to(v, t, {top: "50%"});
        },

        // trace for consistent console logging
        trace: function (value) {
            if ($debug == true) {
                console.log('<<< ', value, ' >>>')
            }
        }
    }
    ;

window.addEventListener('load', SASA.init);

