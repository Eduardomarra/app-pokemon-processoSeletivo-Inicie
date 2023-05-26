import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public search(value: string) {
    this.emmitSearch.emit(value);
  }

}
