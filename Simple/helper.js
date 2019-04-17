function showAbout() {

    document.getElementById("simplest_example_main_div").style.display = "none";
    document.getElementById("about").style.display = "block";

}

function showHome() {

    document.getElementById("simplest_example_main_div").style.display = "block";
    document.getElementById("about").style.display = "none";

}

function keysToHex() {
    
    var A_input_data = document.getElementById("card_keys").getElementsByClassName("card_key_A_input");
    var B_input_data = document.getElementById("card_keys").getElementsByClassName("card_key_B_input");

    if (document.getElementById("ifHexChecked").checked) {
        for (var x = 0; x < A_input_data.length; x++) {
            A_input_data[x].value = d2h(A_input_data[x].value);
        }
        for (var x = 0; x < B_input_data.length; x++) {
            B_input_data[x].value = d2h(B_input_data[x].value);
        }

    } else {
        for (var x = 0; x < A_input_data.length; x++) {
            A_input_data[x].value = parseInt((A_input_data[x].value), 16);
        }
        for (var x = 0; x < B_input_data.length; x++) {
            B_input_data[x].value = parseInt((B_input_data[x].value), 16);
        }
    }
}

function d2h(d) {
    
    var h = (+d).toString(16).toUpperCase();
    return h.length === 1 ? '0' + h : h;
}


function ReaderKeysToHex() {

    var input_data = document.getElementById("reader_keys").getElementsByClassName("reader_key_input");

    if (document.getElementById("reader_ifHexChecked").checked) {
        for (var x = 0; x < input_data.length; x++) {
            input_data[x].value = d2h(input_data[x].value);
        }

    } else {
        for (var x = 0; x < input_data.length; x++) {
            input_data[x].value = parseInt((input_data[x].value), 16);
        }
    }
}

function AdvancedOption() {
    
    var input_data = document.getElementById("advanced_options").getElementsByClassName("adv_option");

    if (document.getElementById("checkAdvancedOption").checked) {

        for (var i = 0; i < input_data.length; i++) {
            input_data[i].disabled = false;
        }
    } else {
        for (var i = 0; i < input_data.length; i++) {
            input_data[i].disabled = true;
        }
    }

}

function showCardKeys() {

    document.getElementById("new_card_keys").style.display = "block";
    document.getElementById("new_reader_key").style.display = "none";

}

function showReaderKeys() {

    document.getElementById("new_card_keys").style.display = "none";
    document.getElementById("new_reader_key").style.display = "block";

}

function showLinearRead() {
    document.getElementById("Linear_read_wrapper").style.display = "block";
    document.getElementById("Linear_write_wrapper").style.display = "none";
}

function showLinearWrite() {
    document.getElementById("Linear_read_wrapper").style.display = "none";
    document.getElementById("Linear_write_wrapper").style.display = "block";
}

function linWriteLengthUpdate(str) {
    var lng = str.length;
    document.getElementById("linear_write_linear_length").value = Math.round(lng / 2);
}

async function Beep() {
    var input = "ReaderUISignal 1 1";

    ufRequest(input, function() {

    });
}


async function ReaderOpen(e) {

    if (document.getElementById("checkAdvancedOption").checked) {
        var input = "ReaderOpenEx";
        var reader_type = document.getElementById("reader_type").value;
        var port_name = document.getElementById("port_name").value;
        var port_interface = document.getElementById("port_interface").value;
        var additional_argument = document.getElementById("port_additional_arg").value;

        var command = input + " " + reader_type + " " + port_name + " " + port_interface + " " + additional_argument;

        console.log(command);

        ufRequest(command, async function() {
            var output = ufResponse();
            console.log(output);

            if (output.Status == "[0x00 (0)] UFR_OK") {
                document.getElementById("status").innerHTML = "Function status: " + "ReaderOpenEx() - successful";
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                Beep();
                await sleep(200);
                GetReaderSerial();
                await sleep(200);
                GetReaderType();
            } else {
                document.getElementById("status").innerHTML = "Function status: " + "ReaderOpenEx() - error occurred";
                document.getElementById("status").innerHTML = "Status: " + output.Status;
            }
        });

    } else {

        var input = "ReaderOpen";

        ufRequest(input, async function() {
            var output = ufResponse();

            console.log(output);

            if (output.Status == "[0x00 (0)] UFR_OK") {
                document.getElementById("function_status").innerHTML = "Function status: " + "ReaderOpen() - successful";
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                Beep();
                await sleep(200);
                GetReaderSerial();
                await sleep(200);
                GetReaderType();
            } else {
                document.getElementById("function_status").innerHTML = "Function status: ReaderOpen() - error occurred";
                document.getElementById("status").innerHTML = "Status: " + output.Status;
            }

        });

    }
}



function GetCardIdEx() {

    var input = "GetCardIdEx";

    ufRequest(input, function() {

        var output = ufResponse();
        console.log(output);
        document.getElementById("card_serial").value = output.CardUid;
        document.getElementById("card_type").value = output.CardType;
        document.getElementById("uid_size").value = output.UidSize;

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "GetCardIdEx() - successful";
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "GetCardIdEx() - error occurred";
        }
    });
}




async function LinearWrite(e) {


    var input_data = document.getElementById("linear_write_input").value;

    var lin_address = document.getElementById("linear_write_linear_address").value;
    var lin_len = document.getElementById("linear_write_linear_length").value;

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

        var input_request = "LinearWrite " + "0x" + input_data + " " + lin_address + " " + lin_len + " 0x60 0";
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

function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}


async function LinearRead() {


    var linear_read_input;
    var lin_address = document.getElementById("linear_read_linear_address").value;
    var lin_len = document.getElementById("linear_read_linear_length").value;

    if (lin_address == "") {
        alert("You must enter linear address from which you wish to start reading!");

        return false;
    } else if (lin_len == "") {
        alert("You must enter linear length - how many bytes you wish to read!");

        return false;
    }

    document.getElementById("btnLinearRead").disabled = true;

    linear_read_input = "LinearRead h " + lin_address + " " + lin_len + " 0x60 0";

    //console.log("input: " + linear_read_input);
    
   // await sleep(500);

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



async function NewCardKeys() {

    var key_A_data = document.getElementById("card_keys").getElementsByClassName("card_key_A_input");
    var key_B_data = document.getElementById("card_keys").getElementsByClassName("card_key_B_input");
    
    var keyA = "0x";
    var keyB = "0x";
    var auth_mode = "";
    var block_access_bits = "1"; // 0-7 refer to API 
    var sector_trailers_access_bits = "1"; // 0-7 refer to API 
    var sector_trailers_byte9 = "45";
    var key_index = "0";

    var input = "";

    if (document.getElementById("ifHexChecked").checked) {

        for (var x = 0; x < key_A_data.length; x++) {
            keyA = keyA + key_A_data[x].value;
        }

        for (var x = 0; x < key_B_data.length; x++) {
            keyB = keyB + key_B_data[x].value;
        }


    } else {

        for (var x = 0; x < key_A_data.length; x++) {
            keyA = keyA + d2h(key_A_data[x].value);
        }

        for (var x = 0; x < key_B_data.length; x++) {
            keyB = keyB + d2h(key_B_data[x].value);
        }
    }
    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = "0x60";
    } else {
        auth_mode = "0x61"
    }


    input = "LinearFormatCard " + keyA + " " + block_access_bits + " " + sector_trailers_access_bits + " " + sector_trailers_byte9 + " " + keyB + " " + auth_mode + " " + key_index;

    console.log(input);
    ufRequest(input, function() {

        var output = ufResponse();


        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("card_sectors_formatted").value = output.SectorsFormatted;
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard() - successful";
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard() - error occurred";
        }
        console.log(output);

    });
}


function NewReaderKey()
{
   key_data = document.getElementById("reader_keys").getElementsByClassName("reader_key_input");
   var key = "0x";
   var key_index = document.getElementById("reader_format_key_index").value;
   
   
   if (document.getElementById("reader_ifHexChecked").checked) {

        for (var x = 0; x < key_data.length; x++) {
            key = key + key_data[x].value;
        }

    } else {

        for (var x = 0; x < key_data.length; x++) {
            key = key + d2h(key_data[x].value);
        }
    }
    
    var input = "ReaderKeyWrite " + key + " " + key_index;
    //console.log(input);
    ufRequest(input, function(){
        
        var output = ufResponse();
        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ReaderKeyWrite() - successful";
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ReaderKeyWrite() - error occurred";
        }
        console.log(output);
        
    });
    
}




async function ReaderUISignal() {

    var light_value = "";
    var sound_value = "";

    var light_selection = document.getElementById("light_mode")
    light_value = light_selection.selectedIndex;

    var sound_selection = document.getElementById("sound_mode")
    sound_value = sound_selection.selectedIndex;

    var input = "ReaderUISignal " + light_value + " " + sound_value;

    ufRequest(input, function() {

        var output = ufResponse();
        
        if (output.Status == "[0x00 (0)] UFR_OK") {
            
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ReaderUISignal() - successful";
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ReaderUISignal() - error occurred";
        }

        console.log(output);

    });


}

async function GetReaderType() {
    var input = "GetReaderType h"
    ufRequest(input, function() {
        var output = ufResponse();
        console.log(output);
        document.getElementById("reader_info_reader_type").value = output.ReaderType;
    });
}

async function GetReaderSerial() {
    var input = "GetReaderSerialNumber d";
    ufRequest(input, function() {
        var output = ufResponse();

        document.getElementById("reader_info_reader_serial").value = output.ReaderSerialNumber;

        console.log(output);
    });
}


function isHex(h) {

    regexp = /^[0-9a-fA-F]+$/;

    if (regexp.test(h)) {
        return true;
    } else {
        return false;
    }

}