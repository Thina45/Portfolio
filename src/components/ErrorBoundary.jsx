import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex-col-center min-h-screen bg-black text-white-50 gap-5 px-5">
          <h1 className="text-3xl font-bold">Oops! Something went wrong</h1>
          <p className="text-center max-w-md">
            We encountered an unexpected error. Please refresh the page or try again later.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-white-50 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
