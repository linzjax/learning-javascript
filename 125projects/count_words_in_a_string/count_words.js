function word_count() {
  var wordCountArray = $('.thisOne').html().split(" ");
  var wordCountLength = wordCountArray.length;
  $('.put_here').html('<p><strong>Word count:</strong> ' + wordCountLength + '</p>');
};

function openFile(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function() {
    var text = reader.result;
    var text_modified = text.replace(/[^\w\s]|_/g, "");
    var text_array = text_modified.split(' ');
    var text_length = text_array.length;
    $('.put_textfile_here').html('<p>' + text + '</p>');
    $('.put_wordcount_here').html(text_length);
  };
  reader.readAsText(input.files[0]);
};

word_count();
