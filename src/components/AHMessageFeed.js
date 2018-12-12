import { fetchAHMessages } from "../actions/action";
import { connect } from "react-redux";
import { MessageFeed } from "./MessageFeed";

const mapStateToProps = state => {
    return {
      messages: state.user.messages
    };
  };
  
  const mapDispatchToProps = 
    {
      //This is a shorcut for map.dispatchToProps
      fetchMessages: fetchAHMessages
    };
  
  export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed);