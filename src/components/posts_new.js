import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

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
    console.log(values)
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
          name="title" // this is what connects to the validation . they must be identical
          component={this.renderField}>
          </Field>

        <Field
            labletolokeboke = "Categories"
            name="Categories"
            component={this.renderField}>
          </Field>

          <Field
              labletolokeboke = "PostContent"
              name="PostContent"
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
  errors.Categories = "Enter a Categories"
}
if ( !values.title|| values.title.length < 3){
  errors.PostContent = "Enter a PostContent"
}


 // if errors is empty , the form is fine to submit
 // if erros has any properties , redux form assumes form is invalid
  return errors;
}


export default reduxForm({
  validate,
  form: 'blablabla'
})(PostsNew);
