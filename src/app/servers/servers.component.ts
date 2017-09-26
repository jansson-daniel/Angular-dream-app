import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No server was created';
  serverName = 'Default value';

  constructor () {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 5000);
  }

  ngOnInit () {
  }

  onCreateServer (event: Event) {
    this.serverCreationStatus = `Server was created, server name is ${this.serverName}`;
  }

  onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
