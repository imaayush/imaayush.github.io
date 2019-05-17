$(function() {
  $(".typed").typed({
    strings: [
      "stat aayush.tiwari<br/>" +
      "><span class='caret'>$</span> work: web apps development, cloud services, problem solving <br/> ^100" +
      "><span class='caret'>$</span> hobbies: watching movies, solo travel, trekking<br/> ^300" +
      "><span class='caret'>$</span> alias: imaayush <br/>" +
      "><span class='caret'>$</span> contact: +91 9730022855 <br/>"+
      "><span class='caret'>$</span> email: aayushtiwari41@gmail.com <br/>"+
      "><span class='caret'>$</span> job: Develop cloud services <a href='https://myaccount.e2enetworks.com/'>E2E Networks</a><br/> ^100"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
