function LinearFormatCard_RK() {

    var input = "LinearFormatCard ";
    var block_access_bits_selection = document.getElementById("linear_format_card_rk_block_access_bits");

    var block_access_bits = block_access_bits_selection.selectedIndex;

    var trailer_access_bits_selection = document.getElementById("linear_format_card_rk_trailer_access_bits");

    var trailer_access_bits = trailer_access_bits_selection.selectedIndex;

    var trailer_access_bit9 = document.getElementById("linear_format_card_rk_trailer_access_byte9").value;

    var auth_mode = "";


    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    //key a
    var key_a = "0x";
    var key_b = "0x";

    var key_a_input_data = document.getElementById("sector_trailer_format_key_A").getElementsByClassName("sector_trailer_format_key_A_input");
    var key_b_input_data = document.getElementById("sector_trailer_format_key_B").getElementsByClassName("sector_trailer_format_key_B_input");

    if (format_keys_ifHexAChecked.checked) {

        for (var x = 0; x < key_a_input_data.length; x++) {
            key_a = key_a + key_a_input_data[x].value;

        }

    } else {


        for (var x = 0; x < key_a_input_data.length; x++) {
            key_a = key_a + d2h(key_a_input_data[x].value);

        }
    }
    //key b
    if (format_keys_ifHexBChecked.checked) {
        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + key_b_input_data[x].value;

        }

    } else {


        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + d2h(key_b_input_data[x].value);

        }
    }

    input = input + key_a + " " + block_access_bits + " " + trailer_access_bits + " " + trailer_access_bit9 + " " + key_b + auth_mode + " " + key_index;
    //console.log(input);

    ufRequest(input, function() {
        var output = ufResponse();

        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard() - error occurred";

        }
    });
}

function LinearFormatCard_AKM1() {

    var input = "LinearFormatCard_AKM1 ";
    var block_access_bits_selection = document.getElementById("linear_format_card_akm1_block_access_bits");

    var block_access_bits = block_access_bits_selection.selectedIndex;

    var trailer_access_bits_selection = document.getElementById("linear_format_card_akm1_trailer_access_bits");

    var trailer_access_bits = trailer_access_bits_selection.selectedIndex;

    var trailer_access_bit9 = document.getElementById("linear_format_card_akm1_trailer_access_byte9").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    //key a
    var key_a = "0x";
    var key_b = "0x";

    var key_a_input_data = document.getElementById("sector_trailer_format_key_A").getElementsByClassName("sector_trailer_format_key_A_input");
    var key_b_input_data = document.getElementById("sector_trailer_format_key_B").getElementsByClassName("sector_trailer_format_key_B_input");

    if (format_keys_ifHexAChecked.checked) {

        for (var x = 0; x < key_a_input_data.length; x++) {
            key_a = key_a + key_a_input_data[x].value;

        }

    } else {


        for (var x = 0; x < key_a_input_data.length; x++) {
            key_a = key_a + d2h(key_a_input_data[x].value);

        }
    }
    //key b
    if (format_keys_ifHexBChecked.checked) {
        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + key_b_input_data[x].value;

        }

    } else {


        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + d2h(key_b_input_data[x].value);

        }
    }

    input = input + key_a + " " + block_access_bits + " " + trailer_access_bits + " " + trailer_access_bit9 + " " + key_b + auth_mode;
    //console.log(input);

    ufRequest(input, function() {
        var output = ufResponse();

        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard_AKM1() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard_AKM1() - error occurred";

        }
    });
}

function LinearFormatCard_AKM2() {

    var input = "LinearFormatCard_AKM2 ";
    var block_access_bits_selection = document.getElementById("linear_format_card_akm2_block_access_bits");

    var block_access_bits = block_access_bits_selection.selectedIndex;

    var trailer_access_bits_selection = document.getElementById("linear_format_card_akm2_trailer_access_bits");

    var trailer_access_bits = trailer_access_bits_selection.selectedIndex;

    var trailer_access_bit9 = document.getElementById("linear_format_card_akm2_trailer_access_byte9").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    //key a
    var key_a = "0x";
    var key_b = "0x";

    var key_a_input_data = document.getElementById("sector_trailer_format_key_A").getElementsByClassName("sector_trailer_format_key_A_input");
    var key_b_input_data = document.getElementById("sector_trailer_format_key_B").getElementsByClassName("sector_trailer_format_key_B_input");

    if (format_keys_ifHexAChecked.checked) {

        for (var x = 0; x < key_a_input_data.length; x++) {
            key_a = key_a + key_a_input_data[x].value;

        }

    } else {


        for (var x = 0; x < key_a_input_data.length; x++) {
            key_a = key_a + d2h(key_a_input_data[x].value);

        }
    }
    //key b
    if (format_keys_ifHexBChecked.checked) {
        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + key_b_input_data[x].value;

        }

    } else {


        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + d2h(key_b_input_data[x].value);

        }
    }

    input = input + key_a + " " + block_access_bits + " " + trailer_access_bits + " " + trailer_access_bit9 + " " + key_b + auth_mode;
    //console.log(input);

    ufRequest(input, function() {
        var output = ufResponse();

        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard_AKM2() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard_AKM2() - error occurred";

        }
    });
}

function LinearFormatCard_PK() {

    var input = "LinearFormatCard_PK ";
    var block_access_bits_selection = document.getElementById("linear_format_card_PK_block_access_bits");

    var block_access_bits = block_access_bits_selection.selectedIndex;

    var trailer_access_bits_selection = document.getElementById("linear_format_card_PK_trailer_access_bits");

    var trailer_access_bits = trailer_access_bits_selection.selectedIndex;

    var trailer_access_bit9 = document.getElementById("linear_format_card_PK_trailer_access_byte9").value;

    var auth_mode = "";

    if (document.getElementById("radio_auth_A_mode").checked) {
        auth_mode = " 0x60";
    } else {
        auth_mode = " 0x61"
    }

    //key a
    var key_a = "0x";
    var key_b = "0x";

    var key_a_input_data = document.getElementById("sector_trailer_format_key_A").getElementsByClassName("sector_trailer_format_key_A_input");
    var key_b_input_data = document.getElementById("sector_trailer_format_key_B").getElementsByClassName("sector_trailer_format_key_B_input");

    if (format_keys_ifHexAChecked.checked) {

        for (var x = 0; x < key_a_input_data.length; x++) {
            key_a = key_a + key_a_input_data[x].value;

        }

    } else {


        for (var x = 0; x < key_a_input_data.length; x++) {
            key_a = key_a + d2h(key_a_input_data[x].value);

        }
    }
    //key b
    if (format_keys_ifHexBChecked.checked) {
        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + key_b_input_data[x].value;

        }

    } else {


        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + d2h(key_b_input_data[x].value);

        }
    }
    var key_data = document.getElementById("pk_key").getElementsByClassName("card_key_PK_input");

    var pk_key = "0x";
    for (var x = 0; x < key_data.length; x++) {
        pk_key = pk_key + d2h(key_data[x].value);

    }

    input = input + key_a + " " + block_access_bits + " " + trailer_access_bits + " " + trailer_access_bit9 + " " + key_b + auth_mode + " " + pk_key;
    //console.log(input);

    ufRequest(input, function() {
        var output = ufResponse();

        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard_PK() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "LinearFormatCard_PK() - error occurred";

        }
    });
}