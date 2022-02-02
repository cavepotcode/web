import { OurHistory } from "../../components/aboutUs/ourHistory/OurHistory";
import { WeTags } from "../../components/aboutUs/weTags/WeTags";
import { WhereNameComeFrom } from "../../components/aboutUs/whereNameComeFrom/WhereNameComeFrom";
import { WhyDoWeExist } from "../../components/aboutUs/whyDoWeExist/WhyDoWeExist";
import './AboutUsPage.scss'

export function AboutUsPage(){
    return (
        <div className="about-us">
            <WhyDoWeExist />
            <WhereNameComeFrom />
            <OurHistory />
            <WeTags />
        </div>
    );

}