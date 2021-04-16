$(document).ready(function () {
    $('.needq').hide();
    
    $('#qyesno').removeAttr('value');
    $('#qyesno').attr('value', 'No');
    $('#pnumber').prop('disabled', true);
    $('#plocation').prop('disabled', true);
    $('#tweight').prop('disabled', true);
    $('#pdim').prop('disabled', true);
    $('#pweight').prop('disabled', true);
    $('#servlevel').prop('disabled', true);
    $('#pdestination').prop('disabled', true);
    $('#rquote').change(function () {
        
        
        var rq = $('.needq')
        if ($(this).prop('checked')) {
            rq.show();
            $('.noq').hide()
            console.log('checked')
            $('#qyesno').removeAttr('value');
            $('#qyesno').attr('value', 'Yes');

            $('#pnumber').prop('disabled', false);
            $('#plocation').prop('disabled', false);
            $('#tweight').prop('disabled', false);
            $('#pdim').prop('disabled', false);        
            $('#pdestination').prop('disabled', false);
            $('#servlevel').prop('disabled', false);

            $('#subject').prop('disabled', true);
            $('#message').prop('disabled', true);

            $(".qcontent").addClass("qbcontent")
            $('.container').addClass('containerb')


        } else {
            console.log('unchecked')
            rq.hide();
            $('.noq').show()
            $('#qyesno').removeAttr('value');
            $('#qyesno').attr('value', 'No');  
            
            
            
            $('#pdestination').prop('disabled', true);
            $('#pnumber').prop('disabled', true);
            $('#plocation').prop('disabled', true);
            $('#pdim').prop('disabled', true);
            $('#tweight').prop('disabled', true);
            $('#servlevel').prop('disabled', true);

            $('#subject').prop('disabled', false);
            $('#message').prop('disabled', false);

            $(".qcontent").removeClass("qbcontent")
            $(".container").removeClass("containerb")
            

            
            
        }          
    });

    $('.submit').click(function (event) {
        console.log('clicked')

        var name = $('#name').val()
        var email = $('#email').val()
        var subject = $('#subject').val()
        var message = $('#message').val()
       
        var amount = $('#pnumber').val()
        var servicelevel = $('#servlevel').val()
        var pickup = $('#plocation').val()
        var weight = $('#tweight').val()
        var dimensions = $('#pdim').val()
        var deilvery = $('#pdestination').val()
        

        var namevalid = $('.namev')
        var emailvalid = $('.emailv') 
        var subvalid = $('.subjectv')
        var messvalid = $('.messv')
        var amountvalid = $('.amountv')
        var servicevalid = $('.servicev')
        var locatevalid = $('.locationv')
        var weightvalid = $('.weightv')
        var dimvalid = $('.dimv')
        var destvalid = $('.destv')


       
        namevalid.empty()
        emailvalid.empty()
        messvalid.empty()
        subvalid.empty()
        amountvalid.empty()
        servicevalid.empty()
        locatevalid.empty()
        weightvalid.empty()
        dimvalid.empty()
        destvalid.empty()


        if (name.length != '') {
            
        } else {
            event.preventDefault()
            namevalid.append('<div>Name can`t be blank.</div>')
        }
        if (email.length > 3 && email.includes('@') && email.includes('.')) {
            
        } else {
            event.preventDefault()
            emailvalid.append('<div>Email is not valid.</div>')
        }
        if ($('#rquote').prop('checked')) {
            if (amount.length != '') {

            } else {
                event.preventDefault()
                amountvalid.append('<div>Please type in the amount.</div>')
            }
        } if ($('#rquote').prop('checked')) {
            if (servicelevel.length != '') {

            } else {
                event.preventDefault()
                servicevalid.append('<div>Please choose your level. </div>')
            } if (pickup.length != '') {

            } else {
                event.preventDefault()
                locatevalid.append('<div>Please type in an address.</div>')
            } if (weight.length != '') {

            } else {
                event.preventDefault()
                weightvalid.append('<div>Please type in the weight.</div>')
            } if (dimensions != '') {

            } else {
                event.preventDefault()
                dimvalid.append('<div>Please type in dimensions.</div>')
            } if (deilvery.length != '') {

            } else {
                event.preventDefault()
                destvalid.append('<div>Please type in an address</div>')
            }
        }
        if ($('#rquote').prop('checked')) {

        }else if (subject.length != '') {

        } else {
            event.preventDefault()
            subvalid.append('<div>Subject can`t be blank. </div>')
        }
        if ($('#rquote').prop('checked')) {

        }else if (message.length > 10  ) {

        } else {
            event.preventDefault()
            messvalid.append('<div>Message is too short. </div>')      
        }
    })
})