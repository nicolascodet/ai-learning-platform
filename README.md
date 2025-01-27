# AI Learning Platform

A project-based learning platform for AI development, featuring structured learning paths and hands-on projects.

## Features

- Interactive learning paths for AI development
- Project-based learning approach
- Modern, responsive UI built with Next.js and Tailwind CSS
- FastAPI backend with Swagger documentation

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- React

### Backend
- FastAPI
- Python
- SQLAlchemy
- Pydantic

## Getting Started

### Frontend Setup

1. Install dependencies:
```bash
pnpm install
```

2. Create a `.env.local` file with:
```
API_URL=http://localhost:8001/api
```

3. Start the development server:
```bash
pnpm dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Create and activate a virtual environment:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install fastapi uvicorn sqlalchemy python-jose pydantic python-multipart
```

3. Start the backend server:
```bash
./run.sh  # On Windows: python -m uvicorn main:app --reload --port 8001
```

The backend API will be available at `http://localhost:8001` with Swagger documentation at `/api/docs`

## Development

- Frontend code is in the `pages/` and `components/` directories
- Backend code is in the `backend/` directory
- API endpoints are defined in `backend/main.py`
- Database models are in `backend/app/models.py`

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```
3. Make your changes and commit them:
```bash
git add .
git commit -m "Add your commit message"
```
4. Push to your branch:
```bash
git push origin feature/your-feature-name
```
5. Create a Pull Request from your fork to this repository

Please make sure to update tests as appropriate and follow the existing code style.

## Testing

### Frontend Testing
```bash
pnpm test
```

### Backend Testing
```bash
cd backend
pytest
```

For coverage report:
```bash
pytest --cov=app tests/
```

Please ensure all tests pass before submitting a pull request. Aim for at least 80% test coverage for new features.

## Deployment

### Frontend Deployment
- Build the production version:
```bash
pnpm build
```
- The build output will be in the `.next` directory
- Deploy to your preferred hosting service (Vercel recommended)

### Backend Deployment
- Install production dependencies:
```bash
pip install -r requirements.txt
```
- Set environment variables for production
- Run with a production server:
```bash
gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app
```

Remember to set appropriate environment variables and security measures for production deployment. 