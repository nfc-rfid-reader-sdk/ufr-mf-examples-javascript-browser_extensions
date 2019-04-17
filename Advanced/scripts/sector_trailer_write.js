function SectorTrailerWrite_RK() {

    var input = "SectorTrailerWrite ";

    var addressing_mode_selection = document.getElementById("sector_trailer_write_rk_addressing_mode");

    var addressing_mode = addressing_mode_selection.selectedIndex;

    var block_or_sector_address = document.getElementById("sector_trailer_write_rk_block_sector_address").value;

    var access_bit_0_selection = document.getElementById("sector_trailer_write_rk_access_bit_0");

    var access_bit_1_selection = document.getElementById("sector_trailer_write_rk_access_bit_1");

    var access_bit_2_selection = document.getElementById("sector_trailer_write_rk_access_bit_2");

    var access_bit_0 = access_bit_0_selection.selectedIndex;

    var access_bit_1 = access_bit_1_selection.selectedIndex;

    var access_bit_2 = access_bit_2_selection.selectedIndex;

    var trailer_access_bits_selection = document.getElementById("sector_trailer_write_sector_trailer_access_bits_rk");

    var trailer_access_bits = trailer_access_bits_selection.selectedIndex;

    var trailer_access_bit9 = document.getElementById("sector_trailer_write_rk_trailer_access_byte9").value;

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

    var key_selection = document.getElementById("key_auth_indexes")
    var key_index = key_selection.selectedIndex;

    input = input + addressing_mode + " " + block_or_sector_address + " " + key_a + " " + access_bit_0 + " " + access_bit_1 + " " + access_bit_2 + " " + trailer_access_bits + " " + trailer_access_bit9 + " " + key_b + auth_mode + " " + key_index;
    //console.log(input);


    ufRequest(input, function() {

        var output = ufResponse();

        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "SectorTrailerWrite() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "SectorTrailerWrite() - error occurred";

        }
    });
}

function SectorTrailerWrite_AKM1() {

    var input = "SectorTrailerWrite_AKM1 ";

    var addressing_mode_selection = document.getElementById("sector_trailer_write_akm1_addressing_mode");

    var addressing_mode = addressing_mode_selection.selectedIndex;

    var block_or_sector_address = document.getElementById("sector_trailer_write_akm1_block_sector_address").value;

    var access_bit_0_selection = document.getElementById("sector_trailer_write_akm1_access_bit_0");

    var access_bit_1_selection = document.getElementById("sector_trailer_write_akm1_access_bit_1");

    var access_bit_2_selection = document.getElementById("sector_trailer_write_akm1_access_bit_2");

    var access_bit_0 = access_bit_0_selection.selectedIndex;

    var access_bit_1 = access_bit_1_selection.selectedIndex;

    var access_bit_2 = access_bit_2_selection.selectedIndex;

    var trailer_access_bits_selection = document.getElementById("sector_trailer_write_sector_trailer_access_bits_akm1");

    var trailer_access_bits = trailer_access_bits_selection.selectedIndex;

    var trailer_access_bit9 = document.getElementById("sector_trailer_write_akm1_trailer_access_byte9").value;

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

    if (format_keys_ifHexBChecked.checked) {
        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + key_b_input_data[x].value;
        }

    } else {


        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + d2h(key_b_input_data[x].value);
        }
    }

    //key b
    input = input + addressing_mode + " " + block_or_sector_address + " " + key_a + " " + access_bit_0 + " " + access_bit_1 + " " + access_bit_2 + " " + trailer_access_bits + " " + trailer_access_bit9 + " " + key_b + auth_mode;
    //console.log(input);


    ufRequest(input, function() {

        var output = ufResponse();

        console.log(output);


        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "SectorTrailerWrite_AKM1() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "SectorTrailerWrite_AKM1() - error occurred";

        }
    });
}

function SectorTrailerWrite_AKM2() {
    var input = "SectorTrailerWrite_AKM2 ";

    var addressing_mode_selection = document.getElementById("sector_trailer_write_akm2_addressing_mode");

    var addressing_mode = addressing_mode_selection.selectedIndex;

    var block_or_sector_address = document.getElementById("sector_trailer_write_akm2_block_sector_address").value;

    var access_bit_0_selection = document.getElementById("sector_trailer_write_akm2_access_bit_0");

    var access_bit_1_selection = document.getElementById("sector_trailer_write_akm2_access_bit_1");

    var access_bit_2_selection = document.getElementById("sector_trailer_write_akm2_access_bit_2");

    var access_bit_0 = access_bit_0_selection.selectedIndex;

    var access_bit_1 = access_bit_1_selection.selectedIndex;

    var access_bit_2 = access_bit_2_selection.selectedIndex;

    var trailer_access_bits_selection = document.getElementById("sector_trailer_write_sector_trailer_access_bits_akm2");

    var trailer_access_bits = trailer_access_bits_selection.selectedIndex;

    var trailer_access_bit9 = document.getElementById("sector_trailer_write_akm2_trailer_access_byte9").value;

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

    if (format_keys_ifHexBChecked.checked) {
        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + key_b_input_data[x].value;

        }

    } else {

        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + d2h(key_b_input_data[x].value);

        }
    }

    input = input + addressing_mode + " " + block_or_sector_address + " " + key_a + " " + access_bit_0 + " " + access_bit_1 + " " + access_bit_2 + " " + trailer_access_bits + " " + trailer_access_bit9 + " " + key_b + auth_mode;
    //console.log(input);

    ufRequest(input, function() {

        var output = ufResponse();

        console.log(output);

        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "SectorTrailerWrite_AKM2() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "SectorTrailerWrite_AKM2() - error occurred";

        }
    });
}

function SectorTrailerWrite_PK() {
    var input = "SectorTrailerWrite_PK ";

    var addressing_mode_selection = document.getElementById("sector_trailer_write_PK_addressing_mode");

    var addressing_mode = addressing_mode_selection.selectedIndex;

    var block_or_sector_address = document.getElementById("sector_trailer_write_PK_block_sector_address").value;

    var access_bit_0_selection = document.getElementById("sector_trailer_write_PK_access_bit_0");

    var access_bit_1_selection = document.getElementById("sector_trailer_write_PK_access_bit_1");

    var access_bit_2_selection = document.getElementById("sector_trailer_write_PK_access_bit_2");

    var access_bit_0 = access_bit_0_selection.selectedIndex;

    var access_bit_1 = access_bit_1_selection.selectedIndex;

    var access_bit_2 = access_bit_2_selection.selectedIndex;

    var trailer_access_bits_selection = document.getElementById("sector_trailer_write_sector_trailer_access_bits_PK");

    var trailer_access_bits = trailer_access_bits_selection.selectedIndex;

    var trailer_access_bit9 = document.getElementById("sector_trailer_write_PK_trailer_access_byte9").value;

    var auth_mode = "";

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

    if (format_keys_ifHexBChecked.checked) {
        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + key_b_input_data[x].value;

        }

    } else {


        for (var x = 0; x < key_b_input_data.length; x++) {
            key_b = key_b + d2h(key_b_input_data[x].value);

        }
    }



    input = input + addressing_mode + " " + block_or_sector_address + " " + key_a + " " + access_bit_0 + " " + access_bit_1 + " " + access_bit_2 + " " + trailer_access_bits + " " + trailer_access_bit9 + " " + key_b + auth_mode + " " + pk_key;
    //console.log(input);


    ufRequest(input, function() {

        var output = ufResponse();

        console.log(output);


        if (output.Status == "[0x00 (0)] UFR_OK") {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "SectorTrailerWrite_PK() - successful";

        } else {
            document.getElementById("status").innerHTML = "Status: " + output.Status;
            document.getElementById("function_status").innerHTML = "Function status: " + "SectorTrailerWrite_PK() - error occurred";

        }
    });
}