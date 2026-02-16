## CommunityBridge Resource Hub

### Background  

CommunityBridge is a nonprofit organization that supports low-income families by connecting them with essential local services such as food banks, shelters, job training programs, tutoring, and healthcare clinics.

Currently, staff track resources and referrals using spreadsheets, email, and paper forms. This process is inefficient and makes it difficult to:

- Keep resource information up to date  
- Quickly search for relevant services  
- Track which families were referred to which programs  
- Understand usage and demand across services  

CommunityBridge has asked Blueprint to design and build a simple internal web application that centralizes resource information and referral tracking in one place.

The goal is to create a lightweight tool that staff can use daily to manage community resources and record referrals.

---

# Product Goal  

Build a full-stack web application that allows nonprofit staff to:

- Manage community resources  
- Search and filter available services  
- Record and view referrals made to families  

The application should include:

- React frontend  
- FastAPI backend  
- PostgreSQL database  

---

# Feature — Resource Management  

## Context  

CommunityBridge maintains a directory of community programs and services. Staff frequently need to add new resources, update existing ones, and browse available services when assisting families.

The system should allow staff to store structured information about each resource and view it later.

## Requirements  

The system must allow staff to:

- Create a new resource  
- View a list of all resources  
- View details of a single resource  

Each resource must include:

- Name  
- Category (Food, Housing, Education, Healthcare, Employment, Other)  
- Description  
- Address  
- Contact email  
- Phone number  

---

# Feature — Search and Filtering  

## Context  

When working with families, staff often need to quickly find relevant services (for example: food banks in the area or education programs). Searching manually through spreadsheets is slow and error-prone.

The system should support quick discovery of resources through search and category filtering.

## Requirements  

The system must allow staff to:

- Search resources by name  
- Filter resources by category  

Search and filters should apply to the resource list view.

---

# Feature — Referral Tracking  

## Context  

When a staff member connects a family with a service, they record a referral. Tracking referrals helps CommunityBridge understand which resources are most used and ensures follow-up with families.

Currently, referrals are stored in notes or emails and are difficult to track historically.

The system should allow staff to record referrals linked to specific resources.

## Requirements  

The system must allow staff to:

- Create a referral to a resource  
- View referrals associated with a resource  

Each referral must include:

- Family name  
- Resource (selected from existing resources)  
- Date  
- Notes  

---

# Frontend Requirements

## Context  

CommunityBridge staff are not technical users. The interface should be simple, clear, and easy to navigate so staff can quickly access resource information and record referrals during client interactions.

## Requirements  

The frontend must include:

- Resource list page  
- Resource creation form  
- Resource detail page  
- Referral creation form  

The frontend must:

- Communicate with the FastAPI backend via API calls  
- Display data from the database  
- Submit forms to create resources and referrals  

---

# Backend Requirements

## Context  

The backend will serve as the system of record for resources and referrals. It must expose a clean API that the frontend can use and ensure data validation and persistence.

## Requirements  

The backend must:

- Provide REST API endpoints for resources and referrals  
- Validate request data  
- Store and retrieve data from PostgreSQL  

Expected endpoints include:

- POST /resources  
- GET /resources  
- GET /resources/{id}  
- POST /referrals  
- GET /resources/{id}/referrals  

---

# 🗄️ Database Requirements (PostgreSQL)

## Context  

CommunityBridge needs structured, relational data so that referrals can be linked to specific resources and queried reliably.

## Requirements  

The database must include at least two related tables:

### resources
- id  
- name  
- category  
- description  
- address  
- email  
- phone  

### referrals
- id  
- family_name  
- resource_id (foreign key to resources)  
- date  
- notes  

The relationship between resources and referrals must be enforced in the schema.

---

# 📦 Deliverable  

A working full-stack application implementing the features above, with frontend, backend, and database connected.