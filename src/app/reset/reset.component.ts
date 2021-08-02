import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from 'src/store/app.actions';
import { InitialState } from 'src/store/app.reducer';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetComponent implements OnInit {
  clicks: number;
  constructor(private store: Store<{ contadorReducer: InitialState }>) {
    this.clicks = 0;
  }

  ngOnInit(): void {
    this.store.select('contadorReducer').subscribe((r) => {
      this.clicks = r.click;
    });
  }

  reset() {
    this.store.dispatch(reset());
  }
}
