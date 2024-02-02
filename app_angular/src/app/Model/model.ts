//Se volessimo essere puntigliosi potremmo separare anche i modelli frontend in file diversi
//ma questa è più filosofia che altro, di solito non lo fa nessuno a front end
export interface Data {
  customer_id: number,
  store_id: number,
  first_name: string,
  last_name: string,
  email: string,
  address_id: number,
  active: number,
  create_date: string,
  last_update: string,
  amount: number
}

export interface Stores {
  store_id: number,
  first_name: string,
  last_name: string,
  email: string,
  isChecked: boolean
}
