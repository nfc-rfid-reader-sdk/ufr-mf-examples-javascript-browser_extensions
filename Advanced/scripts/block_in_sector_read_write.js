function BlockInSectorRead_RK() {

    var input = "BlockInSectorRead h ";

    var auth_mode = "";
    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }


    var block_address = document.getElementById("block_in_sector_read_block_address_rk").value;

    var sector_address = document.getElementById("block_in_sector_read_sector_address_rk").value;

    input = input + sector_address + " " + block_address + auth_mode + " " + key_index;
    //console.log(input);

    ufRequest(input, function() {

        var output = ufResponse();

        if (output.Status == "[0x00 (0)] UFR_OK") {

            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorRead() - successful";

            if (document.getElementById("isBlockInSectorReadHexChecked").checked) {
                document.getElementById("BlockInSectorReadRK_data_input").value = output.Data;
            } else {

                var hex = output.Data;

                var string = '';

                for (var i = 2; i < hex.length; i += 2) {
                    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
                    string = string.replace(/[^ -~]+/g, ".");
                    document.getElementById("BlockInSectorReadRK_data_input").value = string;
                }
            }

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorRead() - error occurred";
        }
        console.log(output);
    });

}


function BlockInSectorRead_AKM1() {

    var input = "BlockInSectorRead_AKM1 h ";

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }


    var block_address = document.getElementById("block_in_sector_read_block_address_akm1").value;

    var sector_address = document.getElementById("block_in_sector_read_sector_address_akm1").value;

    input = input + sector_address + " " + block_address + auth_mode;
    //console.log(input);

    ufRequest(input, function() {

        var output = ufResponse();

        if (output.Status == "[0x00 (0)] UFR_OK") {

            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorRead_AKM1() - successful";

            if (document.getElementById("isBlockInSectorReadAKM1HexChecked").checked) {
                document.getElementById("BlockInSectorReadAKM1_data_input").value = output.Data;
            } else {

                var hex = output.Data;

                var string = '';

                for (var i = 2; i < hex.length; i += 2) {
                    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
                    string = string.replace(/[^ -~]+/g, ".");
                    document.getElementById("BlockInSectorReadAKM1_data_input").value = string;
                }
            }

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorRead_AKM1() - error occurred";
        }
        console.log(output);
    });

}

function BlockInSectorRead_AKM2() {

    var input = "BlockInSectorRead_AKM2 h ";

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    var block_address = document.getElementById("block_in_sector_read_block_address_akm2").value;

    var sector_address = document.getElementById("block_in_sector_read_sector_address_akm2").value;

    input = input + sector_address + " " + block_address + auth_mode;
    //console.log(input);

    ufRequest(input, function() {

        var output = ufResponse();

        if (output.Status == "[0x00 (0)] UFR_OK") {

            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorRead_AKM2() - successful";

            if (document.getElementById("isBlockInSectorReadAKM2HexChecked").checked) {
                document.getElementById("BlockInSectorReadAKM2_data_input").value = output.Data;
            } else {

                var hex = output.Data;

                var string = '';

                for (var i = 2; i < hex.length; i += 2) {
                    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
                    string = string.replace(/[^ -~]+/g, ".");
                    document.getElementById("BlockInSectorReadAKM2_data_input").value = string;
                }
            }

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorRead_AKM2() - error occurred";
        }
        console.log(output);
    });
}

function BlockInSectorRead_PK() {

    var input = "BlockInSectorRead_PK h ";

    var auth_mode = "";
    var key_selection = document.getElementById("key_auth_indexes")

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }


    var block_address = document.getElementById("block_in_sector_read_block_address_PK").value;

    var sector_address = document.getElementById("block_in_sector_read_sector_address_PK").value;

    var key_data = document.getElementById("pk_key").getElementsByClassName("card_key_PK_input");

    var pk_key = "0x";
    for (var x = 0; x < key_data.length; x++) {
        pk_key = pk_key + d2h(key_data[x].value);

    }


    input = input + sector_address + " " + block_address + auth_mode + " " + pk_key;
    //console.log(input);

    ufRequest(input, function() {

        var output = ufResponse();

        if (output.Status == "[0x00 (0)] UFR_OK") {

            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorRead_PK() - successful";

            if (document.getElementById("isBlockInSectorReadPKHexChecked").checked) {
                document.getElementById("BlockInSectorReadPK_data_input").value = output.Data;
            } else {

                var hex = output.Data;

                var string = '';

                for (var i = 2; i < hex.length; i += 2) {
                    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
                    string = string.replace(/[^ -~]+/g, ".");
                    document.getElementById("BlockInSectorReadPK_data_input").value = string;
                }
            }

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorRead_PK() - error occurred";
        }
        console.log(output);
    });
}

function BlockInSectorWrite_RK() {

    var input = "BlockInSectorWrite ";

    var data = document.getElementById("BlockInSectorWriteRK_data_input").value;
    var auth_mode = "";
    var key_selection = document.getElementById("key_auth_indexes");
    var key_index = key_selection.selectedIndex;

    var block_address = document.getElementById("block_in_sector_write_block_address_rk").value;

    var sector_address = document.getElementById("block_in_sector_write_sector_address_rk").value;


    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61";
    }

    if (document.getElementById("isBlockInSectorWriteHexChecked").checked) {
        input = input + " 0x";

    } else {
        
        var hex = data;

        var string = '';

        for (var i = 0; i < hex.length; i ++) {
            string += hex.charCodeAt(i).toString(16);
        }

        data = "0x"+ string;
    }

    input = input + data + " " + sector_address + " " + block_address + auth_mode + " " + key_index;

    ufRequest(input, function() {

        var output = ufResponse();

        console.log(output);


        if (output.Status == "[0x00 (0)] UFR_OK") {

            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorWrite() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorWrite() - error occurred";

        }

    });
}

function BlockInSectorWrite_AKM1(){

    var input = "BlockInSectorWrite_AKM1 ";

    var data = document.getElementById("BlockInSectorWriteAKM1_data_input").value;
    var auth_mode = "";
   
    var block_address = document.getElementById("block_in_sector_write_block_address_akm1").value;

    var sector_address = document.getElementById("block_in_sector_write_sector_address_akm1").value;


    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61";
    }
   
    if (document.getElementById("isBlockInSectorWriteAKM1HexChecked").checked) {
        input = input + " 0x";

    } else {

        var hex = data;

        var string = '';

        for (var i = 0; i < hex.length; i ++) {
            string += hex.charCodeAt(i).toString(16);
        }

        data = "0x"+ string;
    }

    input = input + data + " " + sector_address + " " + block_address + auth_mode;

    ufRequest(input, function() {

        var output = ufResponse();
        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {

            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorWrite_AKM1() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorWrite_AKM1() - error occurred";

        }
        
    });

}

function BlockInSectorWrite_AKM2(){
    
    var input = "BlockInSectorWrite_AKM2 ";

    var data = document.getElementById("BlockInSectorWriteAKM2_data_input").value;
    var auth_mode = "";
   
    var block_address = document.getElementById("block_in_sector_write_block_address_akm2").value;

    var sector_address = document.getElementById("block_in_sector_write_sector_address_akm2").value;


    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61";
    }
   
    if (document.getElementById("isBlockInSectorWriteAKM2HexChecked").checked) {
        input = input + " 0x";

    } else {

        var hex = data;

        var string = '';

        for (var i = 0; i < hex.length; i ++) {
            string += hex.charCodeAt(i).toString(16);
        }

        data = "0x"+ string;
    }

    input = input + data + " " + sector_address + " " + block_address + auth_mode;

    ufRequest(input, function() {

        var output = ufResponse();
      
        if (output.Status == "[0x00 (0)] UFR_OK") {

            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorWrite_AKM2() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorWrite_AKM2() - error occurred";

        }
        
        console.log(output);

    });

}


function BlockInSectorWrite_PK() {

    var input = "BlockInSectorWrite_PK ";

    var data = document.getElementById("BlockInSectorWritePK_data_input").value;
    var auth_mode = "";
   
    var block_address = document.getElementById("block_in_sector_write_block_address_PK").value;

    var sector_address = document.getElementById("block_in_sector_write_sector_address_PK").value;


    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61";
    }
    var key_data = document.getElementById("pk_key").getElementsByClassName("card_key_PK_input");

    var pk_key = "0x";
    for (var x = 0; x < key_data.length; x++) {
        pk_key = pk_key + d2h(key_data[x].value);

    }
    if (document.getElementById("isBlockInSectorWritePKHexChecked").checked) {
        input = input + " 0x";

    } else {

        var hex = data;

        var string = '';

        for (var i = 0; i < hex.length; i ++) {
            string += hex.charCodeAt(i).toString(16);
        }

        data = "0x"+ string;
    }

    input = input + data + " " + sector_address + " " + block_address + auth_mode + " " + pk_key;

    ufRequest(input, function() {

        var output = ufResponse();
       
        if (output.Status == "[0x00 (0)] UFR_OK") {

            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorWrite_PK() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "BlockInSectorWrite_PK() - error occurred";

        }
        
        console.log(output);

    });
}