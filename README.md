# HNG12 Stage 0 - Public API

## Project Description

This is a simple public API developed as part of the HNG12 Stage 0 Backend task. The API provides basic information in JSON format, including:

- The registered email address for HNG12.
- The current datetime in ISO 8601 format (UTC).
- The GitHub URL of this project's repository.

## Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Hosting**: Vercel
- **Version Control**: GitHub

## API Endpoint

### **Base URL:**

```
https://your-vercel-deployment-url/api/info
```

### **GET /api/info**

#### Response Format (200 OK):

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Running Locally

To run the API locally, follow these steps:

### **1. Clone the Repository**

```sh
git clone https://github.com/yourusername/your-repo.git
cd your-repo
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
http://localhost:3000/api/info
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

- **Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

