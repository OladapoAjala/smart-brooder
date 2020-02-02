import { ToastrService } from './../../service/toastr.service';
import { Component, OnInit } from '@angular/core';
import { Paho } from 'ng2-mqtt/mqttws31'


@Component({
  selector: 'app-node1-temp',
  templateUrl: './node1-temp.component.html',
  styleUrls: ['./node1-temp.component.css']
})
export class Node1TempComponent implements OnInit {

  dataSource = {
    "chart": {
      "caption": "",
      "lowerlimit": "0",
      "upperlimit": "100",
      "numbersuffix": "°C",
      "thmfillcolor": "#008ee4",
      "showgaugeborder": "1",
      "gaugebordercolor": "#fff",
      "gaugeborderthickness": "2",
      // "plottooltext": "Temperature: <b>$datavalue</b> ",
      "theme": "fusion",
      "bgColor": "#191f26",
      "baseFontColor": "#fff",
      "baseFontWeight": "100",
      "chartBottomMargin": "5",
      "showValue": "0"
    },
    "value": ""
  };

  client;

  constructor(private toast: ToastrService) {
    //  Initialise the Mqtt client
    this.client = new Paho.MQTT.Client('test.mosquitto.org', 8081, 'bbdwbbdw');
   }

  ngOnInit() {
    this.onMessage();
    this.dataSource.chart.caption = this.dataSource.value + " " + this.dataSource.chart.numbersuffix;
    // call back handler for when a connection is lost
    this.onConnectionLost();
    
    this.client.connect({
      onSuccess: this.onConnected.bind(this),
      useSSL: true
    });
  }

   // when a client connects, make a subscription '123456' and send a message using the sendMessage method
   onConnected() {
    this.toast.success('Temperature Sensor 1 is now online');
    this.client.subscribe("/agrilab/node1/temperature");
  }

  // Initialiaze Paho message and Send a message
  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = "/agrilab/node1/temperature";
    this.client.send(packet);
  }

  // Log something when a message is recived
  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
        // this.toast.success('Temperature Reading is: ' + message.payloadString + this.dataSource.chart.numbersuffix);
        this.dataSource.value = message.payloadString;
        // console.log(message.payloadString)
        this.dataSource.chart.caption = this.dataSource.value + " " + this.dataSource.chart.numbersuffix;
    };
  }

  // // Log something when the connection is lost
  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      // console.log('Connection lost : ' + JSON.stringify(responseObject));
      this.toast.warning('Temperature Sensor 1 is now offline')
    };
  }

}
