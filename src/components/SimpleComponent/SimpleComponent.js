import React, { Component } from 'react';
import $ from 'jquery';

export default class SimpleComponent extends Component {

    buttonClicked() {
        $('.knnz.deleteme').remove();
    }
    
    render() {
        return <div>
                <p>You should be editing and playing with this :-)</p>
                <p>Come find me! I am the file <span className='knnz'>src/components/SimpleComponent/SimpleComponent.js</span></p>
                <div>
                    jQuery example: <span className='knnz deleteme'>THIS WILL BE DELETED WHEN YOU CLICK THE</span>
                     <button onClick={this.buttonClicked}>button</button>
                 </div>
            </div>;
    }
}
