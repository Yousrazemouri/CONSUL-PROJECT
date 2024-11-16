import { Component, OnInit } from '@angular/core';

import { Client } from '../../models/client.model';   // Correct relative path
import { ClientService } from '../../Services/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',  // Correct relative path
  styleUrls: ['./client-list.component.css']   // Correct relative path for styles
})

export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id).subscribe(() => {
      this.clients = this.clients.filter(client => client.id !== id);
    });
  }
}

