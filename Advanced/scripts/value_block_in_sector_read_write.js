function ValueBlockInSectorRead_RK(){

    var input = "ValueBlockInSectorRead ";

    var sector_address = document.getElementById("value_block_in_sector_read_sector_address").value;

    var block_address = document.getElementById("value_block_in_sector_read_block_address").value;

    var auth_mode = "";
    
    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + sector_address + " " + block_address + auth_mode + " " + key_index;
    //console.log(input);

    ufRequest(input, function(){
        var output = ufResponse();
        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("ValueBlockInSectorReadRK_data_input").value = output.Value;
            document.getElementById("value_block_in_sector_read_value_address").value = output.ValueAddress;
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorRead() - successful";
                
        } else{
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorRead() - error occurred";
          }
    });
}

function ValueBlockInSectorRead_AKM1(){

    var input = "ValueBlockInSectorRead_AKM1 ";

    var sector_address = document.getElementById("value_block_in_sector_read_sector_address_akm1").value;

    var block_address = document.getElementById("value_block_in_sector_read_block_address_akm1").value;

    var auth_mode = "";
    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + sector_address + " " + block_address + auth_mode;
    //console.log(input);

    ufRequest(input, function(){
        var output = ufResponse();
        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("ValueBlockInSectorReadAKM1_data_input").value = output.Value;
            document.getElementById("value_block_in_sector_read_value_address_akm1").value = output.ValueAddress;
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorRead_AKM1() - successful";
                
        } else{
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorRead_AKM1() - error occurred";
          }
    });
}

function ValueBlockInSectorRead_AKM2(){

    var input = "ValueBlockInSectorRead_AKM2 ";

    var sector_address = document.getElementById("value_block_in_sector_read_sector_address_akm2").value;

    var block_address = document.getElementById("value_block_in_sector_read_block_address_akm2").value;

    var auth_mode;

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    input = input + sector_address + " " + block_address + auth_mode;
    //console.log(input);

    ufRequest(input, function(){
        var output = ufResponse();
        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("ValueBlockInSectorReadAKM2_data_input").value = output.Value;
            document.getElementById("value_block_in_sector_read_value_address_akm2").value = output.ValueAddress;
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorRead_AKM2() - successful";
                
        } else{
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorRead_AKM2() - error occurred";
          }
    });
}

function ValueBlockInSectorRead_PK(){
    
    var input = "ValueBlockInSectorRead_PK ";

    var sector_address = document.getElementById("value_block_in_sector_read_sector_address_PK").value;

    var block_address = document.getElementById("value_block_in_sector_read_block_address_PK").value;

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

    input = input + sector_address + " " + block_address + auth_mode + " " + pk_key;
    //console.log(input);

    ufRequest(input, function(){
        var output = ufResponse();
        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("ValueBlockInSectorReadPK_data_input").value = output.Value;
            document.getElementById("value_block_in_sector_read_value_address_PK").value = output.ValueAddress;
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorRead() - successful";
                
        } else{
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorRead() - error occurred";
          }
    });
}

function ValueBlockInSectorWrite_RK(){

var input = "ValueBlockInSectorWrite "

var value  = document.getElementById("ValueBlockInSectorWriteRK_data_input").value; ;

var value_address = document.getElementById("value_block_in_sector_write_value_address").value; 


var sector_address = document.getElementById("value_block_in_sector_write_sector_address").value; ;

var block_address = document.getElementById("value_block_in_sector_write_block_address").value;

var key_selection = document.getElementById("key_auth_indexes")

var key_index = key_selection.selectedIndex;

var auth_mode = "";

    
       if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    var input = input + value + " " + value_address + " " + sector_address +  " " + block_address + auth_mode + " " + key_index;
    
    console.log(input)

ufRequest(input, function(){

    var output = ufResponse();

    console.log(output);

    if(output.Status == "[0x00 (0)] UFR_OK")
        {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorWrite() - successful";
          
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorWrite() - error occurred";
          
        }
});
}

function ValueBlockInSectorWrite_AKM1(){

    var input = "ValueBlockInSectorWrite_AKM1 "

    var value  = document.getElementById("ValueBlockInSectorWriteAKM1_data_input").value; ;
    
    var value_address = document.getElementById("value_block_in_sector_write_value_address_akm1").value; 
    
    
    var sector_address = document.getElementById("value_block_in_sector_write_sector_address_akm1").value; ;
    
    var block_address = document.getElementById("value_block_in_sector_write_block_address_akm1").value;
    
    var auth_mode = "";
    
        
           if (document.getElementById("radio_auth_A_mode").checked) {
            auth_mode = " 0x60";
        } else {
            auth_mode = " 0x61"
        }
    
        var input = input + value + " " + value_address + " " + sector_address +  " " + block_address + auth_mode;
        
        console.log(input)
    
    ufRequest(input, function(){
    
        var output = ufResponse();
    
        console.log(output);
    
        if(output.Status == "[0x00 (0)] UFR_OK")
            {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorWrite_AKM1() - successful";
              
            } else {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorWrite_AKM1() - error occurred";
              
            }
    });
}

function ValueBlockInSectorWrite_AKM2(){

    var input = "ValueBlockInSectorWrite_AKM2 "

    var value  = document.getElementById("ValueBlockInSectorWriteAKM2_data_input").value; ;
    
    var value_address = document.getElementById("value_block_in_sector_write_value_address_akm2").value; 
    
    
    var sector_address = document.getElementById("value_block_in_sector_write_sector_address_akm2").value; ;
    
    var block_address = document.getElementById("value_block_in_sector_write_block_address_akm2").value;
    
    var auth_mode = "";
    
        
           if (document.getElementById("radio_auth_A_mode").checked) {
            auth_mode = " 0x60";
        } else {
            auth_mode = " 0x61"
        }
    
        var input = input + value + " " + value_address + " " + sector_address +  " " + block_address + auth_mode;
        
        console.log(input)
    
    ufRequest(input, function(){
    
        var output = ufResponse();
    
        console.log(output);
    
        if(output.Status == "[0x00 (0)] UFR_OK")
            {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorWrite_AKM1() - successful";
              
            } else {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorWrite_AKM1() - error occurred";
              
            }
    });
}

function ValueBlockInSectorWrite_PK(){

    var input = "ValueBlockInSectorWrite_PK "

    var value  = document.getElementById("ValueBlockInSectorWritePK_data_input").value; ;
    
    var value_address = document.getElementById("value_block_in_sector_write_value_address_PK").value; 
    
    
    var sector_address = document.getElementById("value_block_in_sector_write_sector_address_PK").value; ;
    
    var block_address = document.getElementById("value_block_in_sector_write_block_address_PK").value;
    
    var key_data = document.getElementById("pk_key").getElementsByClassName("card_key_PK_input");
   
    var pk_key = "0x";
       for (var x = 0; x < key_data.length; x++) {
           pk_key = pk_key + d2h(key_data[x].value);
           
       }

    var auth_mode = "";
    
        
           if (document.getElementById("radio_auth_A_mode").checked) {
            auth_mode = " 0x60";
        } else {
            auth_mode = " 0x61"
        }
    
        var input = input + value + " " + value_address + " " + sector_address +  " " + block_address + auth_mode +  " " + pk_key;
        
        console.log(input)
    
    ufRequest(input, function(){
    
        var output = ufResponse();
    
        console.log(output);
    
        if(output.Status == "[0x00 (0)] UFR_OK")
            {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorWrite_PK() - successful";
              
            } else {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "ValueBlockInSectorWrite_PK() - error occurred";
            }
    });
    
}