$(document).ready(function(){
  "use strict"
  var button = $('.button_wrapper'),
    brush = $('.brush'),
    form = $('.project_form'),
    close = $('.close'),
    select = $('#connect'),
    input_email = $('.connect_email'),
    input_tel = $('.connect_tel'),
    input_skype = $('.connect_skype'),
    input_city = $('.project_city'),
    country = $('#country'),
    city_select = $("#city"),
    ukr_city = $("option[data-country='ukr']"),
    rus_city = $("option[data-country='rus']"),
    bel_city = $("option[data-country='bel']"),
    kazah_city = $("option[data-country='kazah']"),
    waffle = $('.waffle_wrapper'),
    logo = $('.project_logo'),
    people = $('.people'),
    coming_soon = $('.coming_soon'),
    frenchize = $('.frenchize_wrapper'),
    footer = $('.footer_wrapper'),
    social = $('.social_wrapper'),
    doc = $(document);

  setTimeout(function(){
    waffle.addClass('active');
    logo.addClass('active');
    people.addClass('active');
    coming_soon.addClass('active');
    button.addClass('active');
    frenchize.addClass('active');
    footer.addClass('active');
    social.addClass('active');
  }, 2000);
  
  button.on('click', function(event){
    event.preventDefault;
    event.stopPropagation;
    brush.addClass('active');
    setTimeout(function(){
      form.addClass('active');}, 600);
    close.addClass('active');
    input_email.removeClass('active');
    input_tel.removeClass('active');
    input_city.removeClass('active');
    input_skype.removeClass('active');
    button.removeClass('active');
  });

  select.on('change', function(){
    if (select.val() === "email"){
      input_skype.removeClass('active');
      input_tel.removeClass('active');
      input_email.addClass('active');
      input_email.children().attr('required','');
    }
    else if(select.val() === 'def'){
      input_email.removeClass('active');
      input_tel.removeClass('active');
      input_skype.removeClass('active');
    }
    else if(select.val() === 'skype'){
      input_email.removeClass('active');
      input_tel.removeClass('active');
      input_skype.addClass('active');

    }
    else{
      input_skype.removeClass('active');
      input_email.removeClass('active');
      input_tel.addClass('active');
      input_tel.children().attr('required', '');
    }
  });
  country.on('change', function(){
    if(country.val() !== "def"){
      input_city.addClass('active');
      if(country.val() === "ukr"){
        city_select.html('');
        city_select.append(ukr_city.clone());
      }
      else if(country.val() === "rus"){
        city_select.html('');
        city_select.append(rus_city.clone());
      }
      else if(country.val() === "bel"){
        city_select.html('');
        city_select.append(bel_city.clone());
      }      
      else if(country.val() === "kazah"){
        city_select.html('');
        city_select.append(kazah_city.clone());
      }
      else {
        city_select.html('');
      }
    }else{
      input_city.removeClass('active');
    }
  });

  close.on('click', function(){
    form.removeClass('active');
    setTimeout(function(){
      brush.removeClass('active')}, 100);
    close.removeClass('active');
    button.addClass('active');
    form[0].reset();
  });

  doc.on('keydown', function(event){
    if (event.keyCode == 9 && !form.hasClass('active')){
      event.preventDefault();
    }
  });

});
