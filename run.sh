#!/bin/bash

# Kill any existing processes on ports 3000 and 8001
echo "Cleaning up existing processes..."
lsof -ti:3000,8001 | xargs kill -9 2>/dev/null || true

# Function to check if pnpm exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check and install pnpm if not present
if ! command_exists pnpm; then
    echo "Installing pnpm..."
    npm install -g pnpm
fi

# Setup frontend
echo "Setting up frontend..."
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    pnpm install
fi

# Setup backend
echo "Setting up backend..."
cd backend || exit 1

if [ ! -d "venv" ]; then
    echo "Creating Python virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment and install dependencies
source venv/bin/activate || exit 1
pip install fastapi uvicorn sqlalchemy python-jose pydantic python-multipart

# Start both services
echo "Starting services..."
echo "Frontend will be available at http://localhost:3000"
echo "Backend API will be available at http://localhost:8001"
echo "API documentation will be at http://localhost:8001/api/docs"

# Start backend
uvicorn main:app --reload --port 8001 &
BACKEND_PID=$!

# Start frontend
cd ..
pnpm dev &
FRONTEND_PID=$!

# Handle script termination
trap "kill $BACKEND_PID $FRONTEND_PID" EXIT

# Wait for both processes
wait 