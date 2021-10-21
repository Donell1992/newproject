/* For this project, you will build a message generator program. Every time a user runs a program, 
they should get a new, randomized output. You’re welcome to take the project in a couple of different forms, 
like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random,
 the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax 
so far to build the program and customize it to your liking.*/

 const message() {
     return {
         _names: [],
         _messages1: [],
         _messagea2: [],
         _messagea3: [],

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

 }