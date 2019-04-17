
async function LinearRead() {

    var linear_read_input;
    var lin_address = document.getElementById("linear_read_linear_address").value;
    var lin_len = document.getElementById("linear_read_linear_length").value;
   
    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    if (lin_address == "") {
        alert("You must enter linear address from which you wish to start reading!");

        return false;
    } else if (lin_len == "") {
        alert("You must enter linear length - how many bytes you wish to read!");

        return false;
    }

    document.getElementById("btnLinearRead").disabled = true;

    linear_read_input = "LinearRead h " + lin_address + " " + lin_len + auth_mode + " " + key_index;

    //console.log("input: " + linear_read_input);
    
    await sleep(500);

    ufRequest(linear_read_input, function() {
        var output = ufResponse();
        document.getElementById("linear_read_input").value = output.Data;
        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: LinearRead() - successful";
            document.getElementById("linRead_bytes_read").value = output.ReturnedBytes;
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: LinearRead() - error occurred";
        }

        document.getElementById("btnLinearRead").disabled = false;
    });

}

async function LinearReadAKM1()
{
    
    var linear_read_input;
    var lin_address = document.getElementById("linear_read_akm1_linear_address").value;
    var lin_len = document.getElementById("linear_read_akm1_linear_length").value;
   
   if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    if (lin_address == "") {
        alert("You must enter linear address from which you wish to start reading!");

        return false;
    } else if (lin_len == "") {
        alert("You must enter linear length - how many bytes you wish to read!");

        return false;
    }

    document.getElementById("btnLinearRead_akm1").disabled = true;

    linear_read_input = "LinearRead_AKM1 h " + lin_address + " " + lin_len + auth_mode;

    //console.log("input: " + linear_read_input);
    await sleep(500);

    ufRequest(linear_read_input, function() {
        var output = ufResponse();
        document.getElementById("linear_read_akm1_input").value = output.Data;
        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: LinearRead_AKM1() - successful";
            document.getElementById("linRead_bytes_read_akm1").value = output.ReturnedBytes;
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: LinearRead_AKM1() - error occurred";
        }

        document.getElementById("btnLinearRead_akm1").disabled = false;
    });

}
async function LinearReadAKM2()
{
    
    var linear_read_input;
    var lin_address = document.getElementById("linear_read_akm2_linear_address").value;
    var lin_len = document.getElementById("linear_read_akm2_linear_length").value;
   
   if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
   
    if (lin_address == "") {
        alert("You must enter linear address from which you wish to start reading!");

        return false;
    } else if (lin_len == "") {
        alert("You must enter linear length - how many bytes you wish to read!");

        return false;
    }

    document.getElementById("btnLinearRead_akm2").disabled = true;

    linear_read_input = "LinearRead_AKM2 h " + lin_address + " " + lin_len + auth_mode;

    //console.log("input: " + linear_read_input);
    await sleep(500);

    ufRequest(linear_read_input, function() {
        var output = ufResponse();
        document.getElementById("linear_read_akm2_input").value = output.Data;
        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: LinearRead_AKM2() - successful";
            document.getElementById("linRead_bytes_read_akm2").value = output.ReturnedBytes;
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: LinearRead_AKM2() - error occurred";
        }

        document.getElementById("btnLinearRead_akm2").disabled = false;
    });
    
}
async function LinearReadPK()
{
    
    var linear_read_input;
    var lin_address = document.getElementById("linear_read_PK_linear_address").value;
    var lin_len = document.getElementById("linear_read_PK_linear_length").value;
    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    var key_data = document.getElementById("pk_key").getElementsByClassName("card_key_PK_input");
   
    var pk_key = "";
    
        for (var x = 0; x < key_data.length; x++) {
            pk_key = pk_key + d2h(key_data[x].value);
        }
    
    if (lin_address == "") {
        alert("You must enter linear address from which you wish to start reading!");

        return false;
    } else if (lin_len == "") {
        alert("You must enter linear length - how many bytes you wish to read!");

        return false;
    }

    document.getElementById("btnLinearRead_PK").disabled = true;

    linear_read_input = "LinearRead_PK h " + lin_address + " " + lin_len + auth_mode + " 0x" + pk_key;

    //console.log("input: " + linear_read_input);
    
    await sleep(500);

    ufRequest(linear_read_input, function() {
        var output = ufResponse();
        document.getElementById("linear_read_PK_input").value = output.Output;
        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: LinearRead_PK() - successful";
            document.getElementById("linRead_bytes_read_PK").value = output.ReturnedBytes;
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: LinearRead_PK() - error occurred";
        }

        document.getElementById("btnLinearRead_PK").disabled = false;
    });
    
}



//===========================================================================//
async function LinearWrite(e) {

    var input_data = document.getElementById("linear_write_input").value;

    var lin_address = document.getElementById("linear_write_linear_address").value;
    var lin_len = document.getElementById("linear_write_linear_length").value;

    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;
    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    if (lin_address == "") {
        alert("You must enter linear address from which you wish to start writing!");

        return false;
    } else if (lin_len == "") {
        alert("You must enter linear length - how many bytes you wish to write!");

        return false;
    }

    if (isHex(input_data) && ((input_data.length % 2) == 0)) {
        input_data = input_data.toUpperCase();

        document.getElementById("btnLinearWrite").disabled = true;

        var input_request = "LinearWrite " + "0x" + input_data + " " + lin_address + " " + lin_len + auth_mode + " " + key_index;
        //console.log(input_request);
        ufRequest(input_request, function() {
            var output = ufResponse();

            console.log(output);

            if (output.Status == "[0x00 (0)] UFR_OK") {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "LinearWrite() - successful";
                document.getElementById("linWrite_bytes_written").value = output.ReturnedBytes;
            } else {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "LinearWrite() - error occurred";
            }
            document.getElementById("btnLinearWrite").disabled = false;
        });
    } else {
        alert("Your data input for Linear Write is invalid.");
    }
}


async function LinearWriteAKM1()
{

    var input_data = document.getElementById("linear_write_akm1_input").value;

    var lin_address = document.getElementById("linear_write_linear_akm1_address").value;
    var lin_len = document.getElementById("linear_write_linear_akm1_length").value;
    var auth_mode = "";
    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    if (lin_address == "") {
        alert("You must enter linear address from which you wish to start writing!");

        return false;
    } else if (lin_len == "") {
        alert("You must enter linear length - how many bytes you wish to write!");

        return false;
    }

    if (isHex(input_data) && ((input_data.length % 2) == 0)) {
        input_data = input_data.toUpperCase();

        document.getElementById("btnLinearWrite").disabled = true;

        var input_request = "LinearWrite_AKM1 " + "0x" + input_data + " " + lin_address + " " + lin_len + auth_mode;
        //console.log(input_request);
        ufRequest(input_request, function() {
            var output = ufResponse();

            console.log(output);

            if (output.Status == "[0x00 (0)] UFR_OK") {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "LinearWrite_AKM1() - successful";
                document.getElementById("linWrite_akm1_bytes_written").value = output.ReturnedBytes;
            } else {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "LinearWrite_AKM1() - error occurred";
            }
            document.getElementById("btnLinearWrite").disabled = false;
        });
    } else {
        alert("Your data input for Linear Write is invalid.");
    }    
}

async function LinearWriteAKM2()
{

    var input_data = document.getElementById("linear_write_akm2_input").value;

    var lin_address = document.getElementById("linear_write_linear_akm2_address").value;
    var lin_len = document.getElementById("linear_write_linear_akm2_length").value;

    var auth_mode = "";
    
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
    
    
    if (lin_address == "") {
        alert("You must enter linear address from which you wish to start writing!");

        return false;
    } else if (lin_len == "") {
        alert("You must enter linear length - how many bytes you wish to write!");

        return false;
    }

    if (isHex(input_data) && ((input_data.length % 2) == 0)) {
        input_data = input_data.toUpperCase();

        document.getElementById("btnLinearWrite").disabled = true;

        var input_request = "LinearWrite_AKM2 " + "0x" + input_data + " " + lin_address + " " + lin_len + auth_mode;
        //console.log(input_request);
        ufRequest(input_request, function() {
            var output = ufResponse();

            console.log(output);

            if (output.Status == "[0x00 (0)] UFR_OK") {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "LinearWrite_AKM2() - successful";
                document.getElementById("linWrite_akm2_bytes_written").value = output.ReturnedBytes;
            } else {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "LinearWrite_AKM2() - error occurred";
            }
            document.getElementById("btnLinearWrite").disabled = false;
        });
    } else {
        alert("Your data input for Linear Write is invalid.");
    }        
}

async function LinearWritePK()
{

    var input_data = document.getElementById("linear_write_PK_input").value;

    var lin_address = document.getElementById("linear_write_linear_PK_address").value;
    var lin_len = document.getElementById("linear_write_linear_PK_length").value;

    var key_data = document.getElementById("pk_key").getElementsByClassName("card_key_PK_input");
   
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }
   
   
    var pk_key = "";
    
        for (var x = 0; x < key_data.length; x++) {
            pk_key = pk_key + d2h(key_data[x].value);
        }
    
    if (lin_address == "") {
        alert("You must enter linear address from which you wish to start writing!");

        return false;
    } else if (lin_len == "") {
        alert("You must enter linear length - how many bytes you wish to write!");

        return false;
    }

    if (isHex(input_data) && ((input_data.length % 2) == 0)) {
        input_data = input_data.toUpperCase();

        document.getElementById("btnLinearWrite").disabled = true;

        var input_request = "LinearWrite_PK " + "0x" + input_data + " " + lin_address + " " + lin_len + auth_mode + " 0x";
        //console.log(input_request);
        ufRequest(input_request, function() {
            var output = ufResponse();

            console.log(output);

            if (output.Status == "[0x00 (0)] UFR_OK") {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "LinearWrite_PK() - successful";
                document.getElementById("linWrite_PK_bytes_written").value = output.ReturnedBytes;
            } else {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "LinearWrite_PK() - error occurred";
            }
            document.getElementById("btnLinearWrite").disabled = false;
        });
    } else {
        alert("Your data input for Linear Write is invalid.");
    }    
}
