$(document).ready(function() {
  $('input[name="option1"]').change(function() {
    var selected = $('input[name="option1"]:checked').val();
    if (selected) {
      $('input[name="option2"]').prop("disabled", false).parent().show();
      $('input[name="option2"][value="' + selected + '"]').prop("disabled", true).parent().hide();
      $('input[name="option2"]').prop("checked", false);
      $('input[name="option3"]').prop("disabled", true).parent().hide();
      $('input[name="option3"]').prop("checked", false);
    } else {
      $('input[name="option2"]').prop("disabled", true).parent().hide();
      $('input[name="option2"]').prop("checked", false);
      $('input[name="option3"]').prop("disabled", true).parent().hide();
      $('input[name="option3"]').prop("checked", false);
    }
  });

  $('input[name="option2"]').change(function() {
    var selected = $('input[name="option2"]:checked').val();
    if (selected) {
      $('input[name="option3"]').prop("disabled", false).parent().show();
      $('input[name="option3"][value="' + selected + '"]').prop("disabled", true).parent().hide();
      $('input[name="option3"]').prop("checked", false);
    } else {
      $('input[name="option3"]').prop("disabled", true).parent().hide();
      $('input[name="option3"]').prop("checked", false);
    }
  });
});
