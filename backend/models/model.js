const db = require('../database/database');

//è importante suddividere i repository per entità recuperata dal database
// esempio, una classe per i customer e una classe per gli stores, sono due entità differenti
module.exports = class Model {
    static getStores() {
        return db.execute(
            'SELECT store.store_id, first_name, last_name, email FROM store INNER JOIN staff ON store.store_id = staff.store_id;', []
        )
    }

    //Esempio importante su come gestire questo tipo di query
    //SELECT s.store_id,c.first_name,c.last_name, SUM(p.amount) FROM store AS s
    //INNER JOIN customer AS c ON s.store_id = c.store_id
    //INNER JOIN payment AS p ON p.customer_id = c.customer_id
    //WHERE s.store_id = ?
    //GROUP BY c.customer_id HAVING SUM(p.amount) > ?
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