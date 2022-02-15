let sentenceStarter = ["Remember that", "Hey don't forget to", "The best way to succeed is to"];
let sentenceFinisher1 = ["small, daily improvements amount to exponential, long term improvements.", "when you feel like quitting... that's when the real work starts.", "consistency is key."]
let sentenceFinisher2 = ["invest in yourself.", "be the change you want to see.", "make your bed in the morning."]
let sentenceFinisher3 = ["visualise your goals, meditate on your goals, work on your goals.", "put in the work, daily.", "create a roadmap for success and then stick to it."]

let messageCreator = () => {
    let randStarter = sentenceStarter[Math.floor(Math.random()*3)];
    let randFinisher1 = sentenceFinisher1[Math.floor(Math.random()*3)];
    let randFinisher2 = sentenceFinisher2[Math.floor(Math.random()*3)];
    let randFinisher3 = sentenceFinisher3[Math.floor(Math.random()*3)];
    
    for (i = 0; i <= randStarter.length; i++) {
        if (randStarter === "Remember that") {
            return `${randStarter} ${randFinisher1}`
        } else if (randStarter === "Hey don't forget to") {
            return `${randStarter} ${randFinisher2}`
        } else if (randStarter === "The best way to succeed is to") {
            return `${randStarter} ${randFinisher3}`
        }
    }
    
    //console.log(randStarter);
}

console.log(messageCreator());