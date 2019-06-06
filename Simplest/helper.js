function showAbout() {

    document.getElementById("simplest_example_main_div").style.display = "none";
    document.getElementById("about").style.display = "block";

}

function showHome() {

    document.getElementById("simplest_example_main_div").style.display = "block";
    document.getElementById("about").style.display = "none";

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

        ufRequest(command, function() {
            var output = ufResponse();
            console.log(output);

            if (output.Status == "[0x00 (0)] UFR_OK") {
                document.getElementById("function_status").innerHTML = "Function status: " + "ReaderOpenEx() - successful";
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                Beep();
            } else {
                document.getElementById("function_status").innerHTML = "Function status: " + "ReaderOpenEx() - error occurred";
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
        document.getElementsByName("simplest_card_serial")[0].value = output.CardUid;
        document.getElementsByName("simplest_card_type")[0].value = output.CardType;
        document.getElementsByName("simplest_uid_size")[0].value = output.UidSize;

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "GetCardIdEx() - successful";
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "GetCardIdEx() - error occurred";
        }

    });
}



function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}

async function LinearRead() {

    document.getElementById("btnLinearRead").disabled = true;

    var input = "GetCardSize d d";
    var linear_read_input;
    ufRequest(input, function() {
        var output = ufResponse();
        console.log(output);

        var card_size = output.LinearSize;
        console.log(card_size);

        linear_read_input = "LinearRead h 0 " + card_size + " 0x60 0";
    });

    await sleep(500);

    ufRequest(linear_read_input, function() {
        var output = ufResponse();
        document.getElementById("linear_read_input").value = output.Data;
        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearRead() - successful";
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearRead() - error occurred";
        }

        document.getElementById("btnLinearRead").disabled = false;
    });

}

async function LinearWrite(e) {
    document.getElementById("btnLinearWrite").disabled = true;
    var input_data = document.getElementById("linear_write_input").value;

    if (isHex(input_data) && ((input_data.length % 2) == 0)) {
        input_data = input_data.toUpperCase();

        var input_request = "LinearWrite " + "0x" + input_data + " 0 " + input_data.length / 2 + " 0x60 0";

        ufRequest(input_request, function() {
            var output = ufResponse();

            console.log(output);

            if (output.Status == "[0x00 (0)] UFR_OK") {
                document.getElementById("status").innerHTML = "Status: " + output.Status;
                document.getElementById("function_status").innerHTML = "Function status: " + "LinearWrite() - successful";
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


async function FormatCard() {

    var new_key_A = "0xFFFFFFFFFFFF";
    var new_key_B = "0xFFFFFFFFFFFF";
    var block_access_bits = "0"; // 0-7 refer to API 
    var sector_trailers_access_bits = "1"; // 0-7 refer to API 
    var sector_trailers_byte9 = "69";
    var auth_mode = "0x60" // MIFARE_AUTHENT1A || 0x61 - MIFARE_AUTHENT1B
    var key_index = "0";

    var input = "LinearFormatCard " + " " + new_key_A + " " + block_access_bits + " " + sector_trailers_access_bits + " " + sector_trailers_byte9 + " " + new_key_B + " " + auth_mode + " " + key_index;


    ufRequest(input, function() {

        var output = ufResponse();


        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard() - successful";
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard() - error occurred";
        }
        console.log(output);

    });
}

function charcountupdate(str) {
    var lng = str.length;
    document.getElementById("charcount").innerHTML = Math.round(lng / 2) + ' Bytes';
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


function isHex(h) {

    regexp = /^[0-9a-fA-F]+$/;

    if (regexp.test(h)) {
        return true;
    } else {
        return false;
    }

}