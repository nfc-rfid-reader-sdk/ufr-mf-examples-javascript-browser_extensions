function BlockRead_RK(){
    var input = "BlockRead h ";
    
    var auth_mode = "";
    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    var block_address = document.getElementById("block_read_block_address_rk").value;
    
    
    input = input + block_address + auth_mode + " " + key_index;
    //console.log(input);
        
        ufRequest(input, function(){
            
            var output = ufResponse();
            var data_output = "Data " + block_address;
            
            var check_status = "Status " + block_address;
            var block_read_status = output[check_status];
            
                if (block_read_status == "[0x00 (0)] UFR_OK") {
                    
                document.getElementById("status").innerHTML = "Status: " + block_read_status;
                document.getElementById("function_status").innerHTML = "Function status: " + "BlockRead() - successful";
                
                 if(document.getElementById("isBlockReadHexChecked").checked)
                    {
                      document.getElementById("BlockReadRK_data_input").value = output[data_output];
                    } else {
                        
                        var hex = output[data_output];
                        
                        var string = '';
                        
                        for (var i = 0; i < hex.length; i += 2) {
                          string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
                          string = string.replace(/[^ -~]+/g, ".");
                          document.getElementById("BlockReadRK_data_input").value = string;
                        }
                }
                
            } else {
                document.getElementById("status").innerHTML = "Status: " + block_read_status;
                document.getElementById("function_status").innerHTML = "Function status: " + "BlockRead() - error occurred";
            }
            console.log(output);
        });
}

function BlockRead_AKM1(){
    
    
    var input = "BlockRead_AKM1 h ";
    
    var auth_mode = "";
    var key_selection = document.getElementById("key_auth_indexes")
    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    var block_address = document.getElementById("block_read_block_address_akm1").value;
    
    
    input = input + block_address + auth_mode;
    //console.log(input);
        
        ufRequest(input, function(){
            
            var output = ufResponse();
            var data_output = "Data " + block_address;
            var check_status = "Status " + block_address;
            var block_read_status = output[check_status];
            
                if (block_read_status == "[0x00 (0)] UFR_OK") {
                    
                document.getElementById("status").innerHTML = "Status: " + block_read_status;
                document.getElementById("function_status").innerHTML = "Function status: " + "BlockRead_AKM1() - successful";
                
                 if(document.getElementById("isBlockReadAKM1HexChecked").checked)
                    {
                      document.getElementById("BlockReadAKM1_data_input").value = output[data_output];
                    } else {
                        
                        var hex = output[data_output];
                        
                        var string = '';
                        
                        for (var i = 0; i < hex.length; i += 2) {
                          string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
                          string = string.replace(/[^ -~]+/g, ".");
                          document.getElementById("BlockReadAKM1_data_input").value = string;
                        }
                }
                
            } else {
                document.getElementById("status").innerHTML = "Status: " + block_read_status;
                document.getElementById("function_status").innerHTML = "Function status: " + "BlockRead_AKM1() - error occurred";
            }
            
            console.log(output);
        });
}

async function BlockRead_AKM2(){
    
    
    var input = "BlockRead_AKM2 h ";
    
    var auth_mode = "";
    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    var block_address = document.getElementById("block_read_block_address_akm2").value;
    
    
    input = input + block_address + auth_mode + " " + key_index;
    

    
        ufRequest(input, function(){
            
            var output = ufResponse();
            var data_output = "Data " + block_address;
            
            var check_status = "Status " + block_address;
            var block_read_status = output[check_status];
            
                if (block_read_status == "[0x00 (0)] UFR_OK") {
                    
                document.getElementById("status").innerHTML = "Status: " + block_read_status;
                document.getElementById("function_status").innerHTML = "Function status: " + "BlockRead_AKM2() - successful";
                
                 if(document.getElementById("isBlockReadAKM2HexChecked").checked)
                    {
                      document.getElementById("BlockReadAKM2_data_input").value = output[data_output];
                    } else {
                    
                    
                        var hex = output[data_output];
                        
                        var string = '';
                        
                        for (var i = 0; i < hex.length; i += 2) {
                          string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
                          string = string.replace(/[^ -~]+/g, ".");
                          document.getElementById("BlockReadAKM2_data_input").value = string;
                        }
                }
                
            } else {
                document.getElementById("status").innerHTML = "Status: " + block_read_status;
                document.getElementById("function_status").innerHTML = "Function status: " + "BlockRead_AKM2() - error occurred";
            }
            
            console.log(output);
        });
}

function BlockRead_PK(){
    
    
    var input = "BlockRead_PK h ";
    
    var auth_mode = "";
    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
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
        
    
    var block_address = document.getElementById("block_read_block_address_PK").value;
    
    
    input = input + block_address + auth_mode + " " + pk_key;
    console.log(input);
        
        ufRequest(input, function(){
            
            var output = ufResponse();
            var data_output = "Data " + block_address;
             var check_status = "Status " + block_address;
             var block_read_status = output[check_status];
            
                if (block_read_status == "[0x00 (0)] UFR_OK") {
                document.getElementById("status").innerHTML = "Status: " + block_read_status;
                document.getElementById("function_status").innerHTML = "Function status: " + "BlockRead_PK() - successful";
                
                 if(document.getElementById("isBlockReadPKHexChecked").checked)
                {
                      document.getElementById("BlockReadPK_data_input").value = output[data_output];
                } else {
                        var hex = output[data_output];
                        
                        var string = '';
                        
                        for (var i = 0; i < hex.length; i += 2) {
                          string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
                          string = string.replace(/[^ -~]+/g, ".");
                          document.getElementById("BlockReadPK_data_input").value = string;
                         
                        }
                }
                
            } else {
                
                document.getElementById("status").innerHTML = "Status: " + block_read_status;
                document.getElementById("function_status").innerHTML = "Function status: " + "BlockRead_PK() - error occurred";
            }
            
            console.log(output);
        });
}

function BlockWrite_RK(){

    var input = "BlockWrite";

    var data = document.getElementById("BlockWriteRK_data_input").value;
    var auth_mode = "";
    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    if(document.getElementById("isBlockWriteHexChecked").checked)
    {
       input=input+" 0x";
      
    } else{
       
        var hex = data;

        var string = '';

        for (var i = 0; i < hex.length; i ++) {
            string += hex.charCodeAt(i).toString(16);
        }

        data = " 0x"+ string;
        }
    
    var block_address = document.getElementById("block_write_block_address_rk").value;
    
    input = input + data + " " + block_address + auth_mode + " " + key_index;
    console.log(input);
    
    ufRequest(input, function(){
        
        
        var output = ufResponse();
        
        console.log(output);
        
        var check_status = "Status " + block_address;
        var block_read_status = output[check_status];
        if (block_read_status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + block_read_status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockWrite() - successful";
                
        } else{
            document.getElementById("status").innerHTML = "Status: " + block_read_status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockWrite() - error occurred";
          }
        
    });
}

function BlockWrite_AKM1(){
    
var input = "BlockWrite_AKM1";

    var data = document.getElementById("BlockWriteAKM1_data_input").value;
    var auth_mode = "";
    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    if(document.getElementById("isBlockWriteAKM1HexChecked").checked)
    {
       input=input+" 0x";
      
    } else{
         
        var hex = data;

        var string = '';

        for (var i = 0; i < hex.length; i ++) {
            string += hex.charCodeAt(i).toString(16);
        }

        data = " 0x"+ string;
        }
    
    var block_address = document.getElementById("block_write_block_address_akm1").value;
    
    input = input + data + " " + block_address + auth_mode;
    console.log(input);
    
    ufRequest(input, function(){
        
        var output = ufResponse();
        
        console.log(output);
        
        var check_status = "Status " + block_address;
        var block_read_status = output[check_status];
        if (block_read_status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + block_read_status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockWrite_AKM1() - successful";
                
        } else{
            document.getElementById("status").innerHTML = "Status: " + block_read_status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockWrite_AKM1() - error occurred";
          }
        
    });

}

function BlockWrite_AKM2(){
    
var input = "BlockWrite_AKM2";

    var data = document.getElementById("BlockWriteAKM2_data_input").value;
    var auth_mode = "";
    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    if(document.getElementById("isBlockWriteAKM2HexChecked").checked)
    {
       input=input+" 0x";
       
    } else{
          
        var hex = data;

        var string = '';

        for (var i = 0; i < hex.length; i ++) {
            string += hex.charCodeAt(i).toString(16);
        }

        data = " 0x"+ string;
        }
    
    var block_address = document.getElementById("block_write_block_address_akm2").value;
    
    input = input + data + " " + block_address + auth_mode;
    console.log(input);
    
    ufRequest(input, function(){
        
        var output = ufResponse();
        
        console.log(output);
        
        var check_status = "Status " + block_address;
        var block_read_status = output[check_status];
        if (block_read_status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + block_read_status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockWrite_AKM2() - successful";
                
        } else{
            document.getElementById("status").innerHTML = "Status: " + block_read_status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockWrite_AKM2() - error occurred";
          }
        
    });

}

function BlockWrite_PK(){

    var input = "BlockWrite_PK";

    var data = document.getElementById("BlockWritePK_data_input").value;
    var auth_mode = "";
    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
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
    
    if(document.getElementById("isBlockWritePKHexChecked").checked)
    {
       input=input+" 0x";
       
    } else{
          
        var hex = data;

        var string = '';

        for (var i = 0; i < hex.length; i ++) {
            string += hex.charCodeAt(i).toString(16);
        }

        data = " 0x"+ string;
        }
    
    var block_address = document.getElementById("block_write_block_address_PK").value;
    
    input = input + data + " " + block_address + auth_mode + " " + pk_key;
    console.log(input);
    
    ufRequest(input, function(){
        
        var output = ufResponse();
        
        console.log(output);
        
        var check_status = "Status " + block_address;
        var block_read_status = output[check_status];
        if (block_read_status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + block_read_status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockWrite_PK() - successful";
                
        } else{
            document.getElementById("status").innerHTML = "Status: " + block_read_status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockWrite_PK() - error occurred";
          }
        
    });
}
