import React , {useEffect} from "react";
import $ from 'jquery';

import yourAudioFile from "./turnchange.mp3";
import startupSound from "./gamestart.mp3";
import winningsound from "./gamewin.mp3";
export default function Gamebox() {

  useEffect(() => {
    const startupSoundElement = document.getElementById('startupSound');

    if (startupSoundElement) {
      startupSoundElement.addEventListener('canplaythrough', () => {
        // You can remove the playStartupSound() from here
      });
    }
  }, []);

  function playStartupSound() {
    var startupSoundElement = document.getElementById('startupSound');

    if (startupSoundElement) {
      startupSoundElement.play().catch(error => {
        console.error('Error playing startup sound:', error);
      });
    }
  }

  return (
    <>
      <div className="game_container container-fluid">
        <div className="row">
          <div id="box1" className="newc">
            <div id="z1" className="zero"></div>
            <div id="c1" className="cross">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
          <div id="box2" className="newc">
            <div id="z2" className="zero"></div>
            <div id="c2" className="cross">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
          <div id="box3" className="newc">
            <div id="z3" className="zero"></div>
            <div id="c3" className="cross">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="box4" className="newc">
            <div id="z4" className="zero"></div>
            <div id="c4" className="cross">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
          <div id="box5" className="newc">
            <div id="z5" className="zero"></div>
            <div id="c5" className="cross">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
          <div id="box6" className="newc">
            <div id="z6" className="zero"></div>
            <div id="c6" className="cross">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div id="box7" className="newc">
            <div id="z7" className="zero"></div>
            <div id="c7" className="cross">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
          <div id="box8" className="newc">
            <div id="z8" className="zero"></div>
            <div id="c8" className="cross">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
          <div id="box9" className="newc">
            <div id="z9" className="zero"></div>
            <div id="c9" className="cross">
              <div className="line1"></div>
              <div className="line2"></div>
            </div>
          </div>
        </div>
      </div>
      <div id = "start" className="start container text-center">
        Start Game
      </div>
      <div className="options container ">
        <div id="crossdiv" className="op  container">
          <div className="cross1">
            <p id="crossx" className="x text=center">
              X
            </p>
          </div>
        </div>
        <div id="zerodiv" className="op  container">
          <div id="zero1" className="zero1"></div>
        </div>
        <audio id="startupSound" src={startupSound} type="audio/mp3"></audio>
        <audio id="winningsound" src={winningsound} type="audio/mp3"></audio>
        <audio id="yourAudioFile" src={yourAudioFile} type="audio/mp3"></audio>
      </div>
      <div id = "zeron" className="container winner">Zero WON !!</div>
      <div id = "croson" className=" container winner">Cross WON !!</div>
      <div id = "restart" className=" container restart">Restart Game</div>
    </>
  );
}
$(document).ready(function () {
  $(".zero").hide(0);
  $(".cross").hide(0);
  $(".op").hide(0);
  $(".winner").hide(0);
  $(".restart").hide(0);
  $(".x").mouseenter(function () {
    $(".x").animate({
      marginTop: "-7vh",
      fontSize: "16vh",
      fontWeight: "500",
    });
  });
  $(".x").mouseleave(function () {
    $(".x").animate({
      marginTop: "0vh",
      fontSize: "14vh",
      fontWeight: "400",
    });
  });
  $(".zero1").mouseenter(function () {
    $(".zero1").animate({
      marginTop: "-7vh",
      height: "15vh",
      width: "15vh",
    });
  });
  $(".zero1").mouseleave(function () {
    $(".zero1").animate({
      marginTop: "0vh",
      height: "12vh",
      width: "12vh",
    });
  });
  // logic for the game is below:
  /****************************************************************** */
  //***************************************************************** */
  var turn = "cross";
  let ids;
  let checked;
  let check1 = "3578";
  let check2 = "873";
  let check3 = "49056";
  let check4 = "92834";
  let check5 = "w38945";
  let check6 = "8u4r3hg";
  let check7 = "8u245ht";
  let check8 = "8945";
  let check9 = "13978345";

  $(".newc").click(function (getid) {
    ids = getid.target.id;
    console.log(ids);
    changeturn();
    playAudio();
  });


  $("#start").click(function(){
    playStartupSound();
    $("#crossdiv").slideDown(300);
    $("#start").slideUp(400);
  });

  function playStartupSound() {
    var startupSoundElement = document.getElementById('startupSound');

    if (startupSoundElement) {
      startupSoundElement.play().catch(error => {
        console.error('Error playing startup sound:', error);
      });
    }
  }

  function playAudio() {
    var audioElement = document.getElementById("yourAudioFile");

    if (audioElement) {
      if (audioElement.paused || audioElement.ended) {
        audioElement.play().catch((error) => {
          console.error("Autoplay was prevented:", error);
        });
      } else {
        audioElement.currentTime = 0;
      }
    }
  }
  function gamewon() {
    var audioElement = document.getElementById("winningsound");

    if (audioElement) {
      if (audioElement.paused || audioElement.ended) {
        audioElement.play().catch((error) => {
          console.error("Autoplay was prevented:", error);
        });
      } else {
        audioElement.currentTime = 0;
      }
    }
  }
  function changeturn() {
    displayturn();
    if (turn === "cross") {
      $("#zerodiv").show(200);
      $("#crossdiv").hide(100);

      turn = "zero";
      return;
    } else if (turn === "zero") {
      $("#crossdiv").show(200);
      $("#zerodiv").hide(100);
      turn = "cross";
      return;
    }
  }
  function displayturn() {
    if (turn === "cross") {
      let num = ids[3];
      checked = "#c" + num;
      $(checked).show(300);
      if (num == 1) {
        check1 = "cross";
      } else if (num == 2) {
        check2 = "cross";
      } else if (num == 3) {
        check3 = "cross";
      } else if (num == 4) {
        check4 = "cross";
      } else if (num == 5) {
        check5 = "cross";
      } else if (num == 6) {
        check6 = "cross";
      } else if (num == 7) {
        check7 = "cross";
      } else if (num == 8) {
        check8 = "cross";
      } else if (num == 9) {
        check9 = "cross";
      }
    } else if (turn === "zero") {
      let num = ids[3];
      checked = "#z" + num;
      $(checked).show(300);
      if (num == 1) {
        check1 = "zero";
      } else if (num == 2) {
        check2 = "zero";
      } else if (num == 3) {
        check3 = "zero";
      } else if (num == 4) {
        check4 = "zero";
      } else if (num == 5) {
        check5 = "zero";
      } else if (num == 6) {
        check6 = "zero";
      } else if (num == 7) {
        check7 = "zero";
      } else if (num == 8) {
        check8 = "zero";
      } else if (num == 9) {
        check9 = "zero";
      }
    }
    whos_winner();
  }
  function whos_winner() {
    if (check1 == check2 && check2 == check3) {
      gamewon();
      console.log("Winner is " + check1);
      if (check1 == "cross")
      {
        $("#croson").slideDown(500);
        $(".options").hide(300);
      }
      else if (check1 == "zero")
      {
        $("#zeron").slideDown(500);
        $(".options").hide(300);
      }
    } else if (check1 == check4 && check4 == check7) {
      gamewon();
      console.log("Winner is " + check1);
      if (check1 == "cross")
      {
        $("#croson").slideDown(500);
        $(".options").hide(300);
      }
      else if (check1 == "zero")
      {
        $("#zeron").slideDown(500);
        $(".options").hide(300);
      }
      console.log("Winner is " + check1);
    } else if (check1 == check5 && check5 == check9) {
      gamewon();
      console.log("Winner is " + check1);
      if (check1 == "cross")
      {
        $("#croson").slideDown(500);
        $(".options").hide(300);
      }
      else if (check1 == "zero")
      {
        $("#zeron").slideDown(500);
        $(".options").hide(300);
      }
      console.log("Winner is " + check1);
    } else if (check2 == check5 && check5 == check8) {
      gamewon();
      console.log("Winner is " + check1);
      if (check2 == "cross")
      {
        $("#croson").slideDown(500);
        $(".options").hide(300);
      }
      else if (check2 == "zero")
      {
        $("#zeron").slideDown(500);
        $(".options").hide(300);
      }
      console.log("Winner is " + check2);
    } else if (check3 == check6 && check6 == check9) {
      gamewon();
      console.log("Winner is " + check1);
      if (check3 == "cross")
      {
        $("#croson").slideDown(500);
        $(".options").hide(300);
      }
      else if (check3 == "zero")
      {
        $("#zeron").slideDown(500);
        $(".options").hide(300);
      }
      console.log("Winner is " + check3);
    } else if (check4 == check5 && check5 == check6) {
      gamewon();
      console.log("Winner is " + check1);
      if (check4 == "cross")
      {
        $("#croson").slideDown(500);
        $(".options").hide(300);
      }
      else if (check4 == "zero")
      {
        $("#zeron").slideDown(500);
        $(".options").hide(300);
      }
      console.log("Winner is " + check4);
    } else if (check7 == check8 && check8 == check9) {
      gamewon();
      console.log("Winner is " + check1);
      if (check7 == "cross")
      {
        $("#croson").slideDown(500);
        $(".options").hide(300);
      }
      else if (check7 == "zero")
      {
        $("#zeron").slideDown(500);
        $(".options").hide(300);
      }
      console.log("Winner is " + check7);
    } else if (check3 == check5 && check5 == check7) {
      gamewon();
      console.log("Winner is " + check1);
      if (check3 == "cross")
      {
        $("#croson").slideDown(500);
        $(".options").hide(300);
      }
      else if (check3 == "zero")
      {
        $("#zeron").slideDown(500);
        $(".options").hide(300);
      }
      console.log("Winner is " + check3);
    }
    $(".restart").slideDown(1000);
  }
  $(".restart").click(function(){
    window.location.reload();
  });
});
