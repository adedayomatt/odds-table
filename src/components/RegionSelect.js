import React from 'react';
import { regions } from '../api'

export default class RegionSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          regions: [],
        };
      }

      componentDidMount() {
        this.setState({ regions })
      }
    
      render() {
        return (
            <div>
                <label>Region</label>
                <select value={ this.props.selected } onChange={ (e) => this.props.changed(e, 'region') }>
                {this.state.regions.map(region => {
                    return (<option value={region}>{region}</option>)
                })}
                </select>
            </div>
        );
      }
}