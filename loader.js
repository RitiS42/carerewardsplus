let isUnder65 = true;
      let makesUnder50 = false;
      $(document).ready(function () {
        $(".q1-btn").on("click", function () {
          if ($(this).text() === "No") {
            makesUnder50 = false;
            waitingInfo();
            $("#q1").stop(1);
          }
          else {
            $("#q1").fadeOut(500);
            $("#q2").delay(500).fadeIn(500);
          }
        }
                       );
        $(".q2-btn").on("click", function () {
          if ($(this).text() === "No") {
            makesUnder50 = true;
            waitingInfo();
            $("#q2").stop(1);
          }
          else {
            makesUnder50 = false;
            waitingInfo();
            $("#q2").stop(1);
          }
        }
                       );
      }
                       );
      function waitingInfo() {
        q1.style.display = "none";
        q2.style.display = "none";
        loading1.style.display = "block";
        loading1.classList.add("fade-in");
        window.setTimeout(function () {
          loading1.classList.add("fade-out");
          window.setTimeout(function () {
            loading1.style.display = "none";
            loading2.style.display = "block";
            loading2.classList.add("fade-in");
            window.setTimeout(function () {
              loading2.classList.add("fade-out");
              window.setTimeout(function () {
                loading2.style.display = "none";
                loading3.style.display = "block";
                loading3.classList.add("fade-in");
                window.setTimeout(function () {
                  loading3.classList.add("fade-out");
                  window.setTimeout(function () {
                    loading3.style.display = "none";
                    if (isUnder65 && makesUnder50) {
                      qualify.style.display = "block";
                      qualify.classList.add("fade-in");
                      $("html, body")
                        .stop()
                        .animate(
                        {
                          scrollTop: $("#qualify").offset().top,
                        }
                        ,
                        250,
                        "swing"
                      );
                    }
                    else {
                      dontqualify.style.display = "block";
                      dontqualify.classList.add("fade-in");
                      $("html, body")
                        .stop()
                        .animate(
                        {
                          scrollTop: $("#dontqualify").offset().top,
                        }
                        ,
                        250,
                        "swing"
                      );
                    }
                    //counting();
                  }
                                    , 300);
                }
                                  , 1300);
              }
                                , 300);
            }
                              , 1300);
          }
                            , 300);
        }
                          , 1300);
      }
      var interval;
      var timer2 = "5:01";
      var interval = setInterval(function () {
        var timer = timer2.split(":");
        //by parsing integer, I avoid all extra string processing
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = seconds< 0 ? --minutes : minutes;
        if (minutes< 0) clearInterval(interval);
        seconds = seconds< 0 ? 59 : seconds;
        seconds = seconds< 10 ? "0" + seconds : seconds;
        //minutes = (minutes< 10) ?  minutes : minutes;
        $(".countdown").html(minutes + ":" + seconds);
        timer2 = minutes + ":" + seconds;
      }
                                 , 1000);