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

function ShowUserData() {

    document.getElementById("reader_keys").style.display = "none";
    document.getElementById("write_user_data_div").style.display = "block";
}

function ShowReaderKey() {

    document.getElementById("reader_keys").style.display = "block";
    document.getElementById("write_user_data_div").style.display = "none";

}


function formatKeyAtoHex(){
    
    var input_data = document.getElementById("sector_trailer_format_key_A").getElementsByClassName("sector_trailer_format_key_A_input");

    if (document.getElementById("format_keys_ifHexAChecked").checked) {
        for (var x = 0; x < input_data.length; x++) {
            input_data[x].value = d2h(input_data[x].value);
        }

    } else {
        for (var x = 0; x < input_data.length; x++) {
            input_data[x].value = parseInt((input_data[x].value), 16);
        }
    }
}

function formatKeyBtoHex(){
    
    var input_data = document.getElementById("sector_trailer_format_key_B").getElementsByClassName("sector_trailer_format_key_B_input");

    if (document.getElementById("format_keys_ifHexBChecked").checked) {
        for (var x = 0; x < input_data.length; x++) {
            input_data[x].value = d2h(input_data[x].value);
        }

    } else {
        for (var x = 0; x < input_data.length; x++) {
            input_data[x].value = parseInt((input_data[x].value), 16);
        }
    }
}


// // // // // // // // // // // // // // // // // // // // // // // // // // //

// FUNCTIONS MENUS // // // // // /// // 

// // // // // // // // // // // // // // // // // // // // // // // // // // //

function showLinearReadWriteMenu() {
    document.getElementById("currentMenu").innerHTML = "Linear Read/Write (AKM1, AKM2, PK)";
    document.getElementById("akm1_banner").style.display = "block"; 
    document.getElementById("auth_check").style.display = "block"; 
    document.getElementById("currentMenu").style.display = "block"; 

    document.getElementById("linear_read_write_wrapper").style.display="block";
    document.getElementById("block_read_write_wrapper").style.display="none";
    document.getElementById("block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_read_write_wrapper").style.display="none";
    document.getElementById("value_block_increment_decrement_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_increment_decrement_wrapper").style.display="none";
    document.getElementById("format_keys_wrapper").style.display="none";
    document.getElementById("sector_trailer_write_wrapper").style.display="none";
    document.getElementById("linear_format_card_wrapper").style.display="none";
    document.getElementById("view_all").style.display = "none";
    
}
function showBlockReadWriteMenu() {
    document.getElementById("currentMenu").innerHTML = "Block Read/Write (AKM1, AKM2, PK)";
    document.getElementById("akm1_banner").style.display = "block"; 
    document.getElementById("auth_check").style.display = "block"; 
    document.getElementById("currentMenu").style.display = "block"; 

    document.getElementById("linear_read_write_wrapper").style.display="none";
    document.getElementById("block_read_write_wrapper").style.display="block";
    document.getElementById("block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_read_write_wrapper").style.display="none";
    document.getElementById("value_block_increment_decrement_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_increment_decrement_wrapper").style.display="none";
    document.getElementById("format_keys_wrapper").style.display="none";
    document.getElementById("sector_trailer_write_wrapper").style.display="none";
    document.getElementById("linear_format_card_wrapper").style.display="none";  
    document.getElementById("view_all").style.display = "none";
    }

function showBlockInSectorReadWriteMenu() {
    document.getElementById("currentMenu").innerHTML = "BlockInSector Read/Write (AKM1, AKM2, PK)";
    document.getElementById("akm1_banner").style.display = "block"; 
    document.getElementById("auth_check").style.display = "block"; 
    document.getElementById("currentMenu").style.display = "block"; 
    

    document.getElementById("linear_read_write_wrapper").style.display="none";
    document.getElementById("block_read_write_wrapper").style.display="none";
    document.getElementById("block_in_sector_read_write_wrapper").style.display="block";
    document.getElementById("value_block_read_write_wrapper").style.display="none";
    document.getElementById("value_block_increment_decrement_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_increment_decrement_wrapper").style.display="none";
    document.getElementById("format_keys_wrapper").style.display="none";
    document.getElementById("sector_trailer_write_wrapper").style.display="none";
    document.getElementById("linear_format_card_wrapper").style.display="none";
    document.getElementById("view_all").style.display = "none";
}

function showValueBlockReadWriteMenu() {
    document.getElementById("currentMenu").innerHTML = "ValueBlock Read/Write (AKM1, AKM2, PK)";
    document.getElementById("akm1_banner").style.display = "block"; 
    document.getElementById("auth_check").style.display = "block"; 
    document.getElementById("currentMenu").style.display = "block"; 

    document.getElementById("linear_read_write_wrapper").style.display="none";
    document.getElementById("block_read_write_wrapper").style.display="none";
    document.getElementById("block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_read_write_wrapper").style.display="block";
    document.getElementById("value_block_increment_decrement_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_increment_decrement_wrapper").style.display="none";
    document.getElementById("format_keys_wrapper").style.display="none";
    document.getElementById("sector_trailer_write_wrapper").style.display="none";
    document.getElementById("linear_format_card_wrapper").style.display="none";
    document.getElementById("view_all").style.display = "none";
}

function showValueBlockIncrementDecrementMenu() {
    document.getElementById("currentMenu").innerHTML = "ValueBlock Increment/Decrement (AKM1, AKM2, PK)";
    document.getElementById("akm1_banner").style.display = "block"; 
    document.getElementById("auth_check").style.display = "block"; 
    document.getElementById("currentMenu").style.display = "block"; 

    document.getElementById("linear_read_write_wrapper").style.display="none";
    document.getElementById("block_read_write_wrapper").style.display="none";
    document.getElementById("block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_read_write_wrapper").style.display="none";
    document.getElementById("value_block_increment_decrement_wrapper").style.display="block";
    document.getElementById("value_block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_increment_decrement_wrapper").style.display="none";
    document.getElementById("format_keys_wrapper").style.display="none";
    document.getElementById("sector_trailer_write_wrapper").style.display="none";
    document.getElementById("linear_format_card_wrapper").style.display="none";   
    document.getElementById("view_all").style.display = "none";  
}

function showValueBlockInSectorReadWriteMenu() {
    document.getElementById("currentMenu").innerHTML = "ValueBlockInSector Read/Write (AKM1, AKM2, PK)";
    document.getElementById("akm1_banner").style.display = "block"; 
    document.getElementById("auth_check").style.display = "block"; 
    document.getElementById("currentMenu").style.display = "block"; 

    document.getElementById("linear_read_write_wrapper").style.display="none";
    document.getElementById("block_read_write_wrapper").style.display="none";
    document.getElementById("block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_read_write_wrapper").style.display="none";
    document.getElementById("value_block_increment_decrement_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_read_write_wrapper").style.display="block";
    document.getElementById("value_block_in_sector_increment_decrement_wrapper").style.display="none";
    document.getElementById("format_keys_wrapper").style.display="none";
    document.getElementById("sector_trailer_write_wrapper").style.display="none";
    document.getElementById("linear_format_card_wrapper").style.display="none";    
    document.getElementById("view_all").style.display = "none";
}

function showValueBlockInSectorIncrementDecrementMenu(){
    document.getElementById("currentMenu").innerHTML = "ValueBlockInSector Increment/Decrement (AKM1, AKM2, PK)";
    document.getElementById("akm1_banner").style.display = "block"; 
    document.getElementById("auth_check").style.display = "block"; 
    document.getElementById("currentMenu").style.display = "block"; 

    document.getElementById("linear_read_write_wrapper").style.display="none";
    document.getElementById("block_read_write_wrapper").style.display="none";
    document.getElementById("block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_read_write_wrapper").style.display="none";
    document.getElementById("value_block_increment_decrement_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_increment_decrement_wrapper").style.display="block";
    document.getElementById("format_keys_wrapper").style.display="none";
    document.getElementById("sector_trailer_write_wrapper").style.display="none";
    document.getElementById("linear_format_card_wrapper").style.display="none"; 
    document.getElementById("view_all").style.display = "none";  
}

function showSectorTrailerWriteMenu(){
    document.getElementById("currentMenu").innerHTML = "Sector Trailer Write (AKM1, AKM2, PK)";
    document.getElementById("akm1_banner").style.display = "block"; 
    document.getElementById("auth_check").style.display = "block"; 
    document.getElementById("currentMenu").style.display = "block"; 

    document.getElementById("linear_read_write_wrapper").style.display="none";
    document.getElementById("block_read_write_wrapper").style.display="none";
    document.getElementById("block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_read_write_wrapper").style.display="none";
    document.getElementById("value_block_increment_decrement_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_increment_decrement_wrapper").style.display="none";
    document.getElementById("format_keys_wrapper").style.display="block";
    document.getElementById("sector_trailer_write_wrapper").style.display="block";
    document.getElementById("linear_format_card_wrapper").style.display="none";   
    document.getElementById("view_all").style.display = "none";
}

function showLinearFormatCardMenu(){
    document.getElementById("currentMenu").innerHTML = "Linear Format Card (AKM1, AKM2, PK)";
    document.getElementById("currentMenu").style.display="block";
    document.getElementById("akm1_banner").style.display = "block"; 
    document.getElementById("auth_check").style.display = "block"; 

    document.getElementById("linear_read_write_wrapper").style.display="none";
    document.getElementById("block_read_write_wrapper").style.display="none";
    document.getElementById("block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_read_write_wrapper").style.display="none";
    document.getElementById("value_block_increment_decrement_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_increment_decrement_wrapper").style.display="none";
    document.getElementById("format_keys_wrapper").style.display="block";
    document.getElementById("sector_trailer_write_wrapper").style.display="none";
    document.getElementById("linear_format_card_wrapper").style.display="block";
    document.getElementById("view_all").style.display = "none";
    ShowAuthDiv();
}

function showViewAll(){
    document.getElementById("currentMenu").style.display="none";
    document.getElementById("akm1_banner").style.display = "none"; 
    document.getElementById("auth_check").style.display = "none"; 
    
    document.getElementById("linear_read_write_wrapper").style.display="none";
    document.getElementById("block_read_write_wrapper").style.display="none";
    document.getElementById("block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_read_write_wrapper").style.display="none";
    document.getElementById("value_block_increment_decrement_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_read_write_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_increment_decrement_wrapper").style.display="none";
    document.getElementById("format_keys_wrapper").style.display="nones";
    document.getElementById("sector_trailer_write_wrapper").style.display="none";
    document.getElementById("linear_format_card_wrapper").style.display="none";   
    document.getElementById("view_all").style.display = "none"; 

    document.getElementById("view_all").style.display = "block";     
    
    
}

function ShowAuthDiv(){
    document.getElementById("akm1_banner").style.display = "block"; 
    document.getElementById("auth_check").style.display = "block";   
}


async function showReaderHWFW(){
    
var request_HW = "GetReaderHardwareVersion d d";
var request_FW = "GetReaderFirmwareVersion d d";

var fw_major = "";
var fw_minor = "";
var hw_minor = "";
var hw_major = "";
ufRequest(request_FW, function(){
    var output = ufResponse();
    console.log(output);
     fw_major = output.Major;
     fw_minor = output.Minor;
});
await sleep(100);
ufRequest(request_HW, function(){
    var response = ufResponse();

    console.log(response);
    hw_major = response.Major;
    hw_minor = response.Minor;
});
await sleep(100);
var hw = "Hardware version: " + hw_major + "." + hw_minor;
var fw = "Firmware version: "+ fw_major + "." + fw_minor;
await sleep(100);
alert(hw + "\n" + fw);

}
// // // // // // // // // // // // // // // // // // // // // // // // // // //

// SUB FUNCTIONS MENUS // // // // // /// // 

// // // // // // // // // // // // // // // // // // // // // // // // // // //


function showBlockRead(){
    document.getElementById("block_read_wrapper").style.display="block";
    document.getElementById("block_write_wrapper").style.display="none";
    
}

function showBlockWrite(){
   document.getElementById("block_read_wrapper").style.display="none";
   document.getElementById("block_write_wrapper").style.display="block";
     
}

function showBlockInSectorRead(){
    document.getElementById("block_in_sector_read_wrapper").style.display="block";
    document.getElementById("block_in_sector_write_wrapper").style.display="none";
}

function showBlockInSectorWrite(){
    document.getElementById("block_in_sector_read_wrapper").style.display="none";
    document.getElementById("block_in_sector_write_wrapper").style.display="block";
}

function showValueBlockRead(){
    document.getElementById("value_block_read_wrapper").style.display="block";
    document.getElementById("value_block_write_wrapper").style.display="none";
}

function showValueBlockWrite(){
    document.getElementById("value_block_read_wrapper").style.display="none";
    document.getElementById("value_block_write_wrapper").style.display="block";
}

function showValueBlockIncrement(){
    document.getElementById("value_block_increment_wrapper").style.display="block";
    document.getElementById("value_block_decrement_wrapper").style.display="none";
}

function showValueBlockDecrement(){
    document.getElementById("value_block_increment_wrapper").style.display="none";
    document.getElementById("value_block_decrement_wrapper").style.display="block";
}

function showValueBlockInSectorRead(){
    document.getElementById("value_block_in_sector_read_wrapper").style.display="block";
    document.getElementById("value_block_in_sector_write_wrapper").style.display="none";
}

function showValueBlockInSectorWrite(){
    document.getElementById("value_block_in_sector_read_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_write_wrapper").style.display="block";
}

function showValueBlockInSectorIncrement(){
    document.getElementById("value_block_in_sector_increment_wrapper").style.display="block";
    document.getElementById("value_block_in_sector_decrement_wrapper").style.display="none";
}

function showValueBlockInSectorDecrement(){
    document.getElementById("value_block_in_sector_increment_wrapper").style.display="none";
    document.getElementById("value_block_in_sector_decrement_wrapper").style.display="block";
}

function showSectorTrailerWriteRK(){
    document.getElementById("sector_trailer_write_rk").style.display="block";
    document.getElementById("sector_trailer_write_akm1").style.display="none";
    document.getElementById("sector_trailer_write_akm2").style.display="none";
    document.getElementById("sector_trailer_write_PK").style.display="none";
}

function showSectorTrailerWriteAKM1(){
    document.getElementById("sector_trailer_write_rk").style.display="none";
    document.getElementById("sector_trailer_write_akm1").style.display="block";
    document.getElementById("sector_trailer_write_akm2").style.display="none";
    document.getElementById("sector_trailer_write_PK").style.display="none";
}

function showSectorTrailerWriteAKM2(){
    document.getElementById("sector_trailer_write_rk").style.display="none";
    document.getElementById("sector_trailer_write_akm1").style.display="none";
    document.getElementById("sector_trailer_write_akm2").style.display="block";
    document.getElementById("sector_trailer_write_PK").style.display="none";
}

function showSectorTrailerWritePK(){
    document.getElementById("sector_trailer_write_rk").style.display="none";
    document.getElementById("sector_trailer_write_akm1").style.display="none";
    document.getElementById("sector_trailer_write_akm2").style.display="none";
    document.getElementById("sector_trailer_write_PK").style.display="block";
}

function showLinearFormatCardRK(){
    document.getElementById("linear_format_card_rk").style.display="block";
    document.getElementById("linear_format_card_akm1").style.display="none";
    document.getElementById("linear_format_card_akm2").style.display="none";
    document.getElementById("linear_format_card_PK").style.display="none";
}

function showLinearFormatCardAKM1(){
    document.getElementById("linear_format_card_rk").style.display="none";
    document.getElementById("linear_format_card_akm1").style.display="block";
    document.getElementById("linear_format_card_akm2").style.display="none";
    document.getElementById("linear_format_card_PK").style.display="none";
}

function showLinearFormatCardAKM2(){
    document.getElementById("linear_format_card_rk").style.display="none";
    document.getElementById("linear_format_card_akm1").style.display="none";
    document.getElementById("linear_format_card_akm2").style.display="block";
    document.getElementById("linear_format_card_PK").style.display="none";
}

function showLinearFormatCardPK(){
    document.getElementById("linear_format_card_rk").style.display="none";
    document.getElementById("linear_format_card_akm1").style.display="none";
    document.getElementById("linear_format_card_akm2").style.display="none";
    document.getElementById("linear_format_card_PK").style.display="block";
}

// // // // // // // // // // // // // // // // // // // // // // // // // // //

function showLinearRead() {
    document.getElementById("linear_read_wrapper").style.display = "block";
    document.getElementById("linear_read_akm_options").style.display = "none";
    document.getElementById("linear_read_akm1").style.display = "none";
    document.getElementById("linear_read_akm2").style.display = "none";
    document.getElementById("linear_read_PK").style.display = "none";
    
    document.getElementById("linear_write_wrapper").style.display = "none";
    document.getElementById("linear_write_akm_options").style.display = "none";
    document.getElementById("linear_write_akm1").style.display = "none";
    document.getElementById("linear_write_akm2").style.display = "none";
    document.getElementById("linear_write_PK").style.display = "none";
}

function showLinearReadOptions()
{
    document.getElementById("linear_read_wrapper").style.display = "none";
    document.getElementById("linear_read_akm_options").style.display = "block";
    document.getElementById("linear_read_akm1").style.display = "block";
    document.getElementById("linear_read_akm2").style.display = "none";
    document.getElementById("linear_read_PK").style.display = "none";
    
    document.getElementById("linear_write_wrapper").style.display = "none";
    document.getElementById("linear_write_akm_options").style.display = "none";
    document.getElementById("linear_write_akm1").style.display = "none";
    document.getElementById("linear_write_akm2").style.display = "none";
    document.getElementById("linear_write_PK").style.display = "none";
}

function showLinearReadAKM1()
{
    document.getElementById("linear_read_wrapper").style.display = "none";
    document.getElementById("linear_read_akm_options").style.display = "block";
    document.getElementById("linear_read_akm1").style.display = "block";
    document.getElementById("linear_read_akm2").style.display = "none";
    document.getElementById("linear_read_PK").style.display = "none";
    
    document.getElementById("linear_write_wrapper").style.display = "none";
    document.getElementById("linear_write_akm_options").style.display = "none";
    document.getElementById("linear_write_akm1").style.display = "none";
    document.getElementById("linear_write_akm2").style.display = "none";
    document.getElementById("linear_write_PK").style.display = "none";
}

function showLinearReadAKM2()
{
    document.getElementById("linear_read_wrapper").style.display = "none";
    document.getElementById("linear_read_akm_options").style.display = "block";
    document.getElementById("linear_read_akm1").style.display = "none";
    document.getElementById("linear_read_akm2").style.display = "block";
    document.getElementById("linear_read_PK").style.display = "none";
    
    document.getElementById("linear_write_wrapper").style.display = "none";
    document.getElementById("linear_write_akm_options").style.display = "none";
    document.getElementById("linear_write_akm1").style.display = "none";
    document.getElementById("linear_write_akm2").style.display = "none";
    document.getElementById("linear_write_PK").style.display = "none";
}

function showLinearReadPK()
{
    document.getElementById("linear_read_wrapper").style.display = "none";
    document.getElementById("linear_read_akm_options").style.display = "none";
    document.getElementById("linear_read_akm1").style.display = "none";
    document.getElementById("linear_read_akm2").style.display = "none";
    document.getElementById("linear_read_PK").style.display = "block";
    
    document.getElementById("linear_write_wrapper").style.display = "none";
    document.getElementById("linear_write_akm_options").style.display = "none";
    document.getElementById("linear_write_akm1").style.display = "none";
    document.getElementById("linear_write_akm2").style.display = "none";
    document.getElementById("linear_write_PK").style.display = "none";
}
// // // // // // // // // // // // // // // // // // // //

function showLinearWrite() {
    document.getElementById("linear_read_wrapper").style.display = "none";
    document.getElementById("linear_read_akm_options").style.display = "none";
    document.getElementById("linear_read_akm1").style.display = "none";
    document.getElementById("linear_read_akm2").style.display = "none";
    document.getElementById("linear_read_PK").style.display = "none";
    
    document.getElementById("linear_write_wrapper").style.display = "block";
    document.getElementById("linear_write_akm_options").style.display = "none";
    document.getElementById("linear_write_akm1").style.display = "none";
    document.getElementById("linear_write_akm2").style.display = "none";
    document.getElementById("linear_write_PK").style.display = "none";
}

function showLinearWriteOptions()
{
    document.getElementById("linear_read_wrapper").style.display = "none";
    document.getElementById("linear_read_akm_options").style.display = "none";
    document.getElementById("linear_read_akm1").style.display = "none";
    document.getElementById("linear_read_akm2").style.display = "none";
    document.getElementById("linear_read_PK").style.display = "none";
    
    document.getElementById("linear_write_wrapper").style.display = "none";
    document.getElementById("linear_write_akm_options").style.display = "block";
    document.getElementById("linear_write_akm1").style.display = "block";
    document.getElementById("linear_write_akm2").style.display = "none";
    document.getElementById("linear_write_PK").style.display = "none";
}

function showLinearWriteAKM1()
{
    document.getElementById("linear_read_wrapper").style.display = "none";
    document.getElementById("linear_read_akm_options").style.display = "none";
    document.getElementById("linear_read_akm1").style.display = "none";
    document.getElementById("linear_read_akm2").style.display = "none";
    document.getElementById("linear_read_PK").style.display = "none";
    
    document.getElementById("linear_write_wrapper").style.display = "none";
    document.getElementById("linear_write_akm_options").style.display = "block";
    document.getElementById("linear_write_akm1").style.display = "block";
    document.getElementById("linear_write_akm2").style.display = "none";
    document.getElementById("linear_write_PK").style.display = "none";
}

function showLinearWriteAKM2()
{
    document.getElementById("linear_read_wrapper").style.display = "none";
    document.getElementById("linear_read_akm_options").style.display = "none";
    document.getElementById("linear_read_akm1").style.display = "none";
    document.getElementById("linear_read_akm2").style.display = "none";
    document.getElementById("linear_read_PK").style.display = "none";
    
    document.getElementById("linear_write_wrapper").style.display = "none";
    document.getElementById("linear_write_akm_options").style.display = "block";
    document.getElementById("linear_write_akm1").style.display = "none";
    document.getElementById("linear_write_akm2").style.display = "block";
    document.getElementById("linear_write_PK").style.display = "none";    
}

function showLinearWritePK()
{
    document.getElementById("linear_read_wrapper").style.display = "none";
    document.getElementById("linear_read_akm_options").style.display = "none";
    document.getElementById("linear_read_akm1").style.display = "none";
    document.getElementById("linear_read_akm2").style.display = "none";
    document.getElementById("linear_read_PK").style.display = "none";
    
    document.getElementById("linear_write_wrapper").style.display = "none";
    document.getElementById("linear_write_akm_options").style.display = "none";
    document.getElementById("linear_write_akm1").style.display = "none";
    document.getElementById("linear_write_akm2").style.display = "none";
    document.getElementById("linear_write_PK").style.display = "block";    
}
function linWriteLengthUpdate(str) {
    var lng = str.length;
    document.getElementById("linear_write_linear_length").value = Math.round(lng / 2);
}
function linWriteAKM1LengthUpdate(str) {
    var lng = str.length;
    document.getElementById("linear_write_linear_akm1_length").value = Math.round(lng / 2);
}
function linWriteAKM2LengthUpdate(str) {
    var lng = str.length;
    document.getElementById("linear_write_linear_akm2_length").value = Math.round(lng / 2);
}
function linWritePKLengthUpdate(str) {
    var lng = str.length;
    document.getElementById("linear_write_linear_PK_length").value = Math.round(lng / 2);
}

async function Beep() {
    var input = "ReaderUISignal 1 1";

    ufRequest(input, function() {

    });
}
function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}

function isHex(h) {

    regexp = /^[0-9a-fA-F]+$/;

    if (regexp.test(h)) {
        return true;
    } else {
        return false;
    }

}









