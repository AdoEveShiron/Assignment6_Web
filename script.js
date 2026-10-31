$(document).ready(function () {

  console.log("jQuery is ready!");

  // Part1
  // Task1

  $("h2").css("color", "#2c3e50");

  let greetingOn = false;
  $("#updateGreetingBtn").on("click", function () {
    if (!greetingOn) {
      $("#headline").text("Thanks for visiting my portfolio!");
      greetingOn = true;
    } else {
      $("#headline").text("Welcome to My Portfolio");
      greetingOn = false;
    }
  });

  $("#lightThemeBtn").on("click", function () {
    $("body").removeClass("dark-theme");
  });

  $("#darkThemeBtn").on("click", function () {
    $("body").addClass("dark-theme");
  });


  // Task2

  $("#hideBtn").on("click", function () {
    $("#statusMessage, #funFacts").hide();
  });

  $("#showBtn").on("click", function () {
    $("#statusMessage, #funFacts").show();
  });

  $("#toggleBtn").on("click", function () {
    $("#statusMessage, #funFacts").toggle();
  });


  // Task3

  $("#fadeInBtn").on("click", function () {
    $(".gallery img").fadeIn();
  });

  $("#fadeOutBtn").on("click", function () {
    $(".gallery img").fadeOut();
  });

  $("#fadeToggleBtn").on("click", function () {
    $(".gallery img").fadeToggle();
  });


  // Task4

  $(".panel-heading").on("click", function () {
    $(this).next(".panel").slideToggle();
  });


  // Task5

  $("#addSkillBtn").on("click", function () {
    const skill = $("#newSkillInput").val().trim();

    if (skill === "") {
      return;
    }

    $("#skillList").append("<li>" + skill + "</li>");
    $("#newSkillInput").val("");
  });

  $("#prependSkillBtn").on("click", function () {
    const skill = $("#newSkillInput").val().trim();

    if (skill === "") {
      return; 
    }

    $("#skillList").prepend("<li>" + skill + "</li>");
    $("#newSkillInput").val("");
  });

  $("#removeSkillBtn").on("click", function () {
    $("#skillList li:last").remove();
  });


  // Task6

  let onGithub = true;
  $("#switchLinkBtn").on("click", function () {
    if (onGithub) {
      $("#socialLink").attr("href", "https://linkedin.com").text("My LinkedIn Profile");
      $(this).text("Switch to GitHub");
      onGithub = false;
    } else {
      $("#socialLink").attr("href", "https://github.com").text("My GitHub Profile");
      $(this).text("Switch to LinkedIn");
      onGithub = true;
    }
  });


  // Task7

  $("#nameInput, #emailInput").on("keyup", function () {
    const name = $("#nameInput").val();
    const email = $("#emailInput").val();
    $("#livePreview").text(name + " - " + email);
  });


  // Task8

  let skillsAnimated = false;

  $("#animateSkillsBtn").on("click", function () {
    if (!skillsAnimated) {
      $("#barHtml").animate({ width: "90%" });
      $("#barJs").animate({ width: "75%" });
      $("#barJquery").animate({ width: "80%" });
      $(this).text("Reset Skills");
      skillsAnimated = true;
    } else {
      $("#barHtml, #barJs, #barJquery").animate({ width: "0%" });
      $(this).text("Animate My Skills");
      skillsAnimated = false;
    }
  });

});
