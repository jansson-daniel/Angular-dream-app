import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true;
  serverCreationStatus : string = 'No server was created';

  constructor () {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit () {
  }

  onCreateServer (event) {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName (event) {
    console.log(event.target.value);
  }

}
