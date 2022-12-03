// I seprated the call-back function in this services folder with the router second args (callback fn) for better project structer and cleaner code reading


exports.homeRoutes = (req,res) => {
    res.render('index')
}

exports.addUserRoutes = (req, res) => {
    res.render('add_user')
}

exports.updateUser = (req, res) => {
    res.render('update_user')
}







// route.get('/',((req,res)=> {
//     // res.send('Crud Application')
//     res.render('index') // to need to specify the filetype as we initilized the view engine with this file extension
// }))

// // route for add_user
// route.get('/add-user',((req,res)=> {
//     // res.send('Crud Application')
//     res.render('add_user') // to need to specify the filetype as we initilized the view engine with this file extension
// }))
// // route for update_user
// route.get('/update_user',((req,res)=> {
//     // res.send('Crud Application')
//     res.render('update_user') // to need to specify the filetype as we initilized the view engine with this file extension
// }))

