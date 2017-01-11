'use strict'

import React from 'react';
import {SocialLink} from 'app/components/Social';

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
    socialSites : [
        {name : 'facebook', url : 'https://www.facebook.com/sharer/sharer.php?u=givemetheweather.com'},
        {name : 'twitter', url : 'https://twitter.com/home?status=givemetheweather.com'},
        {name : 'google-plus', url : 'https://plus.google.com/share?url=givemetheweather.com'},
        {name : 'pinterest', url : 'https://pinterest.com/pin/create/button/?url=givemetheweather.com&media=&description='}]
};

export default SocialLinks;
