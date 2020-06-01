import { combineReducers } from 'redux';

export const mainNavReducer = () => {
  return {
    label: 'cs-home',
    text: 'Cheriton School of Computer Science home',
    path: '/cs-home',
  };
};

export const navsReducer = () => {
  return [
    {
      label: 'our-people',
      text: 'Our people',
      path: '/cs-home/our-people',
    },
    {
      label: 'about',
      text: 'About the Cheriton School of Computer Science',
      path: '/cs-home/about',
      items: [
        {
          label: 'admin-structure',
          text: 'Administrative structure',
          path:
            '/cs-home/about/admin-structure',
          items: [
            {
              label: 'school-committees',
              text: 'School committees',
              path:
                '/cs-home/about/admin-structure/school-committees',
            },
            {
              label: 'committee-membership',
              text: 'Committee membership',
              path:
                '/cs-home/about/admin-structure/committee-membership',
            },
          ]
        },
        {
          label: 'fellowships-awards',
          text: 'Faculty Fellowships and Awards',
          path:
            '/cs-home/about/fellowships-awards',
        },
        {
          label: 'facts',
          text: 'Quick facts',
          path:
            '/cs-home/about/facts',
        },
        {
          label: 'visit',
          text: 'Visit us',
          path:
            '/cs-home/about/visit',
        },
        {
          label: 'contact',
          text: 'Contact us',
          path:
            '/cs-home/about/contact',
        },
      ],
    },
    {
      label: 'message-from-director',
      text: 'Message from the Director',
      path: '/cs-home/message-from-director',
    },
    {
      label: 'current-grad-students',
      text: 'Current graduate students',
      path: '/cs-home/current-grad-students',
      items: [
        {
          label: 'policies-procedures',
          text: 'Policies and procedures',
          path: '/cs-home/current-grad-students/policies-procedures',
        },
        {
          label: 'programs',
          text: 'Programs',
          path: '/cs-home/current-grad-students/programs',
        },
        {
          label: 'funding-awards',
          text: 'Funding and awards',
          path: '/cs-home/current-grad-students/funding-awards',
        },
        {
          label: 'courses',
          text: 'Courses',
          path: '/cs-home/current-grad-students/courses',
          items: [
            {
              label: 'course-calendar',
              text: 'Course calendar',
              path: '/cs-home/current-grad-students/courses/course-calendar',
              items: [
                {
                  label: '600-level',
                  text: '600 - level courses',
                  path: '/cs-home/current-grad-students/courses/course-calendar/600-level',
                },
                {
                  label: '700-level',
                  text: '700 - level courses',
                  path: '/cs-home/current-grad-students/courses/course-calendar/700-level',
                },
                {
                  label: '800-level',
                  text: '800 - level courses',
                  path: '/cs-home/current-grad-students/courses/course-calendar/800-level',
                }
              ]
            }
          ]
        },
        {
          label: 'degree-completion',
          text: 'Degree completion',
          path: '/cs-home/current-grad-students/degree-completion',
        }
      ]
    }
  ];
};

export const selectedNavReducer = (selectedNav = null, action) => {
  if (action.type === 'NAV_SELECTED') {
    return action.payload;
  }

  return selectedNav;
};