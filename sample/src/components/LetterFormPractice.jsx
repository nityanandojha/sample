import { useEffect } from "react";
import MemoTest from "./Test";
import "./practice.css";
import pencilImg from "../images/pencil-big.png";
import infoBtn from "../images/info-btn.png";
import wPage from "../images/w-page.png";
import vidIcon538 from "../images/vidIcon-538.png";
import { MyConsumer } from "./context";

function LetterFormPractice(props) {
  var func = null;
  var actImg = null;

  var obj = {
    path: "assets/Letter Writing/Small Cursive/",
    curLetter: props.location.curLetter,
  };

  useEffect(() => {
    props.setVisibility(props.history);
    document.getElementsByClassName("activity-base")[0].style.backgroundImage = "url("+actImg+")";
  }, []);

  function abc() {
    return (
      <MyConsumer>
        {(a) => {
          func = a.func;
          if(a.activeTab != null){
            var cc = a.activeTab.replace(" ", "");
            if(cc.includes("-")){
              cc = cc.replace("-", "");
            }
            actImg = a.getImg[cc].a4;
          }
          return <p className="activity-name">Pre-Cursive {a.activeTab}</p>;
        }}
      </MyConsumer>
    );
  }
  console.log("AAAAAA", wPage);
  return (
    <div className="activity-base">
      <img alt="" src={pencilImg} className="pencile-image" />
      <div className="dailoug-block-img">
        <img alt="" src="assets/images/dialog-1.png" />
      </div>
      <div className="activity-base-inner">
        <div className="activity-head">
          <a className="btn-icon oragnge-btn info-btn">
            <img alt="" src={infoBtn} />
          </a>
          <div className="activity-Title">{abc()}</div>
        </div>

        <div className="letterFormbodyTxt">Letter Formation</div>
        <div id="letterFormvidCont">
          <div>
            <span>
              <img src={vidIcon538} alt="" />
            </span>
          </div>
          <video
            loop
            autoPlay
            controls
            id="vidPlayer-pre"
            src={obj["path"] + obj["curLetter"] + ".mp4"}
          ></video>
        </div>

        <MemoTest
          canprops={{
            width: "550",
            height: "480",
            marginLeft: 625,
            marginTop: -173,
            backImg: wPage,
            backColor: "#fff",
          }}
          className="drawingTool"
        />
      </div>
    </div>
  );
}

export default LetterFormPractice;
