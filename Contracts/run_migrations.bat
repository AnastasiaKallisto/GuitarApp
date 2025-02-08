@echo off
echo Starting migrations...

REM Команда для создания миграции. Запускается на уровне проекта Contracts
echo Creating migration...
dotnet ef migrations add InitialCreate

REM Команда для применения миграции
echo Applying migration...
dotnet ef database update

echo Migrations completed!
pause