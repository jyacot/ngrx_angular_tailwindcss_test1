import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from 'src/store/app.actions';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss'],
})
export class ConfiguratorComponent implements OnInit {
  constructor(private store: Store<{ contador: number }>) {}

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
