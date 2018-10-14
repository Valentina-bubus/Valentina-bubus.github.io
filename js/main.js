$(document).ready(function() {
    $('.change-city').on('click', function(e) {
        e.preventDefault();
        changeCity();
      });

    $(".height").keyup($.debounce(250, function(f) {
        calculateVolume();
    }));

  });

function changeCity() {
    $city_sending = $(".city-sending").val();
    $city_delivery = $(".city-delivery").val();
    $(".city-sending").val($city_delivery);
    $(".city-delivery").val($city_sending);
};

function calculateVolume() {
    $length = $(".length").val();
    $width = $(".width").val();
    $height = $(".height").val();
    $volume = $length * $width * $height;
    if ($volume>0) {
        $(".volume").val($volume);
    }
};