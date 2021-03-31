import React, {Component} from "react";
import Query from "../../components/Query";
import HOMEPAGE_QUERY from "../../queries/homepage/homepage";
import HeroStillComponent from '../../components/Hero/hero-still';
import TargetComponent from '../../components/TargetComponent';
import HomeSectionStillOne from '../../components/HomeSections/HomeSectionStillOne';

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
                                <HeroStillComponent data={data.homepage} />
                                <div className="home--body">
                                    <TargetComponent>
                                        <HomeSectionStillOne/>
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
