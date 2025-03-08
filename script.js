$(document).ready(function () {
  let playerName = "";

  $(".restart").addClass("unactive");

  $(".pwp").click(function (e) {
    e.preventDefault();
    playerName = $("#player-name").val().trim();

    if (playerName === "") {
      $("#player-name").focus();
      $("#player-name").addClass("impress");
      setTimeout(() => {
        $("#player-name").removeClass("impress");
      }, 100);
    } else {
      $(".items img").css("cursor", "pointer");
      $(".pwp").show();
      $(".pwf").hide();
      $(".restart").removeClass("unactive");
      $(".match-info p").text(playerName);
      let pcChoice = Math.floor(Math.random() * 3);
      playWithPc(pcChoice, playerName);
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
    mode = -1;
    $(".pwp").show();
    $(".pwf").show();
    $(".match-info p").text("Player");
    $("#player-name").val("");
    $(".restart").addClass("unactive");
  });

  function playWithPc(pcChoice, playerName) {
    const res1 = playerName + "...Winner !!! ><";
    const res2 = playerName + "...Loser! :<";
    const res3 = playerName + "...Not bad but not good :))";

    $("#scissors").click(function (e) {
      e.preventDefault();
      if (pcChoice == 0) {
        loadRes(res3);
      } else if (pcChoice == 1) {
        loadRes(res2);
      } else if (pcChoice == 2) {
        loadRes(res1);
      }
      pcChoice = Math.floor(Math.random() * 3);
    });

    $("#rock").click(function (e) {
      e.preventDefault();
      if (pcChoice == 0) {
        loadRes(res1);
      } else if (pcChoice == 1) {
        loadRes(res3);
      } else if (pcChoice == 2) {
        loadRes(res2);
      }
      pcChoice = Math.floor(Math.random() * 3);
    });

    $("#paper").click(function (e) {
      e.preventDefault();
      if (pcChoice == 0) {
        loadRes(res2);
      } else if (pcChoice == 1) {
        loadRes(res1);
      } else if (pcChoice == 2) {
        loadRes(res3);
      }
      pcChoice = Math.floor(Math.random() * 3);
    });
  }

  function loadRes(res) {
    $(".waiting").show();
    setTimeout(() => {
      $(".waiting").hide();
      $(".match-info p").text(res);
    }, 1000);
  }
});
