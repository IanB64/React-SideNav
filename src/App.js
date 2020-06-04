import React from 'react';
import history from './history';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SideNav from './components/SideNav';
import GithubCorner from 'react-github-corner';
import DummyPage from './components/DummyPage';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <div className="container">
          <div>
            <GithubCorner href="https://github.com/IanB64/React-SideNav" 
              target="_blank" rel="noopener noreferrer"
            />
          </div>
          <div className="side-nav">
            <SideNav />
          </div>

          <div className="content">
            <Switch>
              <Route exact path="/">
                <Redirect to="/cs-home" />
              </Route>

              <Route
                exact
                path="/cs-home"
                component={() => <DummyPage text="CS home" />}
              />
              <Route
                exact
                path="/our-people"
                component={() => <DummyPage text="Our people" />}
              />
              <Route
                exact
                path="/about"
                component={() => <DummyPage text="About" />}
              />
              <Route
                exact
                path="/about/admin-structure"
                component={() => <DummyPage text="Administrative structure" />}
              />
              <Route
                exact
                path="/about/admin-structure/school-committees"
                component={() => <DummyPage text="School committees" />}
              />
              <Route
                exact
                path="/about/admin-structure/committee-membership"
                component={() => <DummyPage text="Committee membership" />}
              />
              <Route
                exact
                path="/about/fellowships-awards"
                component={() => (
                  <DummyPage text="Faculty Fellowships and Awards" />
                )}
              />
              <Route
                exact
                path="/about/facts"
                component={() => <DummyPage text="Quick facts" />}
              />
              <Route
                exact
                path="/about/visit"
                component={() => <DummyPage text="Visit us" />}
              />
              <Route
                exact
                path="/about/contact"
                component={() => <DummyPage text="Contact us" />}
              />
              <Route
                exact
                path="/message-from-director"
                component={() => <DummyPage text="Message from the Director" />}
              />
              <Route
                exact
                path="/current-grad-students"
                component={() => <DummyPage text="Current graduate students" />}
              />
              <Route
                exact
                path="/current-grad-students/policies-procedures"
                component={() => <DummyPage text="Policies and procedures" />}
              />
              <Route
                exact
                path="/current-grad-students/programs"
                component={() => <DummyPage text="Programs" />}
              />
              <Route
                exact
                path="/current-grad-students/funding-awards"
                component={() => <DummyPage text="Funding and awards" />}
              />
              <Route
                exact
                path="/current-grad-students/courses"
                component={() => <DummyPage text="Courses" />}
              />
              <Route
                exact
                path="/current-grad-students/courses/course-calendar"
                component={() => <DummyPage text="Course calendar" />}
              />
              <Route
                exact
                path="/current-grad-students/courses/course-calendar/600-level"
                component={() => <DummyPage text="600 - level courses" />}
              />
              <Route
                exact
                path="/current-grad-students/courses/course-calendar/700-level"
                component={() => <DummyPage text="700 - level courses" />}
              />
              <Route
                exact
                path="/current-grad-students/courses/course-calendar/800-level"
                component={() => <DummyPage text="800 - level courses" />}
              />
              <Route
                exact
                path="/current-grad-students/degree-completion"
                component={() => <DummyPage text="Degree completion" />}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
