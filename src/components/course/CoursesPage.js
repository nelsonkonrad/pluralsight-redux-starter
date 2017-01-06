import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends Component {

    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }  

    render() {
        const {courses} = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={courses}/>                           
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses                                               // We are calling the rootReducer courses
    };
}

function mapDispatchToProps(dispatch) {                                     // dispatch gets injected in by the connect function
    return {
        actions: bindActionCreators(courseActions , dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);    // Exporting a component decorated by the React-Redux Connect function
                                                                             // The Connect function is what we use to create components that can interact with Redux
                                                                             // mapDispatchToProps (optional parameter): What actions you want to expose on your component
                                                                             //                                          If omitted, our component gets a dispatch property attached to it.
                                                                             //                                          If you include it, there is not going to be a dispatch property injected.
                                                                             // dispatch: Let's you fire off your actions

// this.onTitleChange = this.onTitleChange.bind(this); // React doesn't autobind in ES6 classes
// line 23: this.props.courses