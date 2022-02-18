import { OurHistory } from "../../components/aboutUs/ourHistory/OurHistory";
import { WeAre } from "../../components/aboutUs/weAre/WeAre";
import { WhereNameComeFrom } from "../../components/aboutUs/whereNameComeFrom/WhereNameComeFrom";
import { WhyDoWeExist } from "../../components/aboutUs/whyDoWeExist/WhyDoWeExist";
import './AboutUsPage.scss'

export function AboutUsPage(){
    return (
        <div className="about-us">
            <WhyDoWeExist />
            <WhereNameComeFrom />
            <OurHistory />
            <WeAre />
        </div>
    );

}