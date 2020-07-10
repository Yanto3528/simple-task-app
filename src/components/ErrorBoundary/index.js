import React, { Component } from "react";

// Berfungsi untuk menampilkan fallback UI ketika ada error pada aplikasi
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Kalau ada error maka state di update supaya bisa menampilkan error
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          Something went wrong.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
