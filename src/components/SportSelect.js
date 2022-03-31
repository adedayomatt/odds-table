import React from 'react';
import { getSports } from '../api'
import sportsMock from '../mock/sports';

export default class SportSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sports: [],
          selected: null
        };
      }

      componentDidMount() {
        getSports().then(response => {
            this.setState({ sports: response.data })
        })
        .catch(e => {
            console.log("Error getting sports--->", e);
            this.setState({ sports: sportsMock });
        })
      }
    
      render() {
        return (
            <div>
                <label>Sport</label>
                <select value={ this.props.selected } onChange={ (e) => this.props.changed(e, 'sport') }>
                {this.state.sports.map(sport => {
                    return (<option value={sport.key}>{sport.title}</option>)
                })}
                </select>
            </div>
        );
      }
}