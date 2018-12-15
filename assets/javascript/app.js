//Dummy Info
var tableInfo = [
    {
        name: 'Carlos Santana',
        number: 'email@website.com',
        email: '(555)123-4567',
        id: '123456',
    },{
        name: 'Jimi Hendrix',
        number: 'email@website.com',
        email: '(555)123-4567',
        id: '123456',
    },{
        name: 'Stevie Ray Vaughan',
        number: 'email@website.com',
        email: '(555)123-4567',
        id: '123456',
    },{
        name: 'Miles Davis',
        number: 'email@website.com',
        email: '(555)123-4567',
        id:  '123456',
    },{
        name: 'Ozzy Osbourne',
        number: 'email@website.com',
        email: '(555)123-4567',
        id: '123456',
    },{
        name: 'Jim Morrison',
        number: 'email@website.com',
        email: '(555)123-4567',
        id: '123456',
    }
]
var tables = $('#tableTable');
var waitlist = $('#waitlistTable');
var lnBreak = $('<br><br>')
//For Loops
for (var i = 0; i < tableInfo.length; i++){
    var res = $('<div class = "reservation" style = "border: 1px gray solid; display: inline-flex; height: auto; width: 100%; padding: 10px; display: flex;"></div><br>');
    var resNum = $('<div class = "btn btn-primary mr-3" style = " margin-top: auto; margin-bottom: auto;" >' + (i+1) +'</div>');
    var resName = $('<div class = "mr-3" style = " margin-top: auto; margin-bottom: auto;">|  <strong>' + tableInfo[i].name + '</strong></div>');
    $(res).appendTo(tables);
    $(resNum).appendTo(res);
    $(resName).appendTo(res);
    console.log(tableInfo[i].name);
}

for (var i = 0; i < tableInfo.length; i++){
    var res = $('<div class = "reservation" style = "border: 1px gray solid; display: inline-flex; height: auto; width: 100%; padding: 10px; display: flex;"></div><br>');
    var resNum = $('<div class = "btn btn-primary mr-3" style = " margin-top: auto; margin-bottom: auto;" >' + (i+1) +'</div>');
    var resName = $('<div class = "mr-3" style = " margin-top: auto; margin-bottom: auto;">|  <strong>' + tableInfo[i].name + '</strong></div>');
    $(res).appendTo(waitlist);
    $(resNum).appendTo(res);
    $(resName).appendTo(res);
    console.log(tableInfo[i].name);
}