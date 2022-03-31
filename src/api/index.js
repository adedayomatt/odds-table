import config from '../config'
/**
 * Get Odds data 
 * @param {*} filters 
 * @returns 
 */
export const getOdds = async (filters) =>  fetch(`${config.apiUrl}/sports/${filters.sport}/odds?regions=${filters.region}&apiKey=${config.apiKey}`);

/**
 * Get sports
 * 
 * @returns 
 */
export const getSports = () => fetch(`${config.apiUrl}/sports?apiKey=${config.apiKey}`)

export const regions = [ 'us', 'uk', 'au', 'eu' ]

export const markets = [ 'h2h', 'outrights' ]

export const formats = [ 'decimal', 'american' ]