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
  serverCreated = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Default value';
  servers = ['Testserver', 'Testserver 2'];
  showDetails = false;

  constructor () {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 5000);
  }

  ngOnInit () {
  }

  onCreateServer (event: Event) {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created, server name is ${this.serverName}`;
  }

  onUpdateServerName (event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  onToggleDetails (event) {
    this.showDetails = !this.showDetails;
  }

}
