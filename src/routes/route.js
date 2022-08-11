const express = require('express');
// const myHelper = require('../util/helper')
// const underscore = require('underscore')
// const dbConnect=require('../configure')
// const Entity=require('../movie')
const router = express.Router();
// require('../config.js')
// require('../configure')
// const Movies=require('../Movie')


// router.post('/make', async(req,res) => {
//     const data=new Entity(req.body)
//     const result = await data.save();
//     res.send(result)
// })

// router.get('/movies', async(req,resp) =>{
//     let data=await Entity.find()
//     resp.send(data)
// })
// router.delete('/delete/:_id', async(req,resp) =>{
//     let data=await Entity.deleteOne(req.params)
//     // console.log(req.params)
//     resp.send(data)
// })
// router.put('/update/:_id', async(req,resp) =>{
//     let data=await Entity.updateOne(  
//         req.params,
//         {
//         $set:req.body
//         }
//     )
//     // console.log(req.params)
//     resp.send(data)
// })

// router.get('/search/:key',async(req,resp) => {
    // let key=req.params.key
    // let data=await Entity.find({
    //     "$or":[{"name":{$regex:key}},
    //            {"cast":{$regex:key}}
                        
    // ]
    // })
    // resp.send(data)
// })

let players =
   [
       {
         "name":"datta" ,
         "age":18,
         "sport":"cricket",
         "run":2001
       },
       {
        "name":"manish" ,
        "age":25,
        "sport":"footbal",
        "goal":2001
       },
       {
        "name":"rahul" ,
        "age":24,
        "sport":"tennis",
        "hit":2001}
   ]

   router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});

// let playerbooking=[
//     {
//         bookingid: 1,
//          sportId: 2,
//          centerId:3,
//         type: "private",
//         slot: 16286598000000,
//         bookedOn: "31/08/2021",
//         bookedFor: "01/09/2021"
//        },
//        {  
//        bookingid: 2,
//         sportId: 2,
//         centerId:3,
//        type: "private",
//        slot: 16286598000000,
//        bookedOn: "31/08/2021",
//        bookedFor: "01/09/2021"
//       }
       
// ]

router.post('/person/:votingage',(req,res) =>{
      let age=req.params.votingage
      console.log(age)
      let newarr=[]
      for(let i=0;i<person.length;i++){
        let per=person[i]
        if(age>=18 && per.age>=18){
            per.votingstatus=true
            newarr.push(per)
        }
      }
//    let pla= req.body
//    for(let i =0;i<players.length;i++){
//     player=players[i]
//     if(player.name==pla.name){
//         return res.send("Plaese provid Unic name::")
        
//     }
//    }
//    players.push(pla)
   res.send(newarr)
})
// router.post('/player/:playername/booking/:bookingid',(req,res) =>{
// //    console.log(req.params)
//    let flag=false
//    for(let i=0;i<players.length;i++){
//     let pla=players[i]
//     if(pla.name===req.params.playername){
//         flag=true
//         break;
//         // return res.send("Player Is not exit in player's")
//     }
//    }
//    for(let i=0;i<playerbooking.length;i++){
//     let ele=playerbooking[i]
//     if(ele.bookingid==req.params.bookingid){
//         flag=true
//         break;
//         // return res.send("Already Booked!!!!")
//     }
//    }
//    if(flag==true){
//     return res.send("housefull")
//    }
//    else{
//     let book=req.body
//     playerbooking.push(book)
//     res.send(playerbooking)
//    }
   
//  })

// router.get('/new',async function(req,res){
// let data= await dbConnect()
// let items= await data.find().toArray()
// let name=req.query.name
// let date=req.query.date
// for(let i=0;i<items.length;i++){
//     let item=items[i]
// }
// // const s=item.filter(ele => ele.name==name && ele.date==date)
// // res.send(s)
// // })
// // router.get('/test-me', function (req, res) {
// //     myHelper.printDate()
// //     myHelper.getCurrentMonth()
// //     myHelper.getCohortData()
// //     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
// //     console.log('The first element received from underscope function is '+firstElement)
// //     res.send('My first ever api!')
// // });

// // router.get("/movies/:indexNumber", function(req, res){
// //     const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
// //     console.log(req.params.indexNumber)
// //     let movieIndex = req.params.indexNumber
// //     //check index value. less than 0 or greater than array (length - 1) are not valid
// //     if(movieIndex<0 || movieIndex>=movies.length) {
// //         //if the index is invalid send an error message
// //         return res.send('The index value is not correct, Please check the it')
// //     }

// //     //if the index was valid send the movie at that index in response
// //     let requiredMovie = movies[movieIndex]
// //     res.send(requiredMovie)
// // })

// // router.get("/shoes", function(req, res){
// //     let queryParams = req.query
// //     let brand = queryParams.brand
// //     res.send("dummy response")
// // })

// // // uses query params
// // router.get('/candidates', function(req, res){
// //     console.log('Query paramters for this request are '+JSON.stringify(req.query))
// //     let gender = req.query.gender
// //     let state = req.query.state
// //     let district = req.query.district
// //     console.log('State is '+state)
// //     console.log('Gender is '+gender)
// //     console.log('District is '+district)
// //     let candidates = ['Akash','Suman']
// //     res.send(candidates)
// // })

// // // use path param
// // router.get('/candidates/:canidatesName', function(req, res){
// //     console.log('The request objects is '+ JSON.stringify(req.params))
// //     console.log('Candidates name is '+req.params.canidatesName)
// //     res.send('Done')
// // })

// // router.get("/films", function(req, res){
// //     const films = [ {
// //         "id": 1,
// //         "name": "The Shining"
// //        }, {
// //         "id": 2,
// //         "name": "Incendies"
// //        }, {
// //         "id": 3,
// //         "name": "Rang de Basanti"
// //        }, {
// //         "id": 4,
// //         "name": "Finding Nemo"
// //        }]
// //        //send all the films
// //       res.send(films) 
// // })

// // router.get("/films/:filmId", function(req, res){
// //     const films = [ {
// //         "id": 1,
// //         "name": "The Shining"
// //        }, {
// //         "id": 2,
// //         "name": "Incendies"
// //        }, {
// //         "id": 3,
// //         "name": "Rang de Basanti"
// //        }, {
// //         "id": 4,
// //         "name": "Finding Nemo"
// //        }]

// //        let filmId = req.params.filmId

// //        //iterate all the films
// //        //search for a film whose id matches with the id recevied in request
// //        for(let i = 0; i < films.length; i++){
// //            let film = films[i]
// //            if(film.id == filmId) {
// //                //if there is a match return the response from here
// //                return res.send(film)
// //            }
// //        }

// //        //if there is no match give an error response
// //        res.send("The film id doesn't match any movie")
// // })

// router.get('/sol1',(req,res) => {
//     let arr=[1,2,3,4,5]
//     let arr2=[1,2,3,5]
//     let sumof=0
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
//     }
//     for(let i=0;i<arr2.length;i++){
//     sumof=sumof+arr2[i]
//     }
//     let missingnumbers=sum-sumof
    
//     res.send({missingnumber:missingnumbers})
// })
// router.get('/sol2',(req,res) => {
//     let arr=[33,34,35,37,38]
//     let arr2=[33,34,35,36,37,38]
//     let sumof=0
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
//     }
//     for(let i=0;i<arr2.length;i++){
//     sumof=sumof+arr2[i]
//     }
//     let missingnumbers=sumof-sum
    
//     res.send({missingnumber:missingnumbers})
// })

module.exports = router;
// adding this comment for no reason