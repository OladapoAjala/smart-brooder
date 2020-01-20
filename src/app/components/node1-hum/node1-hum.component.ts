import { ToastrService } from './../../service/toastr.service';
import { Component, OnInit } from '@angular/core';
import { Paho } from 'ng2-mqtt/mqttws31'

@Component({
  selector: 'app-node1-hum',
  templateUrl: './node1-hum.component.html',
  styleUrls: ['./node1-hum.component.css']
})
export class Node1HumComponent implements OnInit {

  dataSource = {
    "chart": {
        "caption": "",
        "lowerLimit": "0",
        "upperLimit": "100",
        "showValue": "0",
        "numberSuffix": "%",
        "theme": "fusion",
        "bgcolor": '#191f26',
        "showToolTip": "1",
        "showBorder":'0',
        "baseFontColor": "#fff",
        "baseFontWeight": "100",
        "chartBottomMargin": "40",
        "baseValueColor": "#fff"
    },
    "colorRange": {
        "color": [{
            "minValue": "0",
            "maxValue": "50",
            "code": "#F2726F"
        }, {
            "minValue": "50",
            "maxValue": "75",
            "code": "#FFC533"
        }, {
            "minValue": "75",
            "maxValue": "100",
            "code": "#62B58F"
        }]
    },
    "dials": {
          "dial": [{
              "color": "#fff",
              "value": ""
          }]
    }
  }

  // Mqtt data properties
  client;

  constructor(private toast: ToastrService) { 
    this.client = new Paho.MQTT.Client('test.mosquitto.org', 8081, 'njkwnekdn');
  }

  ngOnInit() {

    this.onMessage();
    // call back handler for when a connection is lost
    this.dataSource.chart.caption = this.dataSource.dials.dial[0].value + " " + this.dataSource.chart.numberSuffix;
    this.onConnectionLost();

    this.client.connect({
      onSuccess: this.onConnected.bind(this),
      useSSL: true
    });
  }


  // when a client connects, make a subscription '123456' and send a message using the sendMessage method
  onConnected() {
    console.log("Connected");
    this.toast.success('Humidity Sensor is now online');
    this.client.subscribe("/agrilab/node1/humidity");
  }

  // // Initialiaze Paho message and Send a message
  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = "/agrilab/node1/humidity";
    this.client.send(packet);
  }

  // // Log something when a message is recived
  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      // console.log('Message arrived : ' + message.payloadString);
        // this.toast.success('Humidity reading: ' + message.payloadString + this.dataSource.chart.numberSuffix);
        this.dataSource.dials.dial[0].value = message.payloadString;
        this.dataSource.chart.caption = this.dataSource.dials.dial[0].value + " " + this.dataSource.chart.numberSuffix;
    };
  }

  // // Log something when the connection is lost
  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
    // console.log('Connection lost : ' + JSON.stringify(responseObject));
    this.toast.warning('Humidity Sensor is now offline')
    };
  }
}
