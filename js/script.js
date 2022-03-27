// let price = 500;
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
};

window.onscroll = () => {
	menu.classList.remove("fa-times");
	navbar.classList.remove("active");
};




let price, crust_price, topping_price;
let total = 0;
function Obtainpizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;

}

$(document).ready(function () {
    $("#proceed").click(function () {
        $("#proceed").hide();
        $("#information").hide();
        $("#order-summary").slideDown(1000);
    });
    $("#proceed").click(function (event){
        let pName = $("#flavor option:selected").val();
        let pSize = $("#size option:selected").val();
        let pCrust = $("#crust option:selected").val();
        let pTopping = $("input[type='radio'][name='topping']:checked").val();
        console.log(pTopping)
        
        switch (pSize) {
            case "0":
                price = 0;
                break;
            case "large":
                price = 1200;
                console.log(price)
                break
            case "medium":
                price = 850;
                console.log("The price is " + price)
                break
            case "small":
                price = 600;
                console.log(price)
                break
            default:
                console.log("error")
        }

        switch (pCrust) {
            case "0":
                crust_price = 0;
                break;
            case "Crispy":
                crust_price = 200;
                break;
            case "Stuffed":
                crust_price = 250;
                break;
            case "Gluten-free":
                crust_price = 180;
                break;
            default:
                console.log("No price");
        }
        let topping_value = 50;

        if ((pSize === "0") && (pCrust == "0")) {
            $("#proceed").show();
            $("#information").show();
            $("#order-summary").hide();
            alert("please select pizza size and crust")
        } else {
            $("#proceed").hide();
            $("#information").hide();
            $("#order-summary").slideDown(1000);
            $("#homeDelivery").hide()
        }
        total = price + crust_price + topping_value;
        console.log(total)
        let checkoutTotal = 0;
        checkoutTotal += total
        
         $("#pizzaname").text(pName);
        $("#pizzasize").text(pSize);
        $("#pizzacrust").text(pCrust);
        $("#pizzatopping").text(pTopping);
        $("#totals").text(total);


        $("#add-pizza").click(function (event) {
            let pName = $("#flavor option:selected").val();
            let pSize = $("#size option:selected").val();
            let pCrust = $("#crust option:selected").val();
            let pTopping = $(
                "input[type='radio'][name='topping']:checked"
            ).val();
            console.log(pTopping);

            switch (pSize) {
                case "0":
                    price = 0;
                    break;
                case "large":
                    price = 1200;
                    console.log(price);
                    break;
                case "medium":
                    price = 850;
                    console.log("The price is " + price);
                    break;
                case "small":
                    price = 600;
                    console.log(price);
                    break;
                default:
                    console.log("error");
            }

            switch (pCrust) {
                case "0":
                    crust_price = 0;
                    break;
                case "Crispy":
                    crust_price = 200;
                    break;
                case "Stuffed":
                    crust_price = 250;
                    break;
                case "Gluten-free":
                    crust_price = 180;
                    break;
                default:
                    console.log("No price");
            }
            let topping_value = 50;
            total = price + crust_price + topping_value;

            checkoutTotal += total;
            let newOrder = new Obtainpizza(pName, pSize, pCrust, pTopping, total);

            $("#ordersmade").append(
                '<tr><td id="pizzaname">' +
                newOrder.name +
                '</td><td id="pizzasize">' +
                newOrder.size +
                '</td><td id="pizzacrust">' +
                newOrder.crust +
                '</td><td id="pizzatopping">' +
                newOrder.topping +
                '</td><td id="totals">' +
                newOrder.total +
                "</td></tr>"
            );
            console.log(newOrder);
            event.preventDefault();
        });

        $("#checkout").click(function (event) {
            $("#checkout").hide();
            $("#add-pizza").hide();
            $("#homeDelivery").slideDown(1000);
            $("#addedprice").slideDown(1000);
            console.log("Your total bills is sh. " + checkoutTotal);
            $("#pizzatotal").append("Your bills is sh." + checkoutTotal);
            event.preventDefault();
        });


        $("#homeDelivery").click(function (event) {
            $(".pizzatable").hide();
            $("#order-summary h3").hide();
            $("#delivery").slideDown(1000);
            $("#addedprice").hide();
            $("#homeDelivery").hide();
            $("#pizzatotal").hide();
            let deliveryamount = checkoutTotal + 150;
            console.log("You will pay sh. " + deliveryamount + " on delivery");
            $("#totalbill").append("Your bill plus delivery fee is: " + deliveryamount);
            event.preventDefault();

        });


        $("#placeOrder").click(function (event) {
            $("#pizzatotal").hide();
            $("#delivery").hide();
            $("#placeOrder").hide();
            let deliveryamount = checkoutTotal + 150;
            console.log("Your final bill is sh. " + deliveryamount);
            let person = $("input#name").val();
            let phone = $("input#number").val();
            let location = $("input#location").val();

            if ((person && phone && location) != ("")) {
                $("#finalmessage").append(
                    person +
                    ", We have recieved your order and it will be delivered to you at " +
                    location +
                    ". Prepare sh. " +
                    deliveryamount
                );
                $("#totalbill").hide();
                $("#finalmessage").slideDown(1200);

            }
            else {
                alert("Please fill in delivery details!");
                $("#delivery").show();
                $("#placeOrder").show();
            };
            event.preventDefault();
        });
       

        event.preventDefault();
    })
})