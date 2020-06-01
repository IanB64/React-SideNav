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


/**
 * The SideNav component conncects to redux, gets the mainNav, navs from the sidenav reducer.
 *
 * mainNav - object with keys: label, text, path
 *  example:
 *    {
 *      label: 'products-services',
 *      text: 'Products & Services',
 *      path: '/products-services',
 *    };
 *
 * -------------------------------------------------------------------------------------
 *
 * navs - array of objects, keys: label, text, path, items(optional), arrow(optional)
 *
 *  example:
 *    [
 *      {
 *        label: 'credit-mortage-protection',
 *        text: 'Credit & Mortage Protection',
 *        path: '/products-services/credit-mortage-protection',
 *        items: [
 *          {
 *            label: 'credit-card-balance-protection',
 *            text: 'Credit Card Balance Protection',
 *            path:
 *              '/products-services/credit-mortage-protection/credit-card-balance-protection',
 *            arrow: true,
 *          },
 *          {
 *            label: 'loan-line-of-credit-protection',
 *            text: 'Loan and Line of Credit Protection',
 *            path:
 *              '/products-services/credit-mortage-protection/loan-line-of-credit-protection',
 *            arrow: true,
 *          },
 *        ],
 *      },
 *      {
 *        label: 'insurance-for-credit-unions',
 *        text: 'Insurance for Credit Unions',
 *        path: '/products-services/insurance-for-credit-unions',
 *        items: [
 *          {
 *            label: 'bonding',
 *            text: 'Bonding',
 *            path: '/products-services/insurance-for-credit-unions/bonding',
 *            arrow: true,
 *          }
 *        ]
 *      },
 *      {
 *        label: 'retirement-services',
 *        text: 'Retirement Services',
 *        path: '/products-services/retirement-services'
 *      }
 *    ]
 *
 *
 ***************************************************************************************************
 * NOTE: IMPORTANT!! The path for each item has to follow the hiearchy format. And the label must be
 * the same as the last string in the path.
 *
 * Usage
 * ---------------
 * <SideNav />
 */