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
                Beep();
                await sleep(150);
                GetReaderSerial();
                await sleep(150);
                GetReaderType();
            } else {
                document.getElementById("function_status").innerHTML = "Function status: ReaderOpen() - error occurred";
                document.getElementById("status").innerHTML = "Status: " + output.Status;
            }

        });
    }
}

function SoftRestart()
{
    var input = "ReaderSoftRestart";
    
    ufRequest(input, function(){
        
        var output = ufResponse();
        console.log(output);
        
        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ReaderSoftRestart() - successful";
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ReaderSoftRestart() - error occurred";
        }
    });
}

function ReaderReset()
{
    var input = "ReaderReset";
    
    ufRequest(input, function(){
        
        var output = ufResponse();
        console.log(output);
        
        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ReaderReset() - successful";
        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "ReaderReset() - error occurred";
        }
    });
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


async function NewCardKeys() {

    var key_A_data = document.getElementById("card_keys").getElementsByClassName("card_key_A_input");
    var key_B_data = document.getElementById("card_keys").getElementsByClassName("card_key_B_input");
    console.log(key_A_data);

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


function NewReaderKey() {
    key_data = document.getElementById("reader_keys").getElementsByClassName("reader_key_input");
    var key = "0x";

    var key_selection = document.getElementById("key_indexes")
    var key_index = key_selection.selectedIndex;


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
    console.log(input);
    ufRequest(input, function() {

        var output = ufResponse();

        console.log(output);

    });
}

async function WriteUserData() {
    var input = "WriteUserData 0x";
    if (document.getElementById("NewUserData").value.length > 32) {
        alert("New user data must be 16 or less bytes long!");

        return false;
    }

    if (document.getElementById("NewUserData").value.length <2){

        alert("New user data should be at least 1 byte long (e.g FF");

        return false;
    }


    input = input + document.getElementById("NewUserData").value;
    console.log(input);

    ufRequest(input, function() {

        var output = ufResponse();

        console.log(output);

        if (data.Status == "[0x00 (0)] UFR_OK") {
                    
            document.getElementById("status").innerHTML = "Status: " + data.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "WriteUserData() - successful";
        } else {
            document.getElementById("status").innerHTML = "Status: " + data.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "WriteUserData() - error occurred";
        }

    });

    await sleep(250)

    var read_data = "ReadUserData";

    ufRequest(read_data, function() {

        var data = ufResponse();

        //console.log(data);

        document.getElementById("UserData").value = data.UserData;

    });
}
