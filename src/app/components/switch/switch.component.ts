import { ToastrService } from './../../service/toastr.service';
import { Component, OnInit } from '@angular/core';
import { Paho } from 'ng2-mqtt/mqttws31';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  isChecked: boolean;
  isOnline;
  controlSignal;
  // convert;
  
  // Mqtt data properties
  client: any;

  constructor(private toast: ToastrService) {
      // Initialise the Mqtt client
      this.client = new Paho.MQTT.Client('test.mosquitto.org', 8081, 'jbjhbdhj');
   }

  ngOnInit() {
    this.onMessage();
    // call back handler for when a connection is lost
    this.onConnectionLost();

    this.client.connect({
      onSuccess: this.onConnected.bind(this),
      useSSL: true
    });
  }

  // when a client connects, make a subscription '123456' and send a message using the sendMessage method
  onConnected() {
    this.toast.success('The switch is active');
    this.client.subscribe("/agrilab/switch");
    this.isOnline = 0;
  }

  // Initialiaze Paho message and Send a message
  sendMessage(message: string) {
    let packet = new Paho.MQTT.Message(message);
    packet.destinationName = "/agrilab/switch";
    this.client.send(packet);
  }

  // Log something when a message is recived
  onMessage() {
    this.client.onMessageArrived = (message: Paho.MQTT.Message) => {
      (message.payloadString === "1") ? this.toast.success('Heater ON ') : this.toast.error('Heater OFF ')
      this.isOnline = +message.payloadString;
    };
  }

  // Log something when the connection is lost
  onConnectionLost() {
    this.client.onConnectionLost = (responseObject: Object) => {
      this.toast.warning('The Switch is not active')
      this.isOnline = 0;
    };
  }

  handleClickEventForOnInitialState() {
    if (this.isOnline === 1) {
      this.isOnline = this.isOnline - 1;
      this.toast.error('The devivce is now off');
    }else{
      this.toast.warning('There is an issue with the device.The iot thermometer cannot toggle Please ckeck to see that the hardware is coneected properly');
      this.isOnline = 1;
    }
    this.controlSignal = this.isOnline.toString()
    console.log(this.controlSignal)
    this.sendMessage(this.controlSignal)
  }

  handleClickEventForOffInitialState() {
    if (this.isOnline === 0) {
      this.isOnline = this.isOnline + 1;
      this.toast.success('The devivce is now on');
    }else {
      this.toast.warning('There is an issue with the device.The iot thermometer cannot toggle Please ckeck to see that the hardware is coneected properly');
      this.isOnline = 0;
    }
    this.controlSignal = this.isOnline.toString()
    console.log(this.controlSignal)
    this.sendMessage(this.controlSignal)
  }

}
