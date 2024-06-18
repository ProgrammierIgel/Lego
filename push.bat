@echo off

set /p UserInputPath="ModuleName> "
set /p Path="LocalPath> " 
set /p visibility="public/private/internal> "
set /p createRepo="createRepo> "
set yes=yes
if %createRepo%==%yes% gh repo create ProgrammierIgel/RolandPiano --%visibility%

git branch -M main %Path%
git remote add origin https://github.com/ProgrammierIgel/%UserInputPath%.git %PATH%
git push -u origin main %PATH%
