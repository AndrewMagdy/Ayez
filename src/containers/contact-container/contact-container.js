// @flow

import { connect } from "react-redux";
import ContactComponent from "../../components/contact-component/contact-component";
import { saveContacts } from "../../actions/save-contacts/save-contacts";

const mapStateToProps = (state: Object) => ({
	error: state.contacts.error,
	isLoading: state.contacts.isLoading,
	didSave: state.contacts.didSave,
	myCode: state.contacts.myCode
});

const mapDispatchToProps = (dispatch: Function) => ({
	saveContacts: () => dispatch(saveContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactComponent);
