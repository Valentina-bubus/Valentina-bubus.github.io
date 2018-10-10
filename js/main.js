$(document).ready(function() {
    $('.change-city').on('click', function(e) {
        e.preventDefault();
        changeCity();
        calculateVolume();
      });
  })

function changeCity() {
    $city_sending = $(".city-sending").val();
    $city_delivery = $(".city-delivery").val();
    $(".city-sending").val($city_delivery);
    $(".city-delivery").val($city_sending);
};

function calculateVolume() {
    $lenght = $(".lenght").val();
    $width = $(".width").val();
    $height = $(".height").val();
    $volume = $lenght * $width * $height
    if ($volume>0) {
        $(".volume").val($volume);
    }
};