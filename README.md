# HNG12 Stage 0 - Public API

## Project Description

This is a simple public API developed as part of the HNG12 Stage 0 Backend task. The API provides basic information in JSON format, including:

- The registered email address for HNG12.
- The current datetime in ISO 8601 format (UTC).
- The GitHub URL of this project's repository.

## Technology Stack

- **Framework**: Next.js (App Router)
- **Runtime**: NodeJS
- **Language**: TypeScript
- **Hosting**: Vercel
- **Version Control**: GitHub

## API Endpoint

### **Base URL:**

```
https://lexiz-hng-backend-0.vercel.app
```

### **GET /**

#### Response Format (200 OK):

```json
{
  "email": "lexizuchenna@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/lexizuchenna/hng-backend-0.git"
}
```

## Running Locally

To run the API locally, follow these steps:

### **1. Clone the Repository**

```sh
git clone https://github.com/lexizuchenna/hng-backend-0.git
cd hng-backend-0.git
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Start the Development Server**

```sh
npm run dev
```

The API will be available at:

```
http://localhost:3000
```

## Deployment

The API is deployed on **Vercel**. To deploy your own version:

```sh
npx vercel
```

## Cross-Origin Resource Sharing (CORS)

This API allows requests from all origins using:

```ts
response.headers.set("Access-Control-Allow-Origin", "*");
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Node.js Developers for Hire](https://hng.tech/hire/nodejs-developers)

## Author

- **Alexander**
- GitHub: [@lexizuchenna](https://github.com/lexizuchenna)

