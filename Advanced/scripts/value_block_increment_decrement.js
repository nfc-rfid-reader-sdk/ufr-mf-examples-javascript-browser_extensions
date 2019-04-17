function ValueBlockIncrement_RK(){
        
    var input = "ValueBlockIncrement ";

    var value = document.getElementById("value_block_increment_value").value;

    var block_address =  document.getElementById("value_block_increment_block_address").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }


    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;

    input = input + " " + value + " " + block_address + auth_mode + " " + key_index;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockIncrement() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockIncrement() - error occurred";
          
        }

    });

}

function ValueBlockIncrement_AKM1(){
       
    var input = "ValueBlockIncrement_AKM1 ";

    var value = document.getElementById("value_block_increment_value_akm1").value;

    var block_address =  document.getElementById("value_block_increment_block_address_akm1").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + " " + value + " " + block_address + auth_mode;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockIncrement_AKM1() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockIncrement_AKM1() - error occurred";
          
        }
    });

}

function ValueBlockIncrement_AKM2(){
      
    var input = "ValueBlockIncrement_AKM2 ";

    var value = document.getElementById("value_block_increment_value_akm2").value;

    var block_address =  document.getElementById("value_block_increment_block_address_akm2").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + " " + value + " " + block_address + auth_mode;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockIncrement_AKM2() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockIncrement_AKM2() - error occurred";
          
        }
    });

}

function ValueBlockIncrement_PK(){
     
    var input = "ValueBlockIncrement_PK ";

    var value = document.getElementById("value_block_increment_value_PK").value;

    var block_address =  document.getElementById("value_block_increment_block_address_PK").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }


    var key_data = document.getElementById("pk_key").getElementsByClassName("card_key_PK_input");
   
     var pk_key = "0x";
        for (var x = 0; x < key_data.length; x++) {
            pk_key = pk_key + d2h(key_data[x].value);
            
        }
    
    
    input = input + " " + value + " " + block_address + auth_mode + " " + pk_key;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockIncrement_PK() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockIncrement_PK() - error occurred";
          
        }
    });

}

function ValueBlockDecrement_RK(){
       
    var input = "ValueBlockDecrement ";

    var value = document.getElementById("value_block_decrement_value").value;

    var block_address =  document.getElementById("value_block_decrement_block_address").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }


    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;

    input = input + " " + value + " " + block_address + auth_mode + " " + key_index;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockDecrement() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockDecrement() - error occurred";
          
        }

    });

}

function ValueBlockDecrement_AKM1(){
    
var input = "ValueBlockDecrement_AKM1 ";

    var value = document.getElementById("value_block_decrement_value_akm1").value;

    var block_address =  document.getElementById("value_block_decrement_block_address_akm1").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + " " + value + " " + block_address + auth_mode;
   // console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockDecrement_AKM1() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockDecrement_AKM1() - error occurred";
          
        }
    });

}

function ValueBlockDecrement_AKM2(){
   
    var input = "ValueBlockDecrement_AKM2 ";

    var value = document.getElementById("value_block_decrement_value_akm2").value;

    var block_address =  document.getElementById("value_block_decrement_block_address_akm2").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + " " + value + " " + block_address + auth_mode;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockDecrement_AKM2() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockDecrement_AKM2() - error occurred";
          
        }
    });

}

function ValueBlockDecrement_PK(){
   
    var input = "ValueBlockDecrement_PK ";

    var value = document.getElementById("value_block_decrement_value_PK").value;

    var block_address =  document.getElementById("value_block_decrement_block_address_PK").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    var key_data = document.getElementById("pk_key").getElementsByClassName("card_key_PK_input");
   
     var pk_key = "0x";
        for (var x = 0; x < key_data.length; x++) {
            pk_key = pk_key + d2h(key_data[x].value);
            
        }
    
    input = input + " " + value + " " + block_address + auth_mode + " " + pk_key;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockDecrement_PK() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockDecrement_PK() - error occurred";
          
        }
    });

}