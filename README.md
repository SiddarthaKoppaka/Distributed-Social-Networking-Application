# Distributed Social Media Networking Application

![SE Project](https://github.com/user-attachments/assets/953d29dc-dea5-4dd2-b960-05d6d6c5f225)


## 🚀 Overview
The **Distributed Social Media Networking Application** is designed to provide a **scalable, high-performance, and user-friendly social networking platform**. Built with **Spring Boot and React.js**, it supports **real-time communication, media sharing, and a microservices-based architecture**. 

This application is containerized using **Docker**, ensuring seamless deployment across various environments while maintaining high availability and security.

## 🛠 Tech Stack
### **Frontend**
- **React.js** – Component-based UI framework
- **Redux** – State management
- **Tailwind CSS** – Modern styling framework
- **Axios** – HTTP client for API calls

### **Backend**
- **Java Spring Boot** – Backend service framework
- **Spring Security (JWT)** – Secure authentication
- **PostgreSQL** – Relational database for storing user and post data
- **Docker & Docker Compose** – Containerization and service orchestration
- **REST API** – Efficient communication between frontend and backend

### **Infrastructure & DevOps**
- **Dockerized Services** – Deployments using Docker
- **CI/CD Pipeline (GitHub Actions)** – Automated testing and deployment
- **AWS S3 for Media Storage** – Scalable cloud storage for user uploads
- **WebSockets for Real-time Notifications** – Live updates and messaging

## 🌟 Features
- 🔑 **Secure User Authentication** – Implements JWT-based security for safe login and registration
- 📝 **Post Creation & Management** – Users can create, edit, and delete posts
- 💬 **Real-time Chat & Notifications** – WebSockets enable live messaging and alerts
- 📸 **Media Upload & Sharing** – Supports high-resolution image and video uploads with AWS S3 storage
- 📊 **Analytics Dashboard** – Provides insights into user engagement and post interactions
- ⚡ **Microservices Architecture** – Modular, scalable design
- 🐳 **Fully Dockerized Deployment** – Simplifies installation and scaling

## 🔧 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone git@github.com:SiddarthaKoppaka/Distributed-Social-Networking-Application.git
cd Distributed-Social-Networking-Application
```

### **2️⃣ Backend Setup**
Ensure you have **Java 17** and **Maven** installed before proceeding.
```sh
cd Backend
cp .env.example .env  # Configure environment variables
mvn clean install
mvn spring-boot:run
```

### **3️⃣ Frontend Setup**
Ensure **Node.js (v16+)** is installed.
```sh
cd ../se-frontend
npm install
npm start
```

### **4️⃣ Run with Docker**
To deploy both frontend and backend services via **Docker Compose**:
```sh
docker-compose up --build
```

## 📌 API Structure
The backend exposes the following RESTful APIs:

| Endpoint            | Method | Description               |
|--------------------|--------|---------------------------|
| `/api/auth/login`  | POST   | Authenticate user         |
| `/api/auth/signup` | POST   | Register new user        |
| `/api/posts`       | GET    | Retrieve all posts       |
| `/api/posts`       | POST   | Create a new post        |
| `/api/users/:id`   | GET    | Fetch user profile       |
| `/api/chat`        | GET    | Retrieve chat messages   |
| `/api/notifications` | GET  | Fetch user notifications |

## 📷 System Architecture
The **microservices-based architecture** ensures scalability and modularity. The system flowchart below illustrates how components interact:

![Architecture Flowchart](./flowchart.png)

## 🏗 Future Improvements
- 📌 **Implement AI-based Content Moderation** – Automated filtering of inappropriate content.
- 🔎 **ElasticSearch Integration** – Fast indexing and searching for posts and users.
- 🚀 **Mobile App Support** – Develop iOS and Android clients.
- 💾 **Blockchain-Based Data Integrity** – Immutable data storage for key transactions.

## 🤝 Contributing
We welcome all contributors! Please follow the standard **Git workflow**:
1. **Fork** the repository.
2. **Clone** your forked repo.
3. Create a new **feature branch**.
4. **Commit** changes and push.
5. Submit a **pull request** for review.

### Contribution Guidelines:
- Follow **clean coding practices**.
- Write **unit tests** for all new features.
- Update **documentation** if required.

## 📜 License
This project is licensed under the **MIT License**.

