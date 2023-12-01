import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log('Uncaught error:', error, errorInfo);
    // Log a message to confirm that this block is reached
    console.log('Error caught - Reloading...');
    // Reload the window
    window.location.reload();
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Sorry, something went wrong. Reloading...</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;