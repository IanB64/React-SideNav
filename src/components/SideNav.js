import React from 'react';
import SideNavItem from './SideNavItem';
import '../styles/components/SideNav.scss';
import { connect } from 'react-redux';

export class SideNav extends React.Component {
  render() {
    return (
      <div className='sideNav'>
        {
          this.props.mainNav ?
            <SideNavItem
              className='mainNav'
              depthStep={10}
              depth={0}
              item={this.props.mainNav}
            /> : null
        }
        <div>
          {
            this.props.navs ?
              this.props.navs.map((sidenavItem, index) => (
                <div key={`${sidenavItem.name}${index}`}>
                  <hr className='solid' />
                  <SideNavItem depthStep={10} depth={0} item={sidenavItem} />
                </div>
              )) : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    navs: state.navs,
    mainNav: state.mainNav,
  };
};

export default connect(mapStateToProps)(SideNav);
