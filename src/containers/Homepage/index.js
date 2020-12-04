import React, {Component} from "react";
import Query from "../../components/Query";
import HOMEPAGE_QUERY from "../../queries/homepage/homepage";
import HeroComponent from '../../components/Hero/index';
import HomeSectionOne from '../../components/HomeSections/HomeSectionOne'
import HomeSectionTwo from '../../components/HomeSections/HomeSectionTwo'
import HomeSectionThree from '../../components/HomeSections/HomeSectionThree'
import TargetComponent from '../../components/TargetComponent';

export class Homepage extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Query query={HOMEPAGE_QUERY} id={null}>
                    {({data}) => {
                        return (
                            <div>   
                                <HeroComponent data={data.homepage} />
                                <div className="home--body">
                                    <TargetComponent>
                                        <HomeSectionOne/>
                                    </TargetComponent>
                                    <TargetComponent>
                                        <HomeSectionTwo/>
                                    </TargetComponent>
                                    <TargetComponent>
                                    <HomeSectionThree shows={data.shows} partners={data.partners}/>
                                    </TargetComponent>
                                </div>
                            </div>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

export default Homepage;
