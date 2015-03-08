// Put all your page JS here

$(function () {
    $('#slickQuiz').slickQuiz(
      {
        "backButtonText": "Back",
        "assessmentTest": true,
        "disableScore": true,
        "perQuestionResponseMessaging": false,
      }
    );
});
