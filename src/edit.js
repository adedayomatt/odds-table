/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

import OddsTable from './components/Table';
import SportSelect from './components/SportSelect';
import RegionSelect from './components/RegionSelect';
import MarketSelect from './components/MarketSelect';

export default function edit(props) {
	const { attributes: { sport, region, market }, setAttributes,  } = props;

	function setFilter(e, attribute) {
        const selected = e.target.querySelector( 'option:checked' );
        setAttributes( { [attribute]: selected.value } );
        e.preventDefault();
    }

	return (
		<div {...useBlockProps()}>
			<div className='filter-container'>
				<SportSelect selected={ sport } changed={ setFilter }/>
				<RegionSelect selected={ region } changed={ setFilter } />
				<MarketSelect selected={ market } changed={ setFilter } />
			</div>
			<div className='odds-table-container'>
				<OddsTable filters={ props.attributes } />
			</div>
		</div>
	);
}
