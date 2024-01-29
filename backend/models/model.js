const db = require('../database/database');

module.exports = class Model {

    static getStores() {
        return db.execute(
            'SELECT store.store_id, first_name, last_name, email FROM store INNER JOIN staff ON store.store_id = staff.store_id;', []
        )
    }

    static getCustomers(minimumTotal, store_id) {
        return db.execute(
            `SELECT * 
            FROM (SELECT * FROM customer WHERE store_id = ?) AS store_customers
            NATURAL JOIN 
            (SELECT * FROM (SELECT SUM(amount) as amount, customer_id FROM payment GROUP BY customer_id) as sum
            WHERE amount > ?) as somma;`, [store_id, minimumTotal]
        )
    }
}