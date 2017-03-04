var $debug = true;

TweenLite.defaultEase = Expo.easeOut;

var $scPlayer = document.getElementById('scPlayer')
var $scSwiper = document.getElementById('scSwiper');
var $scSwiperWrapper = document.getElementById('scSwiperWrapper');

var $swiperContainer = document.getElementsByClassName('swiperContainer');

var $mainStage = document.getElementById('mainStage');
var $AllGlories = document.getElementById('AllGlories');
var $sasaLogo = document.getElementById('sasaLogo');
var $socialLogos = document.getElementById('socialLogos');
var $sasaMessage = document.getElementById('sasaMessage');
var $twitterFeed = document.getElementById('twitterFeed');
var $instafeedSwiper = document.getElementById('instafeedSwiper');
var $soundcloudPlayer = document.getElementsByClassName('soundcloudPlayer');
var $heartcoreLogo = document.getElementsByClassName('heartcoreLogo');

var $nimaiHeader = document.getElementById('nimaiHeader');
var $nimaiFooter = document.getElementById('nimaiFooter');
var $nimaiFooterCredits = document.getElementById('nimaiFooterCredits');
var $sasaFooterCredit = document.getElementsByClassName('sasaFooterCredit');
var $nimEye = document.getElementById('nimEye');


var $link = document.getElementsByClassName('link');
var $link_soundcloud = document.getElementsByClassName('soundcloud');
var $link_reverbnation = document.getElementsByClassName('reverbnation');
var $link_youtube = document.getElementsByClassName('youtube');
var $link_facebook = document.getElementsByClassName('facebook');
var $link_twitter = document.getElementsByClassName('twitter');
var $link_instagram = document.getElementsByClassName('instagram');
var $link_plus = document.getElementsByClassName('plus');
var $link_medium = document.getElementsByClassName('medium');
var $link_linkedin = document.getElementsByClassName('linkedin');
var $link_github = document.getElementsByClassName('github');
var $link_codepen = document.getElementsByClassName('codepen');
var $link_mail = document.getElementsByClassName('mail');

var $linkArray = ['soundcloud', 'reverbnation', 'youtube', 'facebook', 'twitter', 'instagram', 'plus', 'medium', 'linkedin', 'github', 'codepen', 'mail'];

var $sasaBgImage = document.getElementById("sasaBgImage");
var $BgImage1 = "images/bg/SasaRA_BG_Photo_1.png";
var $BgImage2 = "images/bg/SasaRA_BG_Photo_2.png";
var $BgImage3 = "images/bg/SasaRA_BG_Photo_3.png";
var $BgImage4 = "images/bg/SasaRA_BG_Photo_4.png";
var $BgImage5 = "images/bg/SasaRA_BG_Photo_5.png";
var $BgImage6 = "images/bg/SasaRA_BG_Photo_6.png";


var $docHeight;
var $docWidth;

var $docCenterH;
var $docCenterW;

var $instaSlides = 4;

var resizeTimer;
var mySwiper;

var $sc_ID = 1796918; //SASA HASID RA SOUNDCLOUD USER ID #
var $sc_NightPlaylist = '<iframe id="scPlaylist" width="100%" height="163" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/3416309&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>';

var $sc_BabyBoy = 165546030;
var $sc_OneThing = 125842224;
var $sc_EveryBodyDies = 83457472;
var $sc_AngelChild = 77178318;
var $sc_ExciteMoney = 76063308;
var $sc_WeBelieve = 76020624;
var $sc_Nightmerikkkana = 76012806;
var $sc_FEAR = 75987437;

var $tfConfig = {
    "id": '464304692680335360',
    "domId": 'twitterFetcher_1',
    "maxTweets": 1,
    "enableLinks": true,
    "showPermalinks": false
};

window.onresize = function (event) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(SASA.setDocSize(), 200);
};

var SASA = {

        backstretchImages: ["images/bg/SasaRA_BG_Photo_1.png", "images/bg/SasaRA_BG_Photo_2.png", "images/bg/SasaRA_BG_Photo_3.png", "images/bg/SasaRA_BG_Photo_4.png"],


        init: function () {
            SASA.trace('sasa.js INIT');
            SASA.setScrollReveal();
            SASA.setDocSize();
            SASA.loadContent();

        },

        setScrollReveal: function() {
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
    
        loadContent: function () {
            SASA.trace('loadContent INIT');

            SASA.loadHeader();
            SASA.loadFooter();
            SASA.setMainStage();
            SASA.loadMainStageContent();
        },

        loadHeader: function () {
            $nimaiHeader.classList.remove('hidden');
            $AllGlories.classList.remove('hidden');
            SASA.loadSocialLogos();
            SASA.loadSasaMessage();
            SASA.loadTwitterFetcher($tfConfig);
            // SASA.loadInstafeed();
            // $sasaLogo.addEventListener("click", SASA.loadMainStageContent);
        },

        loadFooter: function () {
            $nimaiFooter.classList.remove('hidden');
            $nimaiFooterCredits.classList.remove('hidden');

        },

        setMainStage: function () {
            SASA.trace('setMainStage INIT');

            var nimaiHeaderH = Math.round($nimaiHeader.scrollHeight);
            var nimaiFooterH = Math.round($nimaiFooter.scrollHeight);
            var nimaiHeadFoot = Math.round(nimaiHeaderH + nimaiFooterH);
            var mainStageMinH = Math.round($docHeight - (nimaiHeadFoot + 25) );

            TweenMax.to($mainStage, 1.2, {minHeight: mainStageMinH});

            SASA.trace('nimaiHeadFoot = ' + nimaiHeadFoot);
            SASA.trace('nimaiHeaderH = ' + nimaiHeaderH);
            SASA.trace('nimaiFooterH = ' + nimaiFooterH);
            SASA.trace('setMainStage mainStageMinH = ' + mainStageMinH);

        },

        loadMainStageContent: function () {
            SASA.trace('loadMainStageContent INIT');
            $mainStage.classList.remove('hidden');
            SASA.scLoadPlaylist($sc_NightPlaylist);
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

        loadDocSizeChange: function () {
            SASA.trace('loadDocSizeChange INIT');
            //SASA.gsapCenter($nimEye,2);

            if ($docWidth < 1000) {
                $instaSlides = Math.ceil($docWidth / 200);
            } else {
                $instaSlides = 5;
            };

            SASA.setMainStage();
            // SASA.buildSwiper($instafeedSwiper, $instaSlides, 2000, 2000);
        },

        setBgImage: function (BgImageLink) {
            SASA.trace('setBGimage = ' + BgImageLink);
            $sasaBgImage.classList.remove('hidden');
            $sasaBgImage.src = BgImageLink
        },
    

        loadTwitterFetcher: function (config) {
            SASA.trace('loadTwitterFetcher INIT');
            $twitterFeed.classList.remove('hidden');
            twitterFetcher.fetch(config);
        },

        loadSocialLogos: function () {
            SASA.trace('loadSocialLogos INIT');
            $socialLogos.classList.remove('hidden');
        },

        loadSasaMessage: function () {
            SASA.trace('loadSasaMessage INIT');
            $sasaMessage.classList.remove('hidden');
        },

        scLoadPlaylist: function (playlist) {
            SASA.trace('scLoadPlaylist INIT');
            $scPlayer.classList.remove('hidden');
            SASA.insertHTML($scPlayer, playlist);
            $scPlayer.addEventListener("mouseover", SASA.scPlaylistOpen);
            // $scPlayer.addEventListener("mouseout", SASA.scPlaylistClose);
        },

        scPlaylistOpen: function () {
            SASA.trace('scPlaylistOpen INIT');
            TweenMax.to(scPlaylist,2,{height:500})
        },

        scPlaylistClose: function () {
            SASA.trace('scPlaylistClose INIT');
            TweenMax.to(scPlaylist,1,{height:163});
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

        //======================================
        //========= CUSTOM FUNCTIONS =============
        //======================================

        itemCenterX: function (item) {
            var positionInfo = item.getBoundingClientRect();
            var itemCenterX = Math.round(positionInfo.width/2);
            return itemCenterX;
        },

        itemCenterY: function (item) {
            var positionInfo = item.getBoundingClientRect();
            var itemCenterY = Math.round(positionInfo.height/2);
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

        gsapMove: function(v,t,x,y) {
            TweenMax.to(v, t, {left:x, top:y});
        },

        gsapCenter: function (v, t) {
            //SASA.trace('Center Height = ' + $docCenterH + 'px & Center Width = ' + $docCenterW + 'px');
            TweenMax.set(v, t, {xPercent:-50, yPercent:-50});
            TweenMax.to(v, t, {left:"50%", top:"50%"});
        },

        // trace for consistent console logging
        trace: function (value) {
            if ($debug == true) {
                console.log('<<< ', value, ' >>>')
            }
        },

    //// DOM Helpers

    // Get Element
        _getById: function (id) {
            return document.getElementById(id);
        },

        _getByClass: function (className) {
            return document.getElementsByClassName(className);
        },

        _addClass: function (element, classes) {
            var Element = (typeof element === 'string') ? _getElement(element) : element,
                classNames = Element.className;

            if (classNames.indexOf(classes) === -1) {
                classNames = classNames + " " + classes;
                classNames = classNames.replace(/\s{2,}/g, ' ').replace(/^ +/gm, '').replace(/\s+$/, '');
                Element.className = classNames;
            }
        },

        _removeClass: function (element, className) {
            // Declare Vars
            var Element = (typeof element === 'string') ? _getElement(element) : element,
                classNames = Element.className;

            // Clean up Class Names
            classNames = classNames.replace(className, '');
            classNames = classNames.replace(/\s{2,}/g, ' ').replace(/^ +/gm, '').replace(/\s+$/, '');

            // Update Class Names
            Element.className = classNames;
        },


//======================================
//============ EXTRA STUFF =============
//======================================

        scInit: function () {
            SASA.trace('SoundCloud INIT');
            SC.initialize({
                //LIVE ID
                //client_id: 'ba5833a1a0e062c28453969f6cbd405a',
                //redirect_uri: 'http://sasara.me/apps/sc/sc_callback.html'

                //STAGING ID
                client_id: 'f92b70ee5c21e8eb2585950c3c7ff21c',
                redirect_uri: 'http://thenimaigroup.com/sasara/apps/sc/sc_callback.html'
            });

            SASA.scLoad();
        }
        ,


        scLoad: function () {
            SASA.trace('scLoad INIT');

            //SASA.scLogin();

            //SASA.scGetSong($sc_OneThing);
            SASA.scGetTracks($sc_ID);

            SC.get(("/users/" + $sc_ID), function (user) {
                //$('#username').html(user.username) ;
                SASA.trace('SC ID = ' + user.id);
                SASA.trace('SC USERNAME = ' + user.username);
                SASA.trace('SC FOLLOWERS = ' + user.followers_count);
                SASA.trace('SC TRACKS = ' + user.track_count);
                SASA.trace('SC WEBSITE = ' + user.website);
                SASA.trace('SC DESCRIPTION = ' + user.description);
                //for (i = 0, len = user.track_count; i < len; i++) {
                //	text += cars[i] + "<br>";
                //}
            });

            //SC.get("/me", function(me) {
            //	$('#username').html(me.username) ;
            //	SASA.trace('SC ID = ' + me.id);
            //	SASA.trace('SC USERNAME = ' + me.username);
            //	SASA.trace('SC FOLLOWERS = ' + me.followers_count);
            //	SASA.trace('SC TRACKS = ' + me.track_count);
            //	SASA.trace('SC WEBSITE = ' + me.website);
            //	SASA.trace('SC DESCRIPTION = ' + me.description);
            //});

            //SC.get(("/tracks/"+ $sc_BabyBoy),function(track) {
            //	SC.oEmbed(track.permalink_url, document.getElementById('player'));
            //});

            //STREAM
            //SC.stream(("/tracks/" + $sc_BabyBoy), function(sound) {
            //	$("#stop").click(function(e) {
            //		e.preventDefault();
            //		sound.stop();
            //	});
            //	$("#start").click(function(e) {
            //		e.preventDefault();
            //		sound.start();
            //	});
            //});

            //GET COMMENTS
            //SC.get(("/tracks/" + $scID_BabyBoy + "/comments"), function(comments) {
            //	$.each(comments, function(i, comment) {
            //		$('#comments').append(
            //			$('<li></li>').html(comment.body)
            //		);
            //	});
            //});

            //RESULTS
            //SC.get('/tracks', { genres: 'heartcore' }, function(tracks) {
            //	$(tracks).each(function(index, track) {
            //		$('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
            //	});
            //});

        }
        ,

        scLogin: function () {

            SASA.trace('scLogin INIT');

            //LOGIN WITH SOUNDCLOUD
            $('a.connect').click(function (e) {
                e.preventDefault();
                SC.connect(function () {
                    SASA.trace('SC CONNECT');
                });
            });
        }
        ,

        scGetTracks: function (user) {
            //GET TRACKS
            var userId = user; // user_id of Sasa Hasid RA

            SC.get("/tracks", {
                user_id: userId,
                limit: 100
            }, function (tracks) {

                var scInsert = '';

                for (var i = 0; i < tracks.length; i++) {

                    scTrkDivOpen = '<div class="swiper-slide scTrkWrap">';
                    scTrkLinkOpen = '<a class="scTrkLink"  href="' + tracks[i].permalink_url + '" target="_blank">';
                    scTrkTitle = '<div class="scTrkTitle">' + tracks[i].title + '</div>';
                    scTrkArt = '<img class="scTrkArt"  src="' + tracks[i].artwork_url + '">';
                    scTrkWave = '<img class="scTrkWave"  src="' + tracks[i].waveform_url + '">';
                    scTrkDescription = '<div class="scTrkDescription"><p>' + tracks[i].description + '</p></div>'
                    scTrkLinkClose = '</a>';
                    scTrkDivClose = '</div>';

                    scTrkWidget = '<iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + tracks[i].id + '&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'

                    scInsert = (scTrkDivOpen + scTrkLinkOpen + scTrkTitle + scTrkArt + scTrkDescription + scTrkLinkClose + scTrkDivClose);
                    scWidgetInsert = (scTrkDivOpen + scTrkWidget + scTrkDivClose);

                    $scSwiperWrapper.insertAdjacentHTML('beforeend', scInsert);

                    //document.getElementsByClassName('scTrkWrap').insertAdjacentHTML( 'beforeend', scTrkImage );


                    //$scSwiperWrapper.appendChild(tmp);
                    //$scSwiperWrapper.innerHTML(tmp);
                    //$('<div>').html(tmp).appendTo($scSwiperWrapper);
                    //SASA.scGetSong(tracks[i].id);
                }

                $($scPlayer).removeClass("hidden");

                SASA.buildSwiper($scSwiper, 3, 1000, 0);

            });

        }
        ,

        scGetSong: function (song) {
            SC.get(("/tracks/" + song), function (track) {
                //$('#username').html(track.title) ;
                SASA.trace('Song ID = ' + track.id);
                SASA.trace('Song TITLE = ' + track.title);
                SASA.trace('Song PLAYBACK COUNT = ' + track.playback_count);
                SASA.trace('Song DOWNLOAD COUNT = ' + track.download_count);
                SASA.trace('Song ARTWORK = ' + track.artwork_url);
                SASA.trace('Song DESCRIPTION = ' + track.description);
                SASA.trace('Song WAVEFORM = ' + track.waveform_url);
                //SASA.setBgImage(track.artwork_url);
            });

        }
        ,

        setVariables: function () {

        }
        ,

        loadUI: function () {

        }
        ,

        loadJsLightbox: function (lbxName) {
            var lbxName = new Lightbox();
            lbxName.load();
            SASA.trace('JsLIGHTBOX LOADED === ' + lbxName);
        }
        ,

        screenResize: function () {
            w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                xWidth = w.innerWidth || e.clientWidth || g.clientWidth,
                yHeight = w.innerHeight || e.clientHeight || g.clientHeight;

            //$screenWidth.html("<p>Screen Width is: " + xWidth + "</p>");
            //$screenHeight.html("<p>Screen Height is: " + yHeight + "</p>");

            //$('.specialMessage').html('<p>Height = ' + yHeight + ' x Width = ' + xWidth + '</p>');


        }


    }
    ;

window.addEventListener('load', SASA.init);

