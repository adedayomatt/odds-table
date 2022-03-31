
import React from 'react';
import { getOdds } from '../api';
import oddsMock from '../mock/odds';

export default class OddsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          odds: [],
        };
      }

      componentDidMount() {
        this.fetchOdds();
      }


      fetchOdds() {
          console.log("Fetching odds with props----", this.props);
        getOdds(this.props.filters).then(response => {
            this.setState({ odds: response.data })
        })
        .catch(e => {
            console.log("Error getting odds data--->", e);
            this.setState({
                odds: oddsMock
            })
        })
      }
    
      render() {
        return (
            <table className='odds-table'>
                {this.state.odds.map((odd,i) => {
                    const homeTeam = odd.home_team ?? 'HomeTeam';
                    const awayTeam = odd.away_team ?? 'AwayTeam';
                    return (
                        <tr className={(i+1)%2 == 1 ? 'bg' : ''}>
                            <td className='team-container'>{homeTeam} vs. {awayTeam}</td>
                            <td className='bookmakers-container'>
                                <table>
                                    <tr>
                                        {odd.bookmakers.map(bookmaker => {
                                            return (
                                            <td>
                                                <div><strong>{ bookmaker.title }</strong></div>
                                                <table>
                                                    <tr>
                                                        {bookmaker.markets[0].outcomes.slice(0,3).map(outcome => {
                                                            return (
                                                                <td>
                                                                    <div>{outcome.name}</div>
                                                                    <div>{outcome.price}</div>
                                                                </td>
                                                            )
                                                        })}
                                                    </tr>
                                                </table>
                                            </td>
                                            )
                                        })}
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    )
                })}
            </table>
        )
      }
}