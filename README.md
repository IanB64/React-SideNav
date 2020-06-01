# React-SideNav

The SideNav component conncects to redux, gets the mainNav and navs from the sidenav reducer. 
  mainNav - object with keys: label, text, path
    example:
      { see mainNavReducer in reducers/sidenav.js }
      
  navs - array of objects, keys: label, text, path, items(optional)
    example: 
      { see navsReducer in reducers/sidenav.js }

***
NOTE: IMPORTANT!! The path for each item has to follow the hiearchy format. And the label must be the same as the last string in the path. 
  Usage:
    <SideNav />
***

SideNavItem component connects to redux, gets the selectedNav and use selectNav to update the selectedNav
  props:
  depthStep - set to 10px
  depth - initial to be 0, increase by 1 for every level.
  item - one of the navs or the mainNav
  selectedNav - one of the navs or the mainNav
  
  example:
    {
      label: 'our-people',
      text: 'Our people',
      path: '/cs-home/our-people',
    }
