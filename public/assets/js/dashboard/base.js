$(document).ready(function()
{
    $(document).on('click', '.pagination a', function()
    {
        ajaxContent($(this).attr('href'), ".ajax-content");

        return false;
    });

    $(document).on('change', '.table tbody tr td input:checkbox', function()
    {
        var parent = $(this).parents('.table'); 
        if(parent.find("tbody tr td input:checkbox:checked").length >= 1)
        {
            $('#delete-users').show();
        }
        else
        {
             $('#delete-users').hide();
        }
    });

    $(document).on('change', '.check-all', function()
    {
        var parent = $(this).parents('.table');
        if($(this).is(':checked'))
        {
            parent.find("tbody tr td input:checkbox").prop('checked', true);
            $('#delete-users').show();
        }
        else
        {
            parent.find("tbody > tr > td > input:checkbox").prop("checked", false);
            $('#delete-users').hide();
        }
    });

    $(document).on('click', '.add-input', function()
    {
        var html = '<div class="control-group"><label class="control-label"><a href="#" class="icon-minus-sign remove-input" style="margin-left: 10px;"></a></label><div class="controls"><input class="col-lg-12" type="text" name="permission[]"></div></div>';
        $('#input-container').append(html);
        
        return false;
    });
    
    $(document).on('click', '.remove-input', function()
    {
        $(this).parent().parent().remove();
        return false;
    });
});

var ajaxContent = function(url, content, options)
{
    $.ajax(
    {
        url: url,
        type: "get",
        datatype: "html",
        data: options
    })
    .done(function(data)
    {
        $(content).empty().html(data.html);
    });
};

var showStatusMessage = function(message, type)
{
    $('.status-message').remove();
    $('.label-danger').remove();
    
    var html = '<div class="row status-message">\n\
                        <div class="col-lg-12">\n\
                            <div class="alert alert-'+type+'">\n\
                                '+message+'\n\
                            </div>\n\
                        </div>\n\
                </div>';
            
    $(html).prependTo('#main-container').hide().fadeIn(900);
};