/* For this project, you will build a message generator program. Every time a user runs a program, 
they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, 
like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random,
 the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax 
so far to build the program and customize it to your liking.*/

 const message = {
         _names: [],
         _message1: [],
         _message2: [],
         _message3: [],

         get names() {
             return this._names 
         },
         get message1(){
             return this._message1
         },
         get message2(){
             return this._message2
         },
         get message3(){
             return this._message3
         },
         set names(named){
             // add name to array
             this._names.push(named) 
         },
         set message1(messaged1){
             this._message1.push(messaged1)
         },
         set message2(messaged2){
             this._message2.push(messaged2)
         },
         set message3(messaged3){
             this._message3.push(messaged3)
 
           }
 }
 // creating Random generator for the length of the my arrays in message  
// I forgot to use ( after the Math.random which completely messes me up since i skipped all the way to the end of the projected. thats why the steps are important!!!)
 const randomGenerator = (arr) => {
    let element = Math.floor(Math.random() * arr.length)
    return arr[element]
 }
// create final message using randomGenerator function to select elements from the four arrays in message object
 const finalMessage = () => {
     let name = randomGenerator(message.names)
     let first = randomGenerator(message.message1)
     let second = randomGenerator(message.message2)
     let third = randomGenerator(message.message3)

     return name + ', ' + first + ' ' + second + ' ' + third;

 }

 message.names = "Donell"
 message.names = "Maddie"
 message.names = "Thibualt"
 message.names = "Beau"
 message.names = "Rose"
 message.names = "Rugger"
 message.message1 = "This is about your"
 message.message1 = "I hope you haven't"
 message.message1 = "I'm sick of this"
 message.message1 = "We can get you"
 message.message2 = "kids they are"
 message.message2 = "when are you going to"
 message.message2 = "this is amazing"
 message.message3 = "you need to leave now"
 message.message3 = "giving up"
 message.message3 = "I hate this part"
 
 console.log(finalMessage())