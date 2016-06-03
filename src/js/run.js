$(function() {
  jQuery.fn.copyText = function(){
    var doc = document;
    var element = this[0];
    if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
        copyMe();
        document.selection.empty();
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
        copyMe();
        window.getSelection().removeAllRanges();
    }
  };
  function copyMe() {
    document.execCommand("Copy", false, null);
    $('.copy-link').text('Copied!');
    window.setTimeout(function () {
      $('.copy-link').text('Copy');
    }, 2000);
  }

  $('.reset-form').click(function() {
    $('.replace-val, #qfval').val('');
    $('.output').slideUp('fast');
  });

  $('.copy-link').click(function() {
    $('.output-a').copyText();
  });

  $('#qfconvert').click(function() {
    str = $('#qfval').val().trim();
    stringtr = $('.replace-val').val() == '' ? / /g : new RegExp($('.replace-val').val(), 'g');
    str = str.replace(/\n/g, ' ');
    str = str.replace(/\s\s+/g, ' ');
    str = str.replace(stringtr, '|');
    str = "http://www.ebuyer.com/search?qfc=" + str;
    $('.output a').attr('href', str).text(str);
    $('.output').slideDown('fast');
  });
});
