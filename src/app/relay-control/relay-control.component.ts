import { Component } from '@angular/core';
import { RelayService } from '../relay.service';

@Component({
  selector: 'app-relay-control',
  templateUrl: './relay-control.component.html',
  styleUrls: ['./relay-control.component.css']
})
export class RelayControlComponent {
  constructor(private relayService: RelayService) { }

  toggleRelay(relay: number, state: boolean) {
    this.relayService.toggleRelay(relay, state).subscribe(response => {
      console.log(response);
    });
  }
}
