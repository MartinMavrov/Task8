


jQuery(document).ready(function($)
{

    

$('form').on('submit',function(e) {

        e.preventDefault();
        $('#alert').html('');





        const input = $('#exampletext').val();
        const errors = [];
        //const notaLetter = [];
        //let pattern = '/^[a-zA-Z]+$/';

        

        if (!input) {
            errors.push('Error!');
        }

        



        if (errors.length > 0) {
            const alerts = errors.map(function (invalidText) {
                return `<div class="alert alert-danger" role="alert">
            ${invalidText} Please enter your name!
          </div>`;

            });
            $('#alert').append(alerts);


        }

       // if(input != pattern)
        //{
           // notaLetter.push('');
        //}

       // if(notaLetter.length > 0)
       // {
           // const alertsS = notaLetter.map(function (invalidInput) {
               // return `<div class="alert alert-danger" role="alert">
           // ${invalidInput} It must contain only letters!
          //</div>`;

            //});
           // $('#alert').append(alertsS);

        //}
       




        if (errors.length === 0 )//&& notaLetter ===0 
         {

           
            $('#tasks').prepend(`Hello <b>${input}</b>. How are you today?<br>`);
            
        }

        function clear()
        {
            document.getElementById('exampletext').value = '';
            
        }
    clear();
        


      




});


});
