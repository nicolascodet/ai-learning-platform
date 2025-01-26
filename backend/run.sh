#!/bin/bash

# Kill any existing processes on ports 8000 and 8001
lsof -ti:8000,8001 | xargs kill -9 2>/dev/null || true

# Activate virtual environment
source venv/bin/activate

# Set Python path to include the backend directory
export PYTHONPATH="${PYTHONPATH:-.}:$(pwd)"

# Start the FastAPI server with explicit path
cd "$(dirname "$0")" && uvicorn main:app --reload --port 8001 