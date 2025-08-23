var geocoder = new kakao.maps.services.Geocoder();
geocoder.addressSearch('서울 강남구 봉은사로 524', function(result, status) {
  console.log(status);
  console.log(result);
});