import data from "../../../data/data-web.json";
import "./IntroAboutUs.scss";

export const IntroAboutUs = () => {
  const weDoWeExist = data["why-do-we-exist"];
  return (
    <div id="intro-about-us">
      <div className="why-do-we-exist max-container">
        <div className="textwrapper">
          <label className="title">{weDoWeExist.title}</label>
          <label className="textpart">{weDoWeExist["text.part.1"]}</label>
          <label className="textpart">{weDoWeExist["text.part.2"]}</label>
          <label className="textpart">{weDoWeExist["text.part.3"]}</label>
        </div>
        {/* <div className="img-wrapper">
                    <img src={AllImages.AboutUsBanner} alt={t("why-do-we-exist.alt.img.1")} />
                </div> */}
      </div>
    </div>
  );
};
