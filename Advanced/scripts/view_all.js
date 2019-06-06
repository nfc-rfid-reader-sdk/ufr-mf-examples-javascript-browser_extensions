
async function ViewAllBlocks(){
var block_address_input= "";
var output;
var auth_mode = "";

var key_selection = document.getElementById("view_all_key_index")
    var key_index = key_selection.selectedIndex;
    
if (document.getElementById("view_auth_mode_A").checked){
    auth_mode = " 0x60";
} else {
    auth_mode = " 0x61";
}
    for (var x = 0; x < 64; x++){

        block_address_input = block_address_input + x + ",";
}      

console.log(block_address_input.substring(0,block_address_input.length-1));
document.getElementById("bntViewAll").disabled = true;

var input = "BlockRead h " + block_address_input + auth_mode+ " " + key_index;
    console.log(input);
    
    ufRequest(input,async function(){
    
    output = ufResponse();
    console.log(output);
    await sleep(100);

        for (var i = 0; i < 64; i++){
            var data_output = "Data " + i;
            var block_data = output[data_output];
            //console.log(block_data);
           
            document.getElementById("bntViewAll").disabled = false;
    
        }
        var table = document.getElementById("view_all_table");

for(var i = table.rows.length - 1; i > -1; i--)
{
    table.deleteRow(i);
}
console.log(table.rows.length);

        var k = 0;

    for (var i = 1; i < 17; i ++)
    {        
        //for za sektore
        for (var j = 0; j < 4; j++){
                //for za BIS

                var row= table.insertRow(k);
                var sector_cell = row.insertCell(0);
                var bis_cell = row.insertCell(1);
                var blo = row.insertCell(2);

                if (j==3){
                    sector_cell.innerHTML = "SCT";
                    bis_cell.innerHTML = "SCT";
                    blo.innerHTML = "SCT";
                } else {
                    sector_cell.innerHTML = i-1;
                    bis_cell.innerHTML = j;
                    blo.innerHTML = k;
                    var id = "Data " + k;
                    var data = output[id];
                    var short_data_byte = ""
                           
                    data = data.substring(2,data.length);
                            
                        for(var block_index = 0; block_index < 32; block_index+=2){
                           
                            if (block_index == 0){
                                var insert = row.insertCell(3);
                            } else {
                                var insert = row.insertCell(3+block_index/2)
                            }
                            
                            if (document.getElementById("view_hex").checked){
                                
                          short_data_byte = data.substring(block_index,block_index+2);
                           
                        } else {
                            short_data_byte = data.substring(block_index,block_index+2);
                            short_data_byte = String.fromCharCode(parseInt(short_data_byte, 16));
                            short_data_byte = short_data_byte.replace(/[^ -~]+/g, ".");
                        }

                            insert.innerHTML = short_data_byte;
                        }
                }                

                k++;
         }
    }

    

});



}

function CreateViewAllTable(){




}

