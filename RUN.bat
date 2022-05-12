@echo off
if exist node_modules\ (
node index.js
)else (
call npm install
cls
node index.js
)
pause