$(document).ready(function () {
  const res1 = "You Win !!! ><";
  const res2 = "You Lose! :<";
  const res3 = "It's a draw 0-0";
  let mode = -1;
  let result;
  let playerChoice = -1;
  let turn = 0;
  let player1 = -1;
  let player2 = -1;

  $(".start").addClass("unactive");
  $(".pc-items").hide();
  $(".items").css("cursor", "not-allowed");

  $(".pwp").click(function (e) {
    e.preventDefault();
    mode = 0;
    prepareItems();
  });

  $(".pwf").click(function (e) {
    e.preventDefault();
    mode = 1;
    prepareItems();
  });

  $(".player-s").click(() => {
    $(".player-s").css({
      border: "3px solid darkgreen",
      "box-shadow": "4px 4px 20px darkgreen",
      transform: "scale(1.1)",
    });
    $(".player-r, .player-p").css({
      "box-shadow": "none",
      border: "none",
      transform: "scale(1)",
    });
    playerChoice = 0;
    if (mode == 0) {
      $(".start").click(() => playerOption(mode, playerChoice, null, null));
    } else {
      if (turn == 0) {
        turn = 1;
        player1 = 0;
        $(".next").click(() => takeTurn());
      } else {
        player2 = 0;
        $(".start").click(() =>
          playerOption(mode, playerChoice, player1, player2)
        );
      }
    }
  });

  $(".player-r").click(() => {
    $(".player-r").css({
      border: "3px solid darkgoldenrod",
      "box-shadow": "4px 4px 20px darkgoldenrod",
      transform: "scale(1.1)",
    });
    $(".player-s, .player-p").css({
      "box-shadow": "none",
      border: "none",
      transform: "scale(1)",
    });
    playerChoice = 1;
    if (mode == 0) {
      $(".start").click(() => playerOption(mode, playerChoice));
    } else {
      if (turn == 0) {
        turn = 1;
        player1 = 1;
        $(".next").click(() => takeTurn());
      } else {
        player2 = 1;
        $(".start").click(() =>
          playerOption(mode, playerChoice, player1, player2)
        );
      }
    }
  });

  $(".player-p").click(() => {
    $(".player-p").css({
      border: "3px solid darkmagenta",
      "box-shadow": "4px 4px 20px darkmagenta",
      transform: "scale(1.1)",
    });
    $(".player-s, .player-r").css({
      "box-shadow": "none",
      border: "none",
      transform: "scale(1)",
    });
    playerChoice = 2;
    if (mode == 0) {
      $(".start").click(() => playerOption(mode, playerChoice));
    } else {
      if (turn == 0) {
        turn = 1;
        player1 = 2;
        $(".next").click(() => takeTurn());
      } else {
        player2 = 2;
        $(".start").click(() =>
          playerOption(mode, playerChoice, player1, player2)
        );
      }
    }
  });

  function prepareItems() {
    $(".items").css("cursor", "pointer");
    
    if (mode == 0) {
      $(".pwf").hide();
      $(".restart").show();
      $(".pc-items").show();
      $(".with-pc").show();
      $(".player-s, .player-r, .player-p").css("cursor", "pointer");
      $(".start").removeClass("unactive");
      $(".match-info p").html("<strong>=> You go first <=</strong>");
    }

    if (mode == 1) {
      $(".pwp").hide();
      $(".start").hide();
      $(".restart").show();
      $(".next").show();
      $(".with-friend").show();
      $(".player-s, .player-r, .player-p").css("cursor", "pointer");
      $(".match-info p").html("<strong>=> Player 1 go first <=</strong>");
    }
  }

  function playerOption(mode, playerChoice, player1, player2) {
    if (mode == 0) {
      let opChoice = Math.floor(Math.random() * 3);

      if (playerChoice === 0) {
        result = opChoice === 0 ? res3 : opChoice === 1 ? res2 : res1;
      } else if (playerChoice === 1) {
        result = opChoice === 0 ? res1 : opChoice === 1 ? res3 : res2;
      } else if (playerChoice === 2) {
        result = opChoice === 0 ? res2 : opChoice === 1 ? res1 : res3;
      }

      showRes(result, opChoice, null, null);
    } else {
      let stt = 0;
      if (player1 === 0) {
        result = player2 === 0 ? stt : player2 === 1 ? (stt = 2) : (stt = 1);
      } else if (player1 === 1) {
        result =
          player2 === 0 ? (stt = 1) : player2 === 1 ? (stt = 0) : (stt = 2);
      } else if (player1 === 2) {
        result =
          player2 === 0 ? (stt = 2) : player2 === 1 ? (stt = 1) : (stt = 0);
      }

      showRes(result, null, player1, player2);
    }
  }

  function showRes(res, opChoice, player1, player2) {
    if (mode == 0) {
      $(".match-info p").html("<strong>PC is choosing...</strong>");

      setTimeout(() => {
        $(".pc-s, .pc-r, .pc-p").css({
          "box-shadow": "none",
          border: "none",
          transform: "scale(1)",
        });

        resHighLight(opChoice, "pc");

        $(".match-info p").html(`<strong>${res}</strong>`);

        setTimeout(() => {
          $(".player-s, .player-r, .player-p").css({
            "box-shadow": "none",
            border: "none",
            transform: "scale(1)",
          });
          $(".pc-s, .pc-r, .pc-p").css({
            "box-shadow": "none",
            border: "none",
            transform: "scale(1)",
          });
          $(".match-info p").html("<strong>Next match...</strong>");
        }, 2000);
      }, 3000);
    } else {
      switch (res) {
        case 0:
          $(".pc-items").show();
          resHighLight(player1, "pc");
          resHighLight(player2, "player");
          $(".match-info p").html(`<strong>${res3}</strong>`);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          break;
        case 1:
          $(".pc-items").show();
          resHighLight(player1, "pc");
          resHighLight(player2, "player");
          $(".match-info p").html(`<strong>Player 1...${res1}</strong>`);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          break;
        case 2:
          $(".pc-items").show();
          resHighLight(player1, "pc");
          resHighLight(player2, "player");
          $(".match-info p").html(`<strong>Player 2...${res1}</strong>`);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          break;
      }
    }
  }

  function resHighLight(choice, obj) {
    if (choice == 0) {
      $(`.${obj}-s`).css({
        border: "3px solid darkgreen",
        "box-shadow": "4px 4px 20px darkgreen",
        transform: "scale(1.1)",
      });
    } else if (choice == 1) {
      $(`.${obj}-r`).css({
        border: "3px solid darkgoldenrod",
        "box-shadow": "4px 4px 20px darkgoldenrod",
        transform: "scale(1.1)",
      });
    } else if (choice == 2) {
      $(`.${obj}-p`).css({
        border: "3px solid darkmagenta",
        "box-shadow": "4px 4px 20px darkmagenta",
        transform: "scale(1.1)",
      });
    }
  }

  function takeTurn() {
    $(".player-s, .player-r, .player-p").css({
      "box-shadow": "none",
      border: "none",
      transform: "scale(1)",
    });
    $(".match-info p").html("<strong>=> Player 2..it's your turn <=</strong>");
    $(".next").hide();
    $(".start").show();
    $(".start").removeClass("unactive");
  }

  $(".restart").click(function (e) {
    e.preventDefault();
    window.location.reload();
  });
});
