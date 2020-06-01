import React from 'react';
import '../styles/components/SideNav.scss';
import { selectNav } from '../actions/sidenav';
import { connect } from 'react-redux';

export class _SideNavItem extends React.Component {
  onClick = (e) => {
    this.props.selectNav(this.props.item);
  };

  render() {
    const { label, text, items } = this.props.item;
    let className = this.props.className
      ? this.props.className
      : 'sideNav-item';

    if (className === 'sideNav-item' && this.props.selectedNav) {
      if (label === this.props.selectedNav.label) {
        className += ' selected';
      }
    }

    const collapse = this.props.selectedNav
      ? this.props.selectedNav.path.includes(label)
      : false;

    let arrowClass = !collapse ? 'sideNav-item-arrow' : 'sideNav-item-arrow-selected'

    return (
      <div className='navItem'>
        <div className={className} onClick={() => this.onClick()}>
          <div
            style={{ paddingLeft: this.props.depth * this.props.depthStep }}
            className='sideNav-item-content'
          >
            <div className='sideNav-item-text'>{text}</div>
            {items ? <i className={arrowClass} /> : null}
          </div>
        </div>
        <div className='subItems'>
          {
            collapse ?
              (Array.isArray(items) ?
                (
                  <div>
                    {
                      items.map((subItem, index) => (
                        <React.Fragment key={`${subItem.name}${index}`}>
                          {
                            <SideNavItem
                              depth={this.props.depth + 1}
                              depthStep={this.props.depthStep}
                              item={subItem}
                            />
                          }
                        </React.Fragment>
                      ))
                    }
                  </div>
                ) : null
              ) : null
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedNav: state.selectedNav,
  };
};

const SideNavItem = connect(mapStateToProps, { selectNav })(_SideNavItem);
export default SideNavItem;
