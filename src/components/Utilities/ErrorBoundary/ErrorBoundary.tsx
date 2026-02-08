import React, { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode //Custom fallback UI
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to show fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log error (can integrate Sentry or other logging service here)
    window.console.error('ErrorBoundary caught an error:', error, info)
  }

  render() {
    const { fallback } = this.props

    if (this.state.hasError) {
      return (
        fallback || (
          <div style={{ padding: 20, textAlign: 'center' }}>
            <h2>Something went wrong.</h2>
            <pre>{this.state.error?.message}</pre>
          </div>
        )
      )
    }

    return this.props.children
  }
}
