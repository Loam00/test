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
