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
      path: '/our-people',
    },
    {
      label: 'about',
      text: 'About the Cheriton School of Computer Science',
      path: '/about',
      items: [
        {
          label: 'admin-structure',
          text: 'Administrative structure',
          path:
            '/about/admin-structure',
          items: [
            {
              label: 'school-committees',
              text: 'School committees',
              path:
                '/about/admin-structure/school-committees',
            },
            {
              label: 'committee-membership',
              text: 'Committee membership',
              path:
                '/about/admin-structure/committee-membership',
            },
          ]
        },
        {
          label: 'fellowships-awards',
          text: 'Faculty Fellowships and Awards',
          path:
            '/about/fellowships-awards',
        },
        {
          label: 'facts',
          text: 'Quick facts',
          path:
            '/about/facts',
        },
        {
          label: 'visit',
          text: 'Visit us',
          path:
            '/about/visit',
        },
        {
          label: 'contact',
          text: 'Contact us',
          path:
            '/about/contact',
        },
      ],
    },
    {
      label: 'message-from-director',
      text: 'Message from the Director',
      path: '/message-from-director',
    },
    {
      label: 'current-grad-students',
      text: 'Current graduate students',
      path: '/current-grad-students',
      items: [
        {
          label: 'policies-procedures',
          text: 'Policies and procedures',
          path: '/current-grad-students/policies-procedures',
        },
        {
          label: 'programs',
          text: 'Programs',
          path: '/current-grad-students/programs',
        },
        {
          label: 'funding-awards',
          text: 'Funding and awards',
          path: '/current-grad-students/funding-awards',
        },
        {
          label: 'courses',
          text: 'Courses',
          path: '/current-grad-students/courses',
          items: [
            {
              label: 'course-calendar',
              text: 'Course calendar',
              path: '/current-grad-students/courses/course-calendar',
              items: [
                {
                  label: '600-level',
                  text: '600 - level courses',
                  path: '/current-grad-students/courses/course-calendar/600-level',
                },
                {
                  label: '700-level',
                  text: '700 - level courses',
                  path: '/current-grad-students/courses/course-calendar/700-level',
                },
                {
                  label: '800-level',
                  text: '800 - level courses',
                  path: '/current-grad-students/courses/course-calendar/800-level',
                }
              ]
            }
          ]
        },
        {
          label: 'degree-completion',
          text: 'Degree completion',
          path: '/current-grad-students/degree-completion',
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