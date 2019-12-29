import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentBinding';

  serverElements = [{ type:'server', name: 'Testerver', content:'Just a test' }];

  onServerAdded(serverData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  
  onBluePrintAdded(bluPrintData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluPrintData.serverName,
      content: bluPrintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = "Changed!";
  }
}
