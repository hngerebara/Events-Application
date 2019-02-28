import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents() {
    return this.EVENTS;
  }

  getEvent(val){
    console.log(val, "==========val")
  }

  EVENTS = [
    {"id":1,"name":"Namfix","date":"8/30/2018","time":"11:39 PM","price":"$6.19","location":"Prinza"},
    {"id":2,"name":"Subin","date":"4/13/2018","time":"7:09 AM","price":"$4.38","location":"Changsha"},
    {"id":3,"name":"Flexidy","date":"11/13/2018","time":"1:47 AM","price":"$7.42","location":"Boulaouane"},
    {"id":4,"name":"Voyatouch","date":"8/9/2018","time":"4:01 PM","price":"$3.79","location":"La Cruz de Taratara"},
    {"id":5,"name":"Zoolab","date":"5/20/2018","time":"8:23 AM","price":"$6.57","location":"Cácota"},
    {"id":6,"name":"Bamity","date":"2/9/2019","time":"8:28 PM","price":"$2.11","location":"Pesagen"},
    {"id":7,"name":"Stronghold","date":"11/19/2018","time":"3:23 PM","price":"$6.53","location":"Krebetkrajan"},
    {"id":8,"name":"Vagram","date":"4/19/2018","time":"1:39 PM","price":"$4.61","location":"Kampot"},
    {"id":9,"name":"Otcom","date":"12/23/2018","time":"3:52 PM","price":"$2.41","location":"Lampa"},
    {"id":10,"name":"Fix San","date":"7/11/2018","time":"4:20 PM","price":"$0.40","location":"Kabulusan"}
  ]

}
