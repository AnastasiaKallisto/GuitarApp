@echo off
echo Starting migrations...

REM Команда для создания миграции
echo Creating migration...
dotnet ef migrations add InitialCreate --project GuitarApp

REM Команда для применения миграции
echo Applying migration...
dotnet ef database update --project GuitarApp

echo Migrations completed!
pause