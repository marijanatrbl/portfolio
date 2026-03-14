# Personal Portfolio Website 
Personal Portfolio Website is a full-stack web application built with React and Django. It showcases my design and development projects through a vintage, simple interface, with project data and images managed on the backend and served through Django API.

- Frontend: React, CSS
- Backend: Django, Django REST API 
- Purpose: personal portfolio and project showcase
- Status: in progress

## Screenshots
Homepage
![Homepage Screenshot](https://github.com/marijanatrbl/portfolio/blob/7f1804d8918c3cabf54a7217001f9c94e2545186/1.png)

About me section (Homepage)
![About me section](https://github.com/marijanatrbl/portfolio/blob/7f1804d8918c3cabf54a7217001f9c94e2545186/2.png)

Projects (Frontend and backend)
![Procets on frontend](https://github.com/marijanatrbl/portfolio/blob/7f1804d8918c3cabf54a7217001f9c94e2545186/3.png)
![Projects on backend](https://github.com/marijanatrbl/portfolio/blob/7f1804d8918c3cabf54a7217001f9c94e2545186/4.png)

Gallery (Frontend and backend)
![Gallery on frontend](https://github.com/marijanatrbl/portfolio/blob/7f1804d8918c3cabf54a7217001f9c94e2545186/5.png)
![Gallery on backend](https://github.com/marijanatrbl/portfolio/blob/7f1804d8918c3cabf54a7217001f9c94e2545186/6.png)


## Features
- Dynamic project rendering from backend data
- Reusable React components
- Modern and minimalistic UI
- Project detail pages
- Animated gallery
- Django-powered backend for managing project and gallery content
- API communication between frontend and backend
- Image upload
- Admin panel

## Tech Stack
Frontend
- React
- TypeScript
- CSS
- Axios
- React Router

Backend
- Django
- Django REST Framework
- SQLite

## Project Structure
```
portfolio/my-portfolio/
├── backend/
│   ├── api/
│   ├── config/
│   ├── media/
│   ├── projects/
│   ├── venv/
│   ├── db.sqlite3
│   └── manage.py
└── frontend/
    ├── node_modules/
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        └── pages/
```
## How to run locally

Frontend
```
cd frontend
npm install
npm run dev
```

Backend
```
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
# What I learned / Challenges
This project was primarily developed as a learning exercise, with the goal of strengthening my ability to build a full-stack application independently and connect all parts of the development process.

One of the main challenges was recalling and integrating the different frontend and backend concepts required to make the application work as a whole. This included structuring the React frontend with reusable components, creating a Django backend to manage project data, and establishing communication between the two through an API.

Another important challenge was designing and implementing the data models, particularly handling projects that include images. This required setting up Django models, managing media files, and ensuring that images could be properly uploaded, stored, and displayed on the React frontend.

Through this process, I gained a deeper understanding of how frontend interfaces interact with backend logic, how to structure a full-stack project, and how to troubleshoot integration issues between different parts of the application.

## Future improvements
- Make the website responsive
- Add project filtering by category
- Implement gallery animation pause
- Deploy frontend and backend

## Author
- Marijana Munćan
- [GitHub](https://github.com/marijanatrbl)
- [LinkedIn](https://www.linkedin.com/in/marijana-mun%C4%87an-2386371b7/)
