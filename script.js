$(document).ready(function () {
  let playerName = "";

  $(".restart").addClass("unactive");
  $(".pc-items").hide();

  $(".pwp").click(function (e) {
    e.preventDefault();
    playerName = $("#player-name").val().trim();

    if (playerName === "") {
      $("#player-name").focus();
      $(".error").css("display", "block");
      setTimeout(() => $(".error").css("display", "none"), 1000);
      $("#player-name").addClass("impress");
      setTimeout(() => $("#player-name").removeClass("impress"), 100);
    } else {
      $(".pc-items").show();
      $(".player-s, .player-r, .player-p").css("cursor", "pointer");
      $(".pwp").show();
      $(".pwf").hide();
      $(".restart").removeClass("unactive");
      $(".match-info p").text(playerName + " go first...");
      $(".player-s").click(() => {
        $(".player-s").css("box-shadow", "4px 4px 20px darkgreen");
      });
      $(".player-r").click(() => {
        $(".player-r").css("box-shadow", "4px 4px 20px darkgoldenrod");
      });
      $(".player-p").click(() => {
        $(".player-p").css("box-shadow", "4px 4px 20px darkmagenta");
      });
      playWithPc(playerName);
    }
  });

  $(".pwf").click(function (e) {
    e.preventDefault();

    let playerName = $("#player-name").val().trim();

    if (playerName === "") {
      $("#player-name").focus();
      $("#player-name").addClass("impress");
      setTimeout(() => {
        $("#player-name").removeClass("impress");
      }, 100);
    } else {
      $(".pwf").show();
      $(".pwp").hide();
      $(".restart").removeClass("unactive");
      playWithFriends();
    }
  });

  $(".restart").click(function (e) {
    e.preventDefault();
    $(".pwp, .pwf").show();
    $(".match-info p").text("Player");
    $("#player-name").val("");
    $(".restart").addClass("unactive");
    $(".pc-items").hide();
    $(".items img").css("box-shadow", "none");
    $(".pc-s, .pc-r, .pc-p").css("border", "none");
  });

  function playWithPc(playerName) {
    const res1 = playerName + "...You Win !!! ><";
    const res2 = playerName + "...You Lose! :<";
    const res3 = playerName + "...Not bad but not good :))";

    $(".items img").click(function (e) {
      e.preventDefault();
      let pcChoice = Math.floor(Math.random() * 3);

      let result;
      let playerChoice = $(this).attr("id");

      if (playerChoice === "scissors") {
        result = pcChoice === 0 ? res3 : pcChoice === 1 ? res2 : res1;
      } else if (playerChoice === "rock") {
        result = pcChoice === 0 ? res1 : pcChoice === 1 ? res3 : res2;
      } else if (playerChoice === "paper") {
        result = pcChoice === 0 ? res2 : pcChoice === 1 ? res1 : res3;
      }

      loadRes(result, pcChoice);
    });
  }

  function loadRes(res, pcChoice) {
    $(".match-info p").text("PC is choosing...");

    setTimeout(() => {
      $(".waiting").hide();
      $(".pc-s, .pc-r, .pc-p").css("border", "none");

      if (pcChoice == 0) {
        $(".pc-s").css("border", "3px solid black");
      } else if (pcChoice == 1) {
        $(".pc-r").css("border", "3px solid black");
      } else if (pcChoice == 2) {
        $(".pc-p").css("border", "3px solid black");
      }

      $(".match-info p").text(res);

      setTimeout(() => {
        $(".player-s, .player-r, .player-p").css("box-shadow", "none");
        $(".pc-s, .pc-r, .pc-p").css("border", "none");
        $(".match-info p").text("Next match...");
      }, 2000);
    }, 3000);
  }

});
