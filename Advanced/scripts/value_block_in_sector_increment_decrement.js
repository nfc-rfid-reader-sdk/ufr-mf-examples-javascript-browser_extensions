
function ValueBlockInSectorIncrement_RK()
{
    var input = "ValueBlockInSectorIncrement ";

    var value = document.getElementById("value_block_in_sector_increment_value").value;

    var sector_address = document.getElementById("value_block_in_sector_increment_sector_address").value;

    var block_address = document.getElementById("value_block_in_sector_increment_block_address").value;

    var auth_mode = "";

    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
   
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + value + " " + sector_address + " " + block_address + auth_mode + " " + key_index;
    console.log(input);


    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorIncrement() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorIncrement() - error occurred";
        }
    });
}

function ValueBlockInSectorIncrement_AKM1()
{
    var input = "ValueBlockInSectorIncrement_AKM1 ";

    var value = document.getElementById("value_block_in_sector_increment_value_akm1").value;

    var sector_address = document.getElementById("value_block_in_sector_increment_sector_address_akm1").value;

    var block_address = document.getElementById("value_block_in_sector_increment_block_address_akm1").value;

    var auth_mode = "";

    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
   
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + value + " " + sector_address + " " + block_address + auth_mode;
    console.log(input);


    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorIncrement_AKM1() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorIncrement_AKM1() - error occurred";
        }
    });
}

function ValueBlockInSectorIncrement_AKM2()
{
    var input = "ValueBlockInSectorIncrement_AKM2 ";

    var value = document.getElementById("value_block_in_sector_increment_value_akm2").value;

    var sector_address = document.getElementById("value_block_in_sector_increment_sector_address_akm2").value;

    var block_address = document.getElementById("value_block_in_sector_increment_block_address_akm2").value;

    var auth_mode = "";

    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
   
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + value + " " + sector_address + " " + block_address + auth_mode;
    console.log(input);


    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorIncrement_AKM2() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorIncrement_AKM2() - error occurred";
        }
    });
}

function ValueBlockInSectorIncrement_PK()
{
    var input = "ValueBlockInSectorIncrement_PK ";

    var value = document.getElementById("value_block_in_sector_increment_value_PK").value;

    var sector_address = document.getElementById("value_block_in_sector_increment_sector_address_PK").value;

    var block_address = document.getElementById("value_block_in_sector_increment_block_address_PK").value;

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

    input = input + value + " " + sector_address + " " + block_address + auth_mode + " " + pk_key;
    console.log(input);


    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorIncrement_PK() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorIncrement_PK() - error occurred";
        }
    });
}

function ValueBlockInSectorDecrement_RK()
{
    var input = "ValueBlockInSectorDecrement ";

    var value = document.getElementById("value_block_in_sector_decrement_value").value;

    var sector_address = document.getElementById("value_block_in_sector_decrement_sector_address").value;

    var block_address = document.getElementById("value_block_in_sector_decrement_block_address").value;

    var auth_mode = "";
    
    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + value + " " + sector_address + " " + block_address + auth_mode + " " + key_index;
    console.log(input);


    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorDecrement() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorDecrement() - error occurred";
        }
    });
}

function ValueBlockInSectorDecrement_AKM1()
{
    var input = "ValueBlockInSectorDecrement_AKM1 ";

    var value = document.getElementById("value_block_in_sector_decrement_value_akm1").value;

    var sector_address = document.getElementById("value_block_in_sector_decrement_sector_address_akm1").value;

    var block_address = document.getElementById("value_block_in_sector_decrement_block_address_akm1").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + value + " " + sector_address + " " + block_address + auth_mode;
    console.log(input);


    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorDecrement_AKM1() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorDecrement_AKM1() - error occurred";
        }
    });
}

function ValueBlockInSectorDecrement_AKM2()
{
    var input = "ValueBlockInSectorDecrement_AKM2 ";

    var value = document.getElementById("value_block_in_sector_decrement_value_akm2").value;

    var sector_address = document.getElementById("value_block_in_sector_decrement_sector_address_akm2").value;

    var block_address = document.getElementById("value_block_in_sector_decrement_block_address_akm2").value;

    var auth_mode = "";

    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
   
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + value + " " + sector_address + " " + block_address + auth_mode + " " + key_index;
    console.log(input);


    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorDecrement_AKM2() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorDecrement_AKM2() - error occurred";
        }
    });
}

function ValueBlockInSectorDecrement_PK()
{
    var input = "ValueBlockInSectorDecrement_PK ";

    var value = document.getElementById("value_block_in_sector_decrement_value_PK").value;

    var sector_address = document.getElementById("value_block_in_sector_decrement_sector_address_PK").value;

    var block_address = document.getElementById("value_block_in_sector_decrement_block_address_PK").value;

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

    input = input + value + " " + sector_address + " " + block_address + auth_mode + " " + pk_key;
    console.log(input);


    ufRequest(input, function(){

        var output = ufResponse();

        console.log(output);

        if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorDecrement_PK() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorDecrement_PK() - error occurred";
        }
    });
}

