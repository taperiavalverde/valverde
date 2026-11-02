@echo off
chcp 65001 > nul
set "archivo=codigo-completo.txt"
if exist "%archivo%" del "%archivo%"

:: Crear el archivo con firma BOM UTF-8 para forzar al editor a leerlo bien
powershell -NoProfile -Command "Out-File -FilePath '%archivo%' -Encoding UTF8 -InputObject ''"

echo ESTRUCTURA DE ARCHIVOS Y CARPETAS >> "%archivo%"
echo ================================== >> "%archivo%"
tree /A /F >> "%archivo%"
echo. >> "%archivo%"

echo CONTENIDO DE ARCHIVOS >> "%archivo%"
echo ===================== >> "%archivo%"

:: Archivos de la carpeta raíz
for /f "delims=" %%F in ('dir /B /A-D *.* 2^>nul ^| findstr /V /B "00" ^| findstr /V /I "%archivo%"') do (
    echo. >> "%archivo%"
    echo --- ARCHIVO: %%F --- >> "%archivo%"
    type "%%F" >> "%archivo%" 2>nul
)

:: Archivos de la carpeta css
if exist "css\" (
    for /f "delims=" %%F in ('dir /B /A-D "css\*.*" 2^>nul ^| findstr /V /B "00"') do (
        echo. >> "%archivo%"
        echo --- ARCHIVO: css\%%F --- >> "%archivo%"
        type "css\%%F" >> "%archivo%" 2>nul
    )
)

:: Archivos de la carpeta js
if exist "js\" (
    for /f "delims=" %%F in ('dir /B /A-D "js\*.*" 2^>nul ^| findstr /V /B "00"') do (
        echo. >> "%archivo%"
        echo --- ARCHIVO: js\%%F --- >> "%archivo%"
        type "js\%%F" >> "%archivo%" 2>nul
    )
)