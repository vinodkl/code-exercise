/**
Utility RestApi layer.
Important if dealing with authentication, all requests pass through this layer.
**/

// polifill for Fetch API
import 'isomorphic-fetch';

export default class RestApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get() {
    const options = { method: 'GET' };
    const apiEndpoint = this.formatApiEndpoint();
    return fetch(apiEndpoint, options);
  }

  put(url, body) {
    const apiEndpoint = this.formatApiEndpoint(url);
    const options = { method: 'PUT', body: JSON.stringify(body) };
    return fetch(apiEndpoint, options);
  }

  post(url, body) {
    const apiEndpoint = this.formatApiEndpoint(url);
    const options = { method: 'POST', body: JSON.stringify(body) };
    return fetch(apiEndpoint, options);
  }

  delete(url) {
    const apiEndpoint = this.formatApiEndpoint(url);
    const options = { method: 'DELETE' };
    return fetch(apiEndpoint, options);
  }

  formatApiEndpoint() {
    const testing = process.env.NODE_ENV === 'test';
    const apiUrl = `${testing ? 'http://localhost' : ''}/api${this.baseUrl}`;
    return apiUrl;
  }
}
