import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InitialState } from 'src/store/app.reducer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cantidad: number;
  constructor(private store: Store<{ contadorReducer: InitialState }>) {
    this.cantidad = 0;
  }

  ngOnInit(): void {
    this.store.select('contadorReducer').subscribe((r) => {
      // console.log(r.contador);
      // console.log(r);
      this.cantidad = r.contador;
      // console.log(r);
    });
  }
}
