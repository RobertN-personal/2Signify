function serializeLink() {
    document.getElementById('outputs').style.display = "block"; // Unhide section outputs
    let param = [];
    var goodParam = [];
    let cereal = "";
    let signify = "";
    // Get secret word from the form and assign it to "key" variable
    let key = document.getElementById("secret-word").value;
    // Get the buy-link from the text box and assign it to "link" variable
    link = document.getElementById("unsigned-link").value;
    // Remove everything before the first parameter and create an array with what is left
    parameters = link.split("&");
    parameters.shift();
    // Sort the array alphabetically
    parameters.sort();
    // Output the sorted parameters
    document.getElementById("ordered-parameters").innerHTML = parameters;
    // Verify required parameters for the signature and put their values in array goodParam
    for(i = 0; i < parameters.length; i++) {
        param[i] = parameters[i].split("=");
        if (param[i][0] == "prod" || param[i][0] == "qty" || param[i][0] == "opt" || param[i][0] == "price" || param[i][0] == "return-url" || param[i][0] == "customer-ext-ref" || param[i][0] == "coupon" || param[i][0] == "currency" || param[i][0] == "item-ext-ref" || param[i][0] == "renewal-price" || param[i][0] == "duration" || param[i][0] == "recurrence" || param[i][0] == "type" || param[i][0] == "description" || param[i][0] == "lock" || param[i][0] == "customer-ref" || param[i][0] == "order-ext-ref" || param[i][0] == "expiration" || param[i][0] == "return-type") {
            goodParam.push(param[i][1]);
        }
    }
    // Get the serialized string which needs to be encrypted and display it
    for (j=0; j < goodParam.length; j++) {
        cereal += goodParam[j].length + goodParam[j];
    }
    document.getElementById("serialized-parameters").innerHTML = cereal;



    // Display full link with signature
    document.getElementById("signed-link").innerHTML = link + "&signature=" + signify;
    console.log(link);
    console.log(key);
    console.log(parameters);
    console.log(goodParam);
    console.log(cereal);
}

// Test link: https://secure.2checkout.com/checkout/buy?merchant=250310037076&tpl=default&prod=orgflow-cli&qty=1&opt=SIZE:PRO_7

// Correct signature: signature=1440e9c4fbf14e9dab6a092d2493fd020742c02562e10eeb4037197ffd21d803 