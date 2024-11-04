document.getElementById('submitText').addEventListener('click', function(){
    const inputText = document.getElementById('inputText').value;
    const canvas = document.getElementById('canvas');

    const options = {
        width: 400,
        height: 400,
        color:{
            dark: '#003153',
            light: '#CCCCFF'
        },
        margin: 4
    }


    QRCode.toCanvas(canvas, inputText, options, function(err){
        if(err){
            console.error(err);
        } else{
            console.log('QR-код сгенерирован успешно');
        }
    });
});