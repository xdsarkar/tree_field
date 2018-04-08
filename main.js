// bind click event handler
$("#tree")
.on('click', '.add', function() {
  // getting parent td
  var $td = $(this).parent();
  
  // creating child element
  var $td1 = $('<td>', {
    html: '<input  /> <button class="add">(+)</button> <button class="remove">(-)</button>'
  });
  // getting child table if there is
  var $tbl = $td.children('table');
    // checking child exist or not , if yes then append child to it
  if ($tbl.length)
    $tbl.find('tr').eq(0).append($td1);
  // else create new table and update
  else
    $td.append($('<table>', {
      html: $('<tr>', {
        html: $td1
      })
    }));
    // bind removes handlers
})
.on('click', '.remove', function() {
  // remove the parent td
  $(this).parent().remove();
});