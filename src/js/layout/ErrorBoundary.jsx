import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI.
        return { hasError: true, error: error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-screen" style={{ padding: '20px', border: '1px solid red' }}>
                    <h1>Something went wrong</h1>
                    <p style={{ color: 'red' }}>
                        <strong>Error:</strong> {this.state.error?.message || "Unknown Error"}
                    </p>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error?.stack}
                    </details>
                    <button onClick={() => window.location.reload()}>Try Again</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;