const trims=function(){
   let c="This is Function up"
   console.log(c.trim())
}
trims()
const lower=function(){
    let b="This is Function up"
    console.log(b.toLowerCase())
}
lower()
const upper=function(){
    let d="This is Function up"
    console.log(d.toUpperCase())
}
upper()

module.exports.strims=trims
module.exports.lowercase=lower
module.exports.uppercase=upper