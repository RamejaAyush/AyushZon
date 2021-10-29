import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  AuthService = this.authService;
  ItemService = this.itemService;

  constructor(
    private authService: AuthService,
    private itemService: ItemsService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  goToAdd() {
    this.route.navigate(['add-item']);
  }
}
