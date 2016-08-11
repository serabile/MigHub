angular.module('starter.controllers', [])

  .controller('AppCtrl', function (
    $scope,
    $ionicModal,
    $timeout,
    API,
    $ionicActionSheet,
    $translate
  ) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    // $scope.$on('$ionicView.enter', function(e) {
    // })

    // Triggered on a button click, or some other target
    $scope.show = function () {
      // Show the action sheet
      var buttons = [
        {
          text: 'Svenska',
          code: 'sv'
        },
        {
          text: 'English',
          code: 'en'
        },
        {
          text: 'زبان فارسي',
          code: 'fa'
        },
        {
          text: 'اللغة العربية',
          code: 'ar'
        },
      ]

      $ionicActionSheet.show({
        buttons: buttons,
        titleText: $translate.instant('choose_language'),
        cancelText: 'Cancel',
        cancel: function () {
          // add cancel code..
        },
        buttonClicked: function (index) {
          setLocale(buttons[index].code)
          return true
        }
      })
    }

    var setLocale = function (locale) {
      console.log('Set language: ', locale)
      $translate.use(locale)
    }

    $scope.search = function(typeKey, myArray){

      if (myArray) {
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].type === typeKey) {
                return myArray[i];
            }
        }
      } else {
        return false;
      }
    }

    // root scope
    $scope.categories = [
      { title: 'employment', slug: 'employment', color: '#FFCE6B', icon_color: '#83671E' },
      { title: 'housing', slug: 'housing', color: '#EE88B5', icon_color: '#611E3E' },
      { title: 'media & comunication', slug: 'media_comunication', color: '#D94D5B', icon_color: '#6F2028' },
      { title: 'information', slug: 'information', color: '#50C1A9', icon_color: '#1E6653' },
      { title: 'education', slug: 'education', color: '#5C92D9', icon_color: '#214073' },
      { title: 'language', slug: 'language', color: '#55ddb0', icon_color: '#5A261C' },
      { title: 'social', slug: 'social', color: '#5C92D9', icon_color: '#611E3E' },
      { title: 'health', slug: 'health', color: '#ffdd00', icon_color: '#611E3E' }
    ]

   /* $scope.apps = [
      // { title: 'Vårdguiden', tags: ['health'], logo: 'vardguiden.png', description: '' },
      // { title: 'Competency.se', tags: ['employment', 'information'], logo: '', description: '' },
      // { title: 'Newcomers.io', tags: ['social'], logo: '', description: 'A community of refugees, locals and professionals who connect and do projects together.' },
      { title: 'Just Arrived', tags: ['employment'],  logo: 'just-arrived.png', description: 'We connect newly-arrived immigrants with Swedish companies who need help with day-to-day activities. Our digital platform enables companies to post simple tasks and services, and match them with new arrivals looking for work.'},
      { title: 'WelcomeApp', tags: ['social'],  logo: 'welcome-app.jpg', description: 'Welcome! app makes it easier for newly arrived refugees and locals to connect. Through the app you can: - Reach out to others; - Create, host and join activities; - Chat with new interesting people: - Welcome! is translated to four languages: Arabic, Persian, Swedish and English. It enables people with different native languages to communicate through real time auto-translation. You can filter questions and activities based on popular categories, and you will see what is happening nearby.'},
      { title: 'Information Sverige', tags: ['information'], logo: 'information-sverige.png', description: 'This portal is for anyone who is new to Sweden and wants to find information about Swedish society quickly and easily. It brings all the information, in several different languages, together in one place. It includes civic information and answers to questions about how housing, medical care and education work in Sweden. You will also find information about your rights and about the public authorities you will have contact with when you first arrive in Sweden. You can look for vacant jobs or check where the nearest medical care centre or school is located. Use informationsverige.se as your guide to Swedish society.' },
      { title: 'Kompisbyrån', tags: ['social'], logo: 'kompis-byran.png', description: 'Buddy Office helps people to meet new friends with similar interests. We create contact between those who are new in Sweden and those who have lived in Sweden for a long time. You can get coffee Buddy or Buddy Music. As Coffee Mate, you will be matched with a person with similar interests as you have. You meet, have coffee and Practice Swedish! Together we can raise community in society. Become a Coffee Mate today!' },
      { title: 'Lingio', tags: ['language'], logo: 'lingio.png', description: "If you can spare just a few minutes a day you will expand your vocabulary while having lots of fun and best of all, it's completely free.Choose from English, Spanish, German, French, Italian, Portuguese, Swedish and Arabic. There are over 300 different topics to learn from. Select whether you want to learn by yourself, challenge a friend or play a random opponent. Find new people to chat with through our community of language enthusiasts." },
      { title: 'Yrkesdörren', tags: ['education'], logo: 'yrkesdorren.png', description: 'Occupation door objective is to create networks between established and new Swedes. By yrkesdorren, you meet someone with a different background than your own to talk jobs and open the door to new contacts.' },
      { title: 'Språkkraft', tags: ['language'], logo: 'sprakkraft.png', description: 'Language Power reading coach helps you quickly to learn Swedish and start reading news and books selected for you based on a number of selected personal categories and genres.' },
      { title: 'Kiron University', tags: ['education'], logo: 'kiron-university.png', description: 'Kiron provides refugees worldwide with the opportunity to graduate with an accredited university degree, free of charge. Our innovative education model is designed to overcome the obstacles refugees face in accessing education.' },
      { title: '400 contacts', tags: ['employment'], logo: '400-contacts.png', description: '400contacts is a mentoring program with one goal in mind. To help refugees with engineering background get their first skilled job in Sweden.' },
      { title: 'Novare Potential', tags: ['employment'], logo: 'novare-potential.png', description: 'Novare Potential is a new company in the Novare group which, since January 2016, is a recruitment and staffing organisation with the aim of leading new arrivals into the Swedish job market. Today many newcomers are without work at the same time as many companies lack employees with the right competence. We want to change this. Using innovative recruitment methods and a strong Swedish business network, Novare Potential aims to be the bridge that leads new Swedes in to the workplace and enable them to achieve their full potential.' },
      { title: 'Refugees Welcome', tags: ['housing'], logo: 'refugee-welcome.png', description: 'Refugees-welcome.se run by the NGO Refugees Welcome Sweden (org.nr 802497-4514). We are a politically and religiously independent association that started in autumn 2015 with a purpose: to provide more housing for newly arrived refugees throughout Sweden.' },
      { title: 'Welcome to Sweden', tags: ['information'], logo: 'welcome-to-sweden.png', description: 'Welcome to Sweden is an initiative under development that aims to provide information to those who come as refugees or asylum seekers to Sweden to work as a volunteer and to all who want to be involved and make a contribution.' },
      { title: 'Newbie guide to Sweden', tags: ['information'], logo: 'newbie-guide.png', description: 'We are community of people who feel devoted towards the idea of creating a guide for all those brave ones who come to Sweden every year to start a life here. We know that the process of settling in Sweden comes with a bunch of questions. We hope that this guide will offer your guidance and give you the opportunity to bound with other Newbies and Oldbies.' }
    ]*/




    // Create the app modal that we will use later
    $ionicModal.fromTemplateUrl('templates/app.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal
    })

    // Triggered in the app modal to close it
    $scope.closeapp = function () {
      $scope.modal.hide()
    }

    // Open the app modal
    $scope.showapp = function (app) {
      $scope.app = app
      $scope.modal.show()
    }

    // Perform the app action when the user submits the app form
    $scope.doapp = function () {
      $scope.closeapp()
    }
  })

  .controller('CategoriesCtrl', function ($scope, API) {
    API.categories().then(function (res) {
      //console.log('res', res)
    })
  })

  .controller('CategoryCtrl', function ($scope, $state, $stateParams, $ionicScrollDelegate, API) {

    var cat_len = $scope.categories.length,
        index = 0

    for (;index<cat_len;index++) {
        if ( $scope.categories[index].slug===$stateParams.categoryId ){
          break
        }
    }

    $scope.category =  $scope.categories[index]

    $scope.apps = []



    API.projects().then(function (res) {
      $scope.apps = res.data.filter(function (app) {
        //console.log(app);
        return app.tags ? (app.tags.indexOf($scope.category.slug) > -1) : false
      })
    })

    $scope.getScrollPosition = function(){

       var catList = document.getElementById('categoryContainer').childNodes[0],
           catContainer = document.getElementById('categoryContainer'),
           catNavBar = document.getElementById('catNavBar')

       if ($ionicScrollDelegate.$getByHandle('handler').getScrollPosition().top > 350){
          catContainer.style.backgroundColor= '#FFF'
          catList.style.padding = '0'
          catNavBar.style.display = 'block'
       } else {
          catList.style.padding = '18px'
          catNavBar.style.display = 'none'
          catContainer.style.backgroundColor= $scope.category.color
       }
    }

    $scope.swipeLeft = function(){

      if (index<cat_len) {
        var next_category = $scope.categories[index+1]
        $state.go('app.single', {categoryId:next_category.slug})
      }

    }

    $scope.swipeRight = function(){

      if (index>0) {
        var prev_category = $scope.categories[index-1]
        $state.go('app.single', {categoryId:prev_category.slug})
      }

    }
  })
