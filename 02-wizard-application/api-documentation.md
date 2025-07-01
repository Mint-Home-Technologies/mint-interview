# API Documentation

This document outlines the suggested API endpoints for the wizard application.

## Base URL

```
http://localhost:3001/api
```

## Endpoints

### Wizard Flow

#### Get Initial Wizard Step

```
GET /wizard/initial-step
```

Response:
```json
{
  "step": "address",
  "data": {}
}
```

#### Get Next Wizard Step

```
POST /wizard/next-step
```

Request Body:
```json
{
  "currentStep": "address",
  "data": {
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zipCode": "12345"
    }
  }
}
```

Response:
```json
{
  "nextStep": "ac-units",
  "data": {
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zipCode": "12345"
    }
  }
}
```

#### Save Wizard Session

```
POST /wizard/save-session
```

Request Body:
```json
{
  "sessionId": "abc123",
  "currentStep": "ac-units",
  "data": {
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zipCode": "12345"
    },
    "acUnits": 2
  }
}
```

Response:
```json
{
  "success": true,
  "sessionId": "abc123"
}
```

#### Get Wizard Session

```
GET /wizard/session/:sessionId
```

Response:
```json
{
  "sessionId": "abc123",
  "currentStep": "ac-units",
  "data": {
    "address": {
      "street": "123 Main St",
      "city": "Anytown",
      "state": "CA",
      "zipCode": "12345"
    },
    "acUnits": 2
  },
  "completed": false
}
```

### User Management

#### Create User

```
POST /users
```

Request Body:
```json
{
  "name": "John Doe",
  "phone": "555-123-4567",
  "email": "john@example.com"
}
```

Response:
```json
{
  "id": 1,
  "name": "John Doe",
  "phone": "555-123-4567",
  "email": "john@example.com",
  "createdAt": "2023-07-01T12:00:00Z"
}
```

### Quote Requests

#### Submit Quote Request

```
POST /quote-requests
```

Request Body:
```json
{
  "userId": 1,
  "addressId": 1,
  "acUnits": 2,
  "systemType": "split",
  "heatingType": "gas"
}
```

Response:
```json
{
  "id": 1,
  "userId": 1,
  "addressId": 1,
  "acUnits": 2,
  "systemType": "split",
  "heatingType": "gas",
  "status": "pending",
  "createdAt": "2023-07-01T12:00:00Z"
}
```

#### Get Quote Request

```
GET /quote-requests/:id
```

Response:
```json
{
  "id": 1,
  "user": {
    "id": 1,
    "name": "John Doe",
    "phone": "555-123-4567",
    "email": "john@example.com"
  },
  "address": {
    "id": 1,
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zipCode": "12345"
  },
  "acUnits": 2,
  "systemType": "split",
  "heatingType": "gas",
  "status": "pending",
  "createdAt": "2023-07-01T12:00:00Z"
}
```

## Error Responses

All endpoints should return appropriate HTTP status codes and error messages:

```json
{
  "statusCode": 400,
  "message": "Bad Request",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

## Authentication

For simplicity, this API does not include authentication. In a production environment, you would want to implement proper authentication and authorization.