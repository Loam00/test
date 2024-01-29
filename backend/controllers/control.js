const Model = require('../models/model')

exports.getStores = async (req, res) => {
    try {
        const stores = await Model.getStores();

        res.status(200).json( stores[0] );
    } catch (err) {
        
    }
}

exports.getCustomers = async (req, res) => {

    try {
        const customers = await Model.getCustomers(req.params.minimumTotal, req.params.store_id)

        res.status(200).json( customers[0] )            
    } catch (err) {
        
    }
}