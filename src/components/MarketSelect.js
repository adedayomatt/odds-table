import React from 'react';
import { markets } from '../api'

export default class MarketSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          markets: [],
        };
      }

      componentDidMount() {
        this.setState({ markets })
      }
    
      render() {
        return (
            <div>
                <label>Market</label>
                <select value={ this.props.selected } onChange={ (e) => this.props.changed(e, 'market') }>
                {this.state.markets.map(market => {
                    return (<option value={market}>{market}</option>)
                })}
                </select>
            </div>
        );
      }
}