'use strict'

import React from 'react';
import {SocialLink} from 'app/components/Social'

class SocialLinks extends React.Component {
    render() {
        return (
            <div className="social-links">
                {this.props.socialSites.map((site, index) =>
                    <SocialLink key={index} site={site}/>
                )}
            </div>
        )
    }
}

SocialLinks.propTypes = {
    socialSites : React.PropTypes.array
};

SocialLinks.defaultProps = {
    socialSites : ['facebook', 'twitter', 'google-plus', 'pinterest']
};

export default SocialLinks;
