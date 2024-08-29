import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./Project.scss";
import { AllImages } from "../../helpers";
import clsx from "clsx";
import { useFetch } from "../../hooks/useFetch";

const technologyImages: { [key: string]: string } = {
  python: AllImages.PhytonLogoLinea,
  angular: AllImages.AngularLogoLinea,
  "net-core": AllImages.NetCoreLogoLinea,
  "microsoft-net": AllImages.MicrosoftNetLogoLinea,
  react: AllImages.ReactLogoLinea,
  node: AllImages.NodeLogoLinea,
};

export function Project() {
  
  let params = useParams();
  const [t] = useTranslation("global");
  const navigate = useNavigate();
  const [project, setProject] = useState(params.id);

  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

  const { data, isLoading } = useFetch(`${apiBaseUrl}/project/${project}`);

  useEffect(() => {
    if (!isLoading && !data) {
      navigate("/404");
    } 
  }, [data, isLoading]);

  return (
    <div id="project">
      <div className="half">
        <h1>{data?.title}</h1>
        <div className="text">
          {data?.description?.map((paragraph: any, key) => {
            return (
              <div className="paragraph" key={`projectDesc_${key}`}>
                <h2>{paragraph.title}</h2>
                <p>{paragraph.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="img-container">
        <div className="left">
          <div className="square-container">
            {data?.imgs?.map((imgName: any, key) => {
              return (
                <div
                  className="square"
                  key={`projectImg_${key}`}
                  style={{
                    backgroundImage: `url(${
                      require(`../../assets/img/projects/${data.img}/${imgName}.png`)
                        .default
                    })`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              );
            })}
            {data?.textbox && (
              <div
                className="textbox"
                dangerouslySetInnerHTML={{ __html: data.textbox }}
              ></div>
            )}
          </div>
        </div>
        <div className="right">
          <div className="contact-button">
            <NavLink to="/contact">
              <button className={project}>Wanna know more?</button>
            </NavLink>
          </div>
          {data?.technologies && (
            <div className="logo-container">
              <p>Techologies that we used:</p>
              {data.technologies.map((tech) => (
                <img
                  key={tech}
                  className={clsx({
                    logo: true,
                    bigger: tech === "python" || tech === "react",
                  })}
                  src={technologyImages[tech]}
                  alt={`${tech}-logo`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {(data?.titleData ||
        data?.users ||
        data?.countries) && (
          <div className="data-container">
            <div className="title-container">
              <p className="title">{data.titleData}</p>
            </div>
            <div className="num-container">
              <div>
                <p className="num">x3</p>
                <p>MORE EFFICIENT</p>
              </div>
              <div>
                <p className="num">{data.users}+</p>
                <p>USERS</p>
              </div>
              <div>
                <p className="num">{data.users}+</p>
                <p>USERS</p>
              </div>
              <div id="num">
                <p className="num">{data.countries}+</p>
                <p>COUNTRIES</p>
                {/* <NumberElement element={{ number: 2, title: "COUNTRIES", text: "", plus: false}}/> */}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
