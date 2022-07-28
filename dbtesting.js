

db.myapp.insertMany( [
      { item: "Electronics", roll_id: 00012 },
      {  item: "TVs & Appliances", roll_id: 00013 },
      {  item: "Home & Furniture", roll_id: 00014 },
      {  item: "Sports, Books & More", roll_id: 00015 },
      {  item: "Flights", roll_id: 00016 },
      {  item: "Offer Zone", roll_id: 00017 },
      {  item: "Best Offers", roll_id:00017 },

   ] )



   db.college.aggregate([
    {$lookup:{
      from:"myapp",
      localField:"roll_id",
      foreignField:"roll_id",
      as :  "collectom"}}])





      let collections = await productschema.aggregate([{
                $lookup: {
                    from: "add_to_carts",
                    localField: "product_id",
                    foreignField: "product_detelis.Product_id",
                    as: "add_to_pay"
                }
            }])




            {
    "_id": "62da6d9c486d4c860162d977",
    "ItemName": "Mobiles",
    "ItemPrice": 2000,
    "Number_of_Item": 6,
    "product_id": "000000000012",
    "Item_image": "image2.jpg",
    "add_to_pay": [
        {
            "_id": "62dba96d72f2317def767b70",
            "Email_id": "divakar@gmail.com",
            "product_detelis": {
                "Product_id": "000000000012",
                "size": "mideam",
                "color": "black"
            },
            "__v": 0,
            "number_item": 3
        }
    ]
}