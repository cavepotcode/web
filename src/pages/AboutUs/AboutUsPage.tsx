import { WhereNameComeFrom } from "../../components/whereNameComeFrom/WhereNameComeFrom";
import { WhyDoWeExist } from "../../components/whyDoWeExist/WhyDoWeExist";
import './AboutUsPage.scss'

export function AboutUsPage(){
    return (
        <div className="about-us">
            <WhyDoWeExist />
            <WhereNameComeFrom />
        </div>
    );

}