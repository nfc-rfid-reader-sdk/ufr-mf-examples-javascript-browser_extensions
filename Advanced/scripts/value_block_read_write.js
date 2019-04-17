function ValueBlockRead_RK(){
    var input = "ValueBlockRead h "

    var block_address = document.getElementById("value_block_read_block_address").value;

    var auth_mode = "";

    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + block_address  + auth_mode + " " + key_index;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();
        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("value_block_read_value").value = output.Value;
            document.getElementById("value_block_read_value_address").value = output.ValueAddress;
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockRead() - successful";
          
        } else{
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockRead() - error occurred";
          }
    });
}

function ValueBlockRead_AKM1(){
    
    var input = "ValueBlockRead_AKM1 h "

    var block_address = document.getElementById("value_block_read_block_address_akm1").value;

    var auth_mode = "";
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + block_address  + auth_mode;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();
        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("value_block_read_value_akm1").value = output.Value;
            document.getElementById("value_block_read_value_address_akm1").value = output.ValueAddress;
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockRead_AKM1() - successful";
          
        } else{
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockRead_AKM1() - error occurred";
          }
    });
}

function ValueBlockRead_AKM2(){
        
    var input = "ValueBlockRead_AKM2 h "

    var block_address = document.getElementById("value_block_read_block_address_akm2").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + block_address  + auth_mode;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();
        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("value_block_read_value_akm2").value = output.Value;
            document.getElementById("value_block_read_value_address_akm2").value = output.ValueAddress;
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockRead_AKM1() - successful";
          
        } else{
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockRead_AKM1() - error occurred";
          }
    });
}

function ValueBlockRead_PK(){
    var input = "ValueBlockRead_PK h "

    var block_address = document.getElementById("value_block_read_block_address_PK").value;

    var auth_mode = "";

    var key_data = document.getElementById("pk_key").getElementsByClassName("card_key_PK_input");
   
     var pk_key = "0x";
        for (var x = 0; x < key_data.length; x++) {
            pk_key = pk_key + d2h(key_data[x].value);
            
        }

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + block_address  + auth_mode + " " + pk_key;
    //console.log(input);

    ufRequest(input, function(){

        var output = ufResponse();
        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("value_block_read_value_PK").value = output.Value;
            document.getElementById("value_block_read_value_address_PK").value = output.ValueAddress;
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockRead_PK() - successful";
          
        } else{
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockRead_PK() - error occurred";
          }
    });
}


function ValueBlockWrite_RK(){
    var input = "ValueBlockWrite ";

    var value = document.getElementById("value_block_write_value").value;

    var value_address = document.getElementById("value_block_write_value_address").value;

    var block_address = document.getElementById("value_block_write_block_address").value;

    var auth_mode = "";

    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }


    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;



    var input = input + value + " " + value_address + " " + block_address +  auth_mode + " " + key_index;
    console.log(input); 

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);
        
        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockWrite() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockWrite() - error occurred";
          
        }

    });

}

function ValueBlockWrite_AKM1(){
    var input = "ValueBlockWrite_AKM1 ";

    var value = document.getElementById("value_block_write_value_akm1").value;

    var value_address = document.getElementById("value_block_write_value_address_akm1").value;

    var block_address = document.getElementById("value_block_write_block_address_akm1").value;

    var auth_mode = "";

    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    var input = input + value + " " + value_address + " " + block_address +  auth_mode;
    console.log(input); 

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockWrite_AKM1() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockWrite_AKM1() - error occurred";
          
        }

    });
}

function ValueBlockWrite_AKM2(){
    var input = "ValueBlockWrite_AKM2 ";

    var value = document.getElementById("value_block_write_value_akm2").value;

    var value_address = document.getElementById("value_block_write_value_address_akm2").value;

    var block_address = document.getElementById("value_block_write_block_address_akm2").value;

    var auth_mode = "";

    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    var input = input + value + " " + value_address + " " + block_address +  auth_mode;
    console.log(input); 

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockWrite_AKM2() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockWrite_AKM2() - error occurred";
          
        }

    });
}

function ValueBlockWrite_PK(){
    var input = "ValueBlockWrite_PK ";

    var value = document.getElementById("value_block_write_value_PK").value;

    var value_address = document.getElementById("value_block_write_value_address_PK").value;

    var block_address = document.getElementById("value_block_write_block_address_PK").value;

    var auth_mode = "";

    var key_data = document.getElementById("pk_key").getElementsByClassName("card_key_PK_input");
   
    var pk_key = "0x";
       for (var x = 0; x < key_data.length; x++) {
           pk_key = pk_key + d2h(key_data[x].value);
           
       }
    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }


    var input = input + value + " " + value_address + " " + block_address +  auth_mode + " " + pk_key;
    console.log(input); 

    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);


        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockWrite_PK() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockWrite_PK() - error occurred";
          
        }

    });

}