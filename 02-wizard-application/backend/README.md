# Backend - NestJS API for Wizard Application

This directory should contain your NestJS application for the backend API.

## Suggested Structure

```
backend/
├── src/
│   ├── main.ts                # Entry point
│   ├── app.module.ts          # Root module
│   ├── wizard/                # Wizard module
│   │   ├── wizard.module.ts
│   │   ├── wizard.controller.ts
│   │   ├── wizard.service.ts
│   │   ├── dto/               # Data Transfer Objects
│   │   └── entities/          # Database entities
│   ├── users/                 # Users module
│   │   ├── users.module.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── dto/
│   │   └── entities/
│   └── common/                # Shared code
│       ├── validators/
│       ├── filters/
│       └── interceptors/
└── test/                      # Tests
    ├── wizard.e2e-spec.ts
    └── users.e2e-spec.ts
```

## Getting Started

1. Initialize a NestJS project:
   ```bash
   npm i -g @nestjs/cli
   nest new .
   ```

2. Install necessary dependencies:
   ```bash
   npm install @nestjs/typeorm typeorm sqlite3 class-validator class-transformer
   ```

3. Start the development server:
   ```bash
   npm run start:dev
   ```

## Implementation Tips

1. Use TypeORM for database interactions
2. Implement DTO validation using class-validator
3. Create proper entity relationships
4. Implement error handling with exception filters
5. Use guards for request validation
6. Write unit and e2e tests
7. Document your API with Swagger