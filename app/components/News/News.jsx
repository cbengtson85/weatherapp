'use strict'

import React from 'react';

import AppWrapper from 'app/components/AppWrapper';

class NewsContent extends React.Component {
    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="index.html">Home</a>
                        <span>News</span>
                    </div>
                </div>


                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <h2 className="entry-title">Nemo enim ipsam voluptatem quia voluptas</h2>
                                    <div className="featured-image"><img src="img/featured-image-1.jpg" alt="" /></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus.</p>
                                    <a href="single.html" className="button">Read more</a>
                                </div>

                                <div className="post">
                                    <h2 className="entry-title">Nemo enim ipsam voluptatem quia voluptas</h2>
                                    <div className="featured-image"><img src="img/featured-image-2.jpg" alt="" /></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus.</p>
                                    <a href="single.html" className="button">Read more</a>
                                </div>

                                <div className="post">
                                    <h2 className="entry-title">Nemo enim ipsam voluptatem quia voluptas</h2>
                                    <div className="featured-image"><img src="img/featured-image-3.jpg" alt="" /></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nulla rem dolores unde et cum illum odio, enim quis odit eveniet quaerat non libero, consequatur voluptatem harum ad veritatis necessitatibus.</p>
                                    <a href="single.html" className="button">Read more</a>
                                </div>
                            </div>
                            <div className="sidebar col-md-3 col-md-offset-1">
                                <div className="widget">
                                    <h3 className="widget-title">Hot News</h3>
                                    <ul className="arrow-list">
                                        <li><a href="#">Accusamus dignissimos</a></li>
                                        <li><a href="#">Ducimus praesentium</a></li>
                                        <li><a href="#">Voluptatum deleniti corrupti</a></li>
                                        <li><a href="#">Wuos dolores excepturi sint</a></li>
                                        <li><a href="#">Occaecati provident dolor</a></li>
                                    </ul>
                                </div>

                                <div className="widget">
                                    <h3 className="widget-title">Categories</h3>
                                    <ul className="arrow-list">
                                        <li><a href="#">Nemo enim ipsam</a></li>
                                        <li><a href="#">Voluptatem voluptas</a></li>
                                        <li><a href="#">Aspernatur aut odit</a></li>
                                        <li><a href="#">Consequuntur magni</a></li>
                                        <li><a href="#">Dolores ratione</a></li>
                                        <li><a href="#">Voluptatem nesciunt</a></li>
                                        <li><a href="#">Neque porro quisquam</a></li>
                                        <li><a href="#">Dolorem ipsum quia</a></li>
                                    </ul>
                                </div>

                                <div className="widget top-rated">
                                    <h3 className="widget-title">Top rated posts</h3>
                                    <ul>
                                        <li><h3 className="entry-title"><a href="#">Doloremque laudantium lorem</a></h3><div className="rating"><strong>5.5</strong> (759 rates)</div></li>
                                        <li><h3 className="entry-title"><a href="#">Doloremque laudantium lorem</a></h3><div className="rating"><strong>5.5</strong> (759 rates)</div></li>
                                        <li><h3 className="entry-title"><a href="#">Doloremque laudantium lorem</a></h3><div className="rating"><strong>5.5</strong> (759 rates)</div></li>
                                        <li><h3 className="entry-title"><a href="#">Doloremque laudantium lorem</a></h3><div className="rating"><strong>5.5</strong> (759 rates)</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

let News = AppWrapper(NewsContent);

export default News;
