import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Data, Stores } from 'src/app/Model/model';
import { PippoService } from 'src/app/services/pippo.service';

interface formValue {
  minimumTotal: number,
  storeNumber: number
}

//body contiene le logiche dei componenti, ma è una pagina, di solito è meglio scorporare le due logiche
//esempio: il componente Body lo potresti usare per gestire la pagina e le sue logiche interne di caricamento dati
//scorporerei però componenti come la tabella
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm;

  form: FormGroup;
  customers: Data[];
  stores: Stores[];
  searched = false;
  index = 0;
  store_id = 0;

  constructor( private pippoService: PippoService) {}

  ngOnInit() {
    this.form = this.createFormGroup();
    this.getStores().then( (response) => {
      this.stores = response;
      this.stores.forEach( store => {
        store.isChecked = true;
      })
    })
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      minimumTotal: new FormControl(""),
      storeNumber: new FormControl("")
    })
  }

  getStores(): Promise<Stores[]> {
    return this.pippoService.getStores();
  }

  search(formValue: formValue) {
    this.searched = true;
    this.pippoService.getData(formValue.minimumTotal, this.store_id).then( (response) => {
      this.customers = response;
    });

    this.createFormGroup().reset();
    this.formDirective.resetForm();
  }

  isClicked(storeNumber: number) {
    if (this.index != storeNumber) {
      this.stores[this.index].isChecked = false;
    }

    this.stores[storeNumber].isChecked = true;
    this.index = storeNumber;

    this.store_id = storeNumber + 1;
  }

}
