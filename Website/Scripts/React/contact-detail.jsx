class ContactDetail extends React.Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values } = this.props;
        return (
            <form>
                <h3 className="breadcrumb">Contact</h3>
                <hr />
                <div className='form-group'>
                    <label>Email</label>
                    <input placeholder='email' className='form-control'
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                    />
                </div>
                <button onClick={this.back} className="btn btn-primary" > &#60; Back</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.saveAndContinue} disabled={!this.props.isFormValid} className="btn btn-primary">Submit</button>
            </form>
        );
    }
}