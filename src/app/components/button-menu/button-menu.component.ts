import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.css']
})
export class ButtonMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() showSidebar: boolean = false;
  @Output() situationSidebar = new EventEmitter();

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    this.situationSidebar.emit(this.showSidebar);
  }

}
