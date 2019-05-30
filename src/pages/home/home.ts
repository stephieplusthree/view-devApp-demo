import { Component } from '@angular/core';
// step 28
import { NavController, Platform } from 'ionic-angular';
// step 10 and step 25
import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid, SpeechRecognitionListeningOptionsIOS } from '@ionic-native/speech-recognition/ngx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  // step 22
  speechList: Array<string> = [];
  // step 26
  androidOptions: SpeechRecognitionListeningOptionsAndroid;
  androidOptions: SpeechRecognitionListeningOptionsIOS;
  
  // step 10, step 23 and step 28
  constructor(private platform: Platform, private speech: SpeechRecognition, public navCtrl: NavController) {

  }
  
  // step 20
  listenForSpeech():void {
    
    this.androidOptions = {
      prompt: 'Speak into your phone!'
    }
    
    // step 28
    this.iosOptions = {
      language: 'en-US'
    }
    
    // step 28
    if (this.platform.is('android')){
      this.speech.startlistening(this.androidOptions).subscribe(data => speechList = data, error => console.log(error));
    }
    else if(this.platform.is('ios')){
      this.speech.startlistening(this.iosOptions).subscribe(data => speechList = data, error => console.log(error));
    }
  
  // step 17
  async getSupportedLanguages():Promise<Array<string>>{
    try {
      const languages = await.this.speech.getSupportedLanguages();
      console.log(languages);
      return languages;
    }
    catch(e){
      console.error(e);
    }
  }
  
  
  // step 15
  async hasPermission():Promise<boolean> {
    try{
      const permission = await this.speech.hasPermission();
      console.log(permission);
      return permission;
    }
    catch(e) {
      console.error(e);
    }
  }
  
  // step 13
  async getPermission():Promise<void> {
    try{
      const permission = await this.speech.requestPermission();
      console.log(permission);
      return permission;
    }
    catch(e) {
      console.log(e);
    }
  }
  
  // step 9
  async isSpeechSupported():Promise<boolean> {
    // step 11
    const isAvailable = await this.speech.isRecognitionAvailable();
    console.log(isAvailable);
    return isAvailable;
    
  }
  
}
