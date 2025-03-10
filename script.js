$(document).ready(function () {
  let playerChoice = -1;

  $(".start").addClass("unactive");
  $(".pc-items").hide();

  $(".pwp").click(function (e) {
    e.preventDefault();
    $(".pwf").hide();
    $(".restart").show();

    $(".pc-items").show();
    $(".player-s, .player-r, .player-p").css("cursor", "pointer");
    $(".start").removeClass("unactive");
    $(".match-info p").html("<strong>=> You go first <=</strong>");
    $(".player-s").click(() => {
      $(".player-s").css({
        "border":"3px solid darkgreen",
        "box-shadow": "4px 4px 20px darkgreen",
        "transform": "scale(1.1)",
      });
      $(".player-r, .player-p").css({"box-shadow":"none", "border":"none", "transform":"scale(1)"});
      playerChoice = 0;
    });
    $(".player-r").click(() => {
      $(".player-r").css({
        "border":"3px solid darkgoldenrod",
        "box-shadow": "4px 4px 20px darkgoldenrod",
        "transform": "scale(1.1)",
      });
      $(".player-s, .player-p").css({"box-shadow":"none", "border":"none", "transform":"scale(1)"});
      playerChoice = 1;
    });
    $(".player-p").click(() => {
      $(".player-p").css({
        "border":"3px solid darkmagenta",
        "box-shadow": "4px 4px 20px darkmagenta",
        "transform": "scale(1.1)",
      });
      $(".player-s, .player-r").css({"box-shadow":"none", "border":"none", "transform":"scale(1)"});
      playerChoice = 2;
    });
  });

  $(".start").click(() => playWithPc(playerChoice));

  function playWithPc(playerChoice) {
    const res1 = "You Win !!! ><";
    const res2 = "You Lose! :<";
    const res3 = "Not bad but not good :))";

    let opChoice = Math.floor(Math.random() * 3);

    let result;

    if (playerChoice === 0) {
      result = opChoice === 0 ? res3 : opChoice === 1 ? res2 : res1;
    } else if (playerChoice === 1) {
      result = opChoice === 0 ? res1 : opChoice === 1 ? res3 : res2;
    } else if (playerChoice === 2) {
      result = opChoice === 0 ? res2 : opChoice === 1 ? res1 : res3;
    }

    loadRes(result, opChoice);
  }

  function loadRes(res, opChoice) {
    $(".match-info p").html("<strong>PC is choosing...</strong>");

    setTimeout(() => {
      $(".pc-s, .pc-r, .pc-p").css("border", "none");

      if (opChoice == 0) {
        $(".pc-s").css("border", "3px solid black");
      } else if (opChoice == 1) {
        $(".pc-r").css("border", "3px solid black");
      } else if (opChoice == 2) {
        $(".pc-p").css("border", "3px solid black");
      }

      $(".match-info p").html(`<strong>${res}</strong>`);

      setTimeout(() => {
        $(".player-s, .player-r, .player-p").css({"box-shadow":"none", "border":"none", "transform":"scale(1)"});
        $(".pc-s, .pc-r, .pc-p").css("border", "none");
        $(".match-info p").html("<strong>Next match...</strong>");
      }, 2000);
    }, 3000);
  }

  $(".pwf").click(function (e) {
    e.preventDefault();
    $(".pwp").hide();
    $(".restart").show();

    $(".pc-items").show();
    $(".player-s, .player-r, .player-p").css("cursor", "pointer");
    $(".start").removeClass("unactive");
    $(".match-info p").html("<strong>=> You go first <=</strong>");
    $(".player-s").click(() => {
      $(".player-s").css({
        "border":"3px solid darkgreen",
        "box-shadow": "4px 4px 20px darkgreen",
        "transform": "scale(1.1)",
      });
      $(".player-r, .player-p").css({"box-shadow":"none", "border":"none", "transform":"scale(1)"});
      playerChoice = 0;
    });
    $(".player-r").click(() => {
      $(".player-r").css({
        "border":"3px solid darkgoldenrod",
        "box-shadow": "4px 4px 20px darkgoldenrod",
        "transform": "scale(1.1)",
      });
      $(".player-s, .player-p").css({"box-shadow":"none", "border":"none", "transform":"scale(1)"});
      playerChoice = 1;
    });
    $(".player-p").click(() => {
      $(".player-p").css({
        "border":"3px solid darkmagenta",
        "box-shadow": "4px 4px 20px darkmagenta",
        "transform": "scale(1.1)",
      });
      $(".player-s, .player-r").css({"box-shadow":"none", "border":"none", "transform":"scale(1)"});
      playerChoice = 2;
    });
  });

  $(".restart").click(function (e) {
    e.preventDefault();
    window.location.reload();
  });
});
