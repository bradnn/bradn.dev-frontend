import React, { Component } from "react";
import AccordionItem from "../../../components/AccordionItem";

class duelsStats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    function parseDivision(num) {
      if (isNaN(num)) {
        return 0;
      }
      return num;
    }

    return (
      <AccordionItem title="Duels Stats">
        <div className="card-row first">
          <div className="row-body">
            <strong>Coins: </strong>
            {this.props.duelsStats.overall.coins}
            <br />
            <br />
            <strong>Kills: </strong>
            {this.props.duelsStats.overall.kills}
            <br />
            <strong>Deaths: </strong>
            {this.props.duelsStats.overall.deaths}
            <br />
            <strong>K/D: </strong>
            {parseDivision(this.props.duelsStats.overall.kd)}
            <br />
            <br />
            <strong>Wins: </strong>
            {this.props.duelsStats.overall.wins}
            <br />
            <strong>Losses: </strong>
            {this.props.duelsStats.overall.losses}
            <br />
            <strong>W/L: </strong>
            {parseDivision(this.props.duelsStats.overall.wl)}
            <br />
            <br />
            <table className="stat-table">
              <thead>
                <tr>
                  <th>Mode</th>
                  <th>Kills</th>
                  <th>Deaths</th>
                  <th>K/D</th>
                  <th>Wins</th>
                  <th>Losses</th>
                  <th>W/L</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>UHC 1v1</td>
                  <td>{this.props.duelsStats.uhc1v1.kills}</td>
                  <td>{this.props.duelsStats.uhc1v1.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.uhc1v1.kd)}</td>
                  <td>{this.props.duelsStats.uhc1v1.wins}</td>
                  <td>{this.props.duelsStats.uhc1v1.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.uhc1v1.wl)}</td>
                </tr>
                <tr>
                  <td>UHC 2v2</td>
                  <td>{this.props.duelsStats.uhc2v2.kills}</td>
                  <td>{this.props.duelsStats.uhc2v2.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.uhc2v2.kd)}</td>
                  <td>{this.props.duelsStats.uhc2v2.wins}</td>
                  <td>{this.props.duelsStats.uhc2v2.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.uhc2v2.wl)}</td>
                </tr>
                <tr>
                  <td>UHC 4v4</td>
                  <td>{this.props.duelsStats.uhc4v4.kills}</td>
                  <td>{this.props.duelsStats.uhc4v4.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.uhc4v4.kd)}</td>
                  <td>{this.props.duelsStats.uhc4v4.wins}</td>
                  <td>{this.props.duelsStats.uhc4v4.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.uhc4v4.wl)}</td>
                </tr>
                <tr>
                  <td>OP 1v1</td>
                  <td>{this.props.duelsStats.op1v1.kills}</td>
                  <td>{this.props.duelsStats.op1v1.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.op1v1.kd)}</td>
                  <td>{this.props.duelsStats.op1v1.wins}</td>
                  <td>{this.props.duelsStats.op1v1.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.op1v1.wl)}</td>
                </tr>
                <tr>
                  <td>OP 2v2</td>
                  <td>{this.props.duelsStats.op2v2.kills}</td>
                  <td>{this.props.duelsStats.op2v2.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.op2v2.kd)}</td>
                  <td>{this.props.duelsStats.op2v2.wins}</td>
                  <td>{this.props.duelsStats.op2v2.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.op2v2.wl)}</td>
                </tr>
                <tr>
                  <td>Sumo 1v1</td>
                  <td>{this.props.duelsStats.sumo.kills}</td>
                  <td>{this.props.duelsStats.sumo.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.sumo.kd)}</td>
                  <td>{this.props.duelsStats.sumo.wins}</td>
                  <td>{this.props.duelsStats.sumo.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.sumo.wl)}</td>
                </tr>
                <tr>
                  <td>SkyWars 1v1</td>
                  <td>{this.props.duelsStats.skywars1v1.kills}</td>
                  <td>{this.props.duelsStats.skywars1v1.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.skywars1v1.kd)}</td>
                  <td>{this.props.duelsStats.skywars1v1.wins}</td>
                  <td>{this.props.duelsStats.skywars1v1.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.skywars1v1.wl)}</td>
                </tr>
                <tr>
                  <td>SkyWars 2v2</td>
                  <td>{this.props.duelsStats.skywars2v2.kills}</td>
                  <td>{this.props.duelsStats.skywars2v2.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.skywars2v2.kd)}</td>
                  <td>{this.props.duelsStats.skywars2v2.wins}</td>
                  <td>{this.props.duelsStats.skywars2v2.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.skywars2v2.wl)}</td>
                </tr>
                <tr>
                  <td>Bridge 1v1</td>
                  <td>{this.props.duelsStats.bridge1v1.kills}</td>
                  <td>{this.props.duelsStats.bridge1v1.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.bridge1v1.kd)}</td>
                  <td>{this.props.duelsStats.bridge1v1.wins}</td>
                  <td>{this.props.duelsStats.bridge1v1.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.bridge1v1.wl)}</td>
                </tr>
                <tr>
                  <td>Bridge 2v2</td>
                  <td>{this.props.duelsStats.bridge2v2.kills}</td>
                  <td>{this.props.duelsStats.bridge2v2.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.bridge2v2.kd)}</td>
                  <td>{this.props.duelsStats.bridge2v2.wins}</td>
                  <td>{this.props.duelsStats.bridge2v2.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.bridge2v2.wl)}</td>
                </tr>
                <tr className="last-stat-table">
                  <td>Bridge Teams</td>
                  <td>{this.props.duelsStats.bridge4v4.kills}</td>
                  <td>{this.props.duelsStats.bridge4v4.deaths}</td>
                  <td>{parseDivision(this.props.duelsStats.bridge4v4.kd)}</td>
                  <td>{this.props.duelsStats.bridge4v4.wins}</td>
                  <td>{this.props.duelsStats.bridge4v4.losses}</td>
                  <td>{parseDivision(this.props.duelsStats.bridge4v4.wl)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </AccordionItem>
    );
  }
}

export default duelsStats;
