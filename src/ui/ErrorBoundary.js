import React from "react";
import ErrorMsg from "./ErrorMsg";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false , error: null, errorInfo: null};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.

    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {

      // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
       console.log('logging error: ',this.props.component, error,errorInfo)
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorMsg component={this.props.component}/>;
    }

    return this.props.children;
  }
}
export default ErrorBoundary;