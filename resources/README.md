<!--step 1: install ionic, cordova, angular-->

<!--step 2: install speechrecognition for android-->
<!--ionic cordova plugin add cordova-plugin-speechrecognition --save-->
<!--npm install @ionic-native/speech-recognition --save-->

<!--step 3: run android device-->
<!--ionic cordova run android -l -->

<!--step 4: app.moduel.ts-->
<!--import speechrecognition, add speechrecognition to providers-->

<!--step 5: home.html-->
<!--change title-->

<!--step 6: home.html-->
<!--add color to button-->

<!--step 7: home.html-->
<!--add button in ion-content, set the text to say ...is speech supported?, set a click event named.. isSpeechSupported-->

<!--step 8: ts.config.json-->
<!--change the target to "es6"-->

<!--step 9: home.ts-->
<!--write a async function named isSpeechSupported which will return a promise boolean-->

<!--step 10: home.ts-->
<!--import SpeechRecognition and add it to constructor-->

<!--step 11: home.ts-->
<!--isAvailable will become whatever we get from this promise...-->

<!--step 12: home.html-->
<!--add button named getPermission-->

<!--step 13: home.ts-->
<!--create a async function named getPermissionthat will return a promise void, add coding to try and catch blocks to see whether there is any errors. To see the result ... permission is equal to this.speech.request.submission then we can logout permission. Log out any errors. Go to browser and click on getPermission button in home.html, the console should ask the user if the user wants to give permission.-->

<!--step 14: home.html-->
<!--add button with a click event named hasPermission-->

<!--step 15: home.ts-->
<!--create a async function named hasPermission that returns a promise that will be a boolean, put it in a try-catch block. Try to get the permission to all the reset cons permission is equal to a reuslt from speech.hasPermission. Catch any errors if you have any. -->

<!--step 16: homehtml-->
<!--add button with a click event named getSupportedLanguages-->

<!--step 17: home.ts-->
<!--create a async function named getSupportedLanguages that is going to be an array of strings, try await.this.speech.getSupportedLanguages, resolve that two languages and log out the languages to the console, and return. -->

<!--step 18: home.html-->
<!--click on button getSupportedLanguages and you should get a return of a array of languages in your browser. -->

<!--step 19: home.html-->
<!--add button with a click event named listenForSpeech-->

<!--step 20: home.ts-->
<!--create a function named listenForSpeech that will return a void, this.speech.startlistening, subscribe to that, and on the data stream console.log out, console.log any errors.  -->

<!--step 21: press button and talk to phone and see if it comes up in browser-->

<!--step 22: home.ts-->
<!--make a data object named speechList which will be a array of strings. 

<!--step 23: home.ts -->
<!--make speechless equal to the data on the listenForSpeech function. -->-->

<!--step 24: home.html-->
<!--make a card with a card content, use NgFor and say let speech of speech list and inside the content make a paragraph tag, put the speech results in the p tag. -->

<!--step 25: home.ts-->
<!--import SpeechRecognitionListeningOptionsAndroid and SpeechRecognitionListeningOptionsIOS-->

<!--step 26: home.ts-->
<!--make a androidOptions variable that is of type SpeechRecognitionListeningOptionsAndroid-->

<!--step 27: home.ts-->
<!--within the listenForSpeechmethod .. this.androidOptions is equal to language and use as default-->


<!--step 28: home.ts-->
<!--make languagein us and lets pretend it is not default, import the platform from ionic angular, instatiated here in our constructor. Write a if statement into the listenForSpeech method.. if the platform is android we can pass the startlistening funtion with the Android options else if the platform is iOS we can pass along the iOS options-->


These are Cordova resources. You can replace icon.png and splash.png and run
`ionic cordova resources` to generate custom icons and splash screens for your
app. See `ionic cordova resources --help` for details.

Cordova reference documentation:

- Icons: https://cordova.apache.org/docs/en/latest/config_ref/images.html
- Splash Screens: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/
