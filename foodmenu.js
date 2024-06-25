let input = require("readline-sync");
console.log("Welcome to Santosh Restorant");
console.log("TIME - 9AM to 10PM");
console.log("************************************************************************************************");
console.log();
console.log('1.Monday \n2.Tuesday \n3.Wednesday \n4.Thursday \n5.Friday \n6.Saturday \n7.Sunday')
let n = Number(input.question('Enter your input :'));
if (n===1){
    console.log('1.Breakfast \n2.Lunch \n3.dinner');
    let time = Number(input.question('Enter your input :'));
    if(time === 1){
        console.log('1.Masala dosa \n2.poha \n3.Aloo paratha');
        let choice = Number(input.question('Enter your input :'));
        if(choice ===1){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your pay amount :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancle");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            } else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancle");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        } else if (choice===2){
            console.log('1.Half plate = 125/ -\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    } else{
                        console.log("order cancle");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancle");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        }else if (choice===3){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    } else{
                        console.log("order cancle");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancle");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        }
    
    } else if(time === 2){
        console.log('1.Paneer Tikka \n2.Kadhi Pakora \n3.Tandoori Chicken');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }else{
                            console.log("order cancle");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }else{
                            console.log("order cancele");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        }
    }else if(time === 3){
        console.log('1.Dal Makhani \n2.Chicken Curry \n3.Vegetable Biryani');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }else{
                            console.log("order cancle");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }else{
                            console.log("order cancele");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/ -\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                    
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        }
    }
}if (n===2){
    console.log('1.Breakfast \n2.Lunch \n3.dinner');
    let time = Number(input.question('Enter your input :'));
    if(time === 1){
        console.log('1.Chousela\n2.Farra\n3.Muthiya');
        let choice = Number(input.question('Enter your input :'));
        if(choice ===1){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancle");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            } else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancle");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        } else if (choice===2){
            console.log('1.Half plate = 125/ -\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    } else{
                        console.log("order cancle");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }else if (choice===3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }
    
    } else if(time === 2){
        console.log('1.Chila Bhaji\n2.Kosra Curry\n3.Bara and Chana');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }else if(time === 3){
        console.log('1.Chhattisgarhi Thali\n2.Methi Patran and Roti\n3.Rice Pakoras and Aloo Rassa');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }
}if (n===3){
    console.log("Welcome to Chhattisgarhi cuisine")
    console.log('1.Breakfast\n2.Lunch\n3.dinner');
    let time = Number(input.question('Enter your input :'));
    if(time === 1){
        console.log('1.Chousela\n2.Farra\n3.Muthiya');
        let choice = Number(input.question('Enter your input :'));
        if(choice ===1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            } else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        } else if (choice===2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }else if (choice===3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }
    
    } else if(time === 2){
        console.log('1.Chila Bhaji\n2.Kosra Curry\n3.Bara and Chana');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }else if(time === 3){
        console.log('1.Chhattisgarhi Thali\n2.Methi Patran and Roti\n3.Rice Pakoras and Aloo Rassa');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }
}if (n===4){
    console.log("Welcome to Maharashtra cuisine")
    console.log('1.Breakfast\n2.Lunch\n3.dinner');
    let time = Number(input.question('Enter your input :'));
    if(time === 1){
        console.log('1.Pohay\n2.Misal\n3.Upma');
        let choice = Number(input.question('Enter your input :'));
        if(choice ===1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            } else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        } else if (choice===2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }else if (choice===3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }
    
    } else if(time === 2){
        console.log('1.Misal Pav\n2.Vangyache Bharit\n3.Matki Usal');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }else if(time === 3){
        console.log('1.Bhaat\n2.Chapati\n3.Varan Bhaat');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }
}if (n===5){
    console.log("Welcome to Chinese cuisine")
    console.log('1.Breakfast\n2.Lunch\n3.dinner');
    let time = Number(input.question('Enter your input :'));
    if(time === 1){
        console.log('1.Congee\n2.Steamed buns\n3.Deep fried dough sticks');
        let choice = Number(input.question('Enter your input :'));
        if(choice ===1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            } else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        } else if (choice===2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }else if (choice===3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }
    
    } else if(time === 2){
        console.log('1.Fried rice with shrimp and chicken\n2.Stire fried noodles\n3.Steamed dumplings');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }else if(time === 3){
        console.log('1.Peking duch\n2.Yu Xiang rou si\n3.Sichuhuan hot pot');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }
}if (n===6){
    console.log("Welcome to Odhisha cuisine")
    console.log('1.Breakfast\n2.Lunch\n3.dinner');
    let time = Number(input.question('Enter your input :'));
    if(time === 1){
        console.log('1.Chhena\n2.Pakhala Bhata\n3.Mudhi Mansa');
        let choice = Number(input.question('Enter your input :'));
        if(choice ===1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            } else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        } else if (choice===2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }else if (choice===3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }
    
    } else if(time === 2){
        console.log('1.Dalma\n2.Machha Besara\n3.Sukhua Jhola');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }else if(time === 3){
        console.log('1.Besan chilla\n2.Paneer Bhuji\n3.Mutton curry');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/-\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }
}if (n===7){
    console.log("Welcome to Bengali cuisine")
    console.log('1.Breakfast \n2.Lunch \n3.dinner');
    let time = Number(input.question('Enter your input :'));
    if(time === 1){
        console.log('1.Kachori Sabji \n2.Luchi Aloor Dom \n3.Mishti Doi');
        let choice = Number(input.question('Enter your input :'));
        if(choice ===1){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancle");
                    }
                }
            } else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        } else if (choice===2){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if (plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }else if (choice===3){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 125 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    } else{
                        console.log("order cancle");
                    }
                    
                }
            }else if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancle");
                    }
                }
            }
        }
    
    } else if(time === 2){
        console.log('1.Mustard Fish \n2.Bengal Gram Lentil Curry \n3.Potatoes in Poppy Seed Paste');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }else{
                            console.log("order cancle");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }else{
                            console.log("order cancele");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                console.log("Thank you, Don't forget to give 5 Star");
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        }
    }else if(time === 3){
        console.log('1.Besan chilla \n2.Paneer Bhuji \n3.Mutton curry');
        let choice = Number(input.question('Enter your input :'));
        if(choice == 1){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
                let plate = Number(input.question('Enter your input :'));
                if (plate === 1){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 125){
                        console.log("Order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else if(pay > 125){
                        extra = pay - 125;
                        console.log("you have payed extra you can collect excess amount from the counter");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        rest = 125 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }else{
                            console.log("order cancle");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }
                    }
                }if(plate === 2){
                    let pay = Number(input.question('Enter your input :'));
                    let amount = pay;
                    if(pay === 250){
                        console.log("Order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else if(pay > 250){
                        extra = pay - 250;
                        console.log("you have payed extra you can collect excess amount from the counter");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        rest = 250 - pay;
                        console.log(rest, "= pay the rest amount");
                        let payAgain = Number(input.question('Enter your input :'));
                        if(payAgain === rest){
                            console.log("order placed succesfully");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }else{
                            console.log("order cancele");
                            console.log("Thank you, Don't forget to give 5 Star");
                        }
                    }
                }
        }if(choice === 2){
            console.log('1.Half plate = 125/- \n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }
        }if(choice === 3){
            console.log('1.Half plate = 125/ -\n2.Full plate = 250/-');
            let plate = Number(input.question('Enter your input :'));
            if(plate === 1){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 125){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 125){
                    extra = pay - 125;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }
                }
            }if(plate === 2){
                let pay = Number(input.question('Enter your input :'));
                let amount = pay;
                if(pay === 250){
                    console.log("Order placed succesfully");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else if(pay > 250){
                    extra = pay - 250;
                    console.log("you have payed extra you can collect excess amount from the counter");
                    console.log("Thank you, Don't forget to give 5 Star");
                }else{
                    rest = 250 - pay;
                    console.log(rest, "= pay the rest amount");
                    let payAgain = Number(input.question('Enter your input :'));
                    if(payAgain === rest){
                        console.log("order placed succesfully");
                        console.log("Thank you, Don't forget to give 5 Star");
                    }else{
                        console.log("order cancele");
                    }
                }
            }
        }
    }
}