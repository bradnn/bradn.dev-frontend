import React, { Component } from 'react';
import Accordion from '../../../components/Accordion';
import DuelsStats from './Duels';

class StatsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="stat-page">
                <div className="left-side">
                    {this.props.userData.skinURL ?
                        <div className="card small-card">
                            <div className="card-header">
                                Minecraft Skin
                            </div>
                            <div className="card-body">
                                <img src={this.props.userData.skinURL} alt=" "></img>
                            </div>
                        </div>
                    : <> </>}
                    <div className="card small-card">
                        <div className="card-header">
                            Minecraft Account
                        </div>
                        <div className="card-body">
                            <div className="card-row first">
                                <div className="row-head">Username</div>
                                <div className="row-body">{ this.props.userData.username }</div>
                            </div>
                            <div className="card-row">
                                <div className="row-head">UUID</div>
                                <div className="row-body">{ this.props.userData.uuid }</div>
                            </div>
                        </div>
                    </div>
                    { this.props.nameHistory ?
                    <div className="card small-card">
                        <div className="card-header">
                            Name History
                        </div>
                        <div className="card-body">
                            <div dangerouslySetInnerHTML={{__html: this.props.nameHistory}}>
                            </div>
                        </div>
                    </div>
                    : <> </>}
                </div>
                <div className="right-side">
                    <Accordion>
                        {this.props.duelsStats ? <DuelsStats duelsStats={this.props.duelsStats}/> : <></>}
                    </Accordion>
                    
                </div>
            </div>
        )
    }
}

export default StatsPage;