import React, {Component} from "react";
import Query from "../../components/Query";
import HOMEPAGE_QUERY from "../../queries/homepage/homepage";
import HeroComponent from '../../components/Hero/index';
import HomeSectionOne from '../../components/HomeSections/HomeSectionOne'
import HomeSectionTwo from '../../components/HomeSections/HomeSectionTwo'
import HomeSectionThree from '../../components/HomeSections/HomeSectionThree'
import TargetComponent from '../../components/TargetComponent';
import SHOWS_QUERY from "../../queries/shows/shows";

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
                    {({data: {homepage}}) => {
                        return (
                            <div>   
                                <HeroComponent data={homepage} />
                                <div className="home--body">
                                    <TargetComponent>
                                        <HomeSectionOne/>
                                    </TargetComponent>
                                    <TargetComponent>
                                        <HomeSectionTwo/>
                                    </TargetComponent>
                                    <TargetComponent>
                                        <Query query={SHOWS_QUERY} id={null}>
                                            {({data: {shows}}) => {
                                                return (
                                                  <HomeSectionThree data={shows}/>
                                                )}}
                                        </Query>
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
