import React, {Component} from "react";
import Query from "../../components/Query";
import HOMEPAGE_QUERY from "../../queries/homepage/homepage";
import HeroComponent from '../../components/Hero/index';
import HomeSectionOne from '../../components/HomeSections/HomeSectionOne'
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
                    {({data: {homepage}}) => {
                        return (
                            <div>   
                                <HeroComponent data={homepage} />
                                <div className="home--body">
                                    <TargetComponent>
                                        <HomeSectionOne/>
                                    </TargetComponent>
                                    <TargetComponent />
                                    <TargetComponent />
                                    <TargetComponent />
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
