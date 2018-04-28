import React,{Component} from 'react';
import '../App.css';

class MenuHeader extends Component {
    render() {
        return(
            <div className="menuHeader">
            <a>live</a>
          <a>artists</a>
          <a>releases</a>
          <a>tours</a>
          <a>contacts</a>
            </div>
        )
    }
}

export default MenuHeader;