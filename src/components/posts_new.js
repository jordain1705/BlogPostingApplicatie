import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {createPost} from  '../actions';

class PostsNew extends Component {

// this is duplicate. so lets make a component that makes a field.
// renderTitleField(field) {
  //   return (
  //     <div className = "form-group">
  //       <lable>Title</lable>
  //       <input
  //         className = "form-control"
  //         type="txt"
  //         placeholder="something"
  //         // onChange = {field.input.onChange} // we dont have to do this anymore we can do this V
  //         {...field.input}
  //       />
  //     </div>
  //
  //   );
  // }
// renderTagsField(field) {
  //   return (
  //     <div className = "form-group">
  //       <lable>Tags</lable>
  //       <input
  //         className = "form-control"
  //         type="txt"
  //         placeholder="something"
  //         // onChange = {field.input.onChange} // we dont have to do this anymore we can do this V
  //         {...field.input}
  //       />
  //     </div>
  //
  //   );
  // }

  renderField(field) {
    const {meta: {touched,error}} = field;
    const className = `form-groupn ${touched && error ? 'has-danger' : ''}`

    return (
      <div className = {className}>
        <lable>{field.labletolokeboke}</lable>
        <input
          className = "form-control"
          type="txt"
          placeholder={field.labletolokeboke}
          // onChange = {field.input.onChange} // we dont have to do this anymore we can do this V
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}</div>
      </div>
  //ternary operator
    );
  }

  onSubmit(values){
    // whenever we think about saving data or making an api request of any type
    // we should be thinking about action creators.
    // so onSubmit we want to be calling an action creator

    this.props.createPost(values);

  }


  render() {
    const {handleSubmit} = this.props;
    //handleSubmit: when the user submits. Reduxform checks and validates if everything is oke.
    // and after redux form has validateded the form. It wil call our own onSubmit function

  // in other words first the redux side of things wil run then our side wil run

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          labletolokeboke = "title"
          name="title" // this is what connects to the validation . they must be identical.and they must have the same name as yhe object in your json api 
          component={this.renderField}>
          </Field>

        <Field
            labletolokeboke = "categories"
            name="categories"
            component={this.renderField}>
          </Field>

          <Field
              labletolokeboke = "PostContent"
              name="content"
              component={this.renderField}>
            </Field>
            <button type="submit" className= "btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">cancel</Link>
      </form>

    );

  }
}

// validation !!!!!
function validate(values){
  const errors ={};


//validate the inputs from 'values'
if ( !values.title || values.title.length < 3){
  errors.title = "Enter a title"
}
if ( !values.title || values.title.length < 3){
  errors.categories = "Enter a Categories"
}
if ( !values.title|| values.title.length < 3){
  errors.PostContent = "Enter a PostContent"
}


 // if errors is empty , the form is fine to submit
 // if erros has any properties , redux form assumes form is invalid
  return errors;
}

//helpers
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null,{ createPost })(PostsNew)
);
