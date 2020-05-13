import React from "react";

type Props = {
  fallback: React.ReactElement;
};

const initialState = { error: null, info: null };

class ErrorBoundary extends React.Component<Props> {
  state = initialState;

  componentDidCatch(error: any) {
    this.setState({ error });
  }

  render() {
    if (this.state.error !== null) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
