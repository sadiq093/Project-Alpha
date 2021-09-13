function myCalculator() {
    var product = document.getElementById("product-name").innerText;
    var quantity = document.getElementById("quantity").value;
    var delivery = document.getElementById("delivery").value;
    var price = document.getElementById("price").innerHTML = 3000;
    var myDelivery = ["Normal - 7 to 10 hrs", "Premium - 4 to 6 hrs", "Express - 1 to 3 hrs"];
    var myMessage = "You have selected "
    var updatedPrice = grandPrice();

    if (delivery === myDelivery[0]) { delivery = 2;
        return delivery;
        
    } else if (delivery === myDelivery[1]) { delivery = 3
        return delivery;
        
    } else { delivery = 3; 
    };
     
    function grandPrice() {
        let result = delivery * quantity  * price;
        return result;
       }
       alert(myMessage + " " + quantity + " " + product + " " + "at total price of " + updatedPrice + " " + "Click OK and enter your email to continue with your booking by mail.");
       prompt("Enter your Email to proceed", " ");

}

    function myFunction() {
        alert("Sign In below to proceed");
        let mySurprise = document.getElementsByClassName("form-container").innerHTML;

    }
    