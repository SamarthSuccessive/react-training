import React, { Suspense } from 'react';

// Define a fallback component for Suspense

// Define an error boundary component
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Display a user-friendly error message
      return <div>Oops! Something went wrong.</div>;
    }

    return this.props.children;
  }
}

