import React, { Component } from 'react';

import validate from 'util/validation';
import { checkProperties } from 'util/objects';

export class UISection extends Component {

	render() {
		return (
			<section id={this.props.id} className="ui-section mt-margin mb-4">
				<div className="grid-flex">
					<div className="col-6">
						<h1 className="title">{this.props.title}</h1>
					</div>
				</div>
				<div className="mt-3 padding-after">
					{this.props.propsSummary}
					<div className="rich-text section-desc">
						{this.props.description}
					</div>
				</div>
				{this.props.children ? (<div className="mt-3">{this.props.children}</div>) : false}
			</section>
		);
	}
}

export default UISection;